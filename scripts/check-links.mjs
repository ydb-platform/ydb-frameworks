import { frameworks } from "../src/data/frameworks.js";

const urlPattern = /https?:\/\/[^\s"'<>]+/gu;
const urls = new Set();

const collectUrls = (value) => {
  if (typeof value === "string") {
    for (const match of value.matchAll(urlPattern)) {
      urls.add(match[0].replace(/[),.;]+$/u, ""));
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(collectUrls);
    return;
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach(collectUrls);
  }
};

collectUrls(frameworks);

const pending = [...urls].sort();
const failures = [];
const restricted = [];
let checked = 0;

const request = async (url) => {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: {
          "User-Agent": "ydb-frameworks-link-check/1.0",
          "Accept": "text/html,application/json;q=0.9,*/*;q=0.8",
        },
        signal: AbortSignal.timeout(20_000),
      });
      if (response.status >= 500 && attempt === 0) continue;
      return response.status;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};

const worker = async () => {
  while (pending.length > 0) {
    const url = pending.shift();
    try {
      const status = await request(url);
      checked += 1;
      if ([401, 403, 405, 429].includes(status)) {
        restricted.push({ url, status });
      } else if (status < 200 || status >= 400) {
        failures.push({ url, status });
      }
    } catch (error) {
      checked += 1;
      failures.push({ url, error: error?.message || String(error) });
    }
  }
};

await Promise.all(Array.from({ length: 4 }, worker));

for (const result of restricted) {
  console.warn(`WARN ${result.status} (reachable but restricted): ${result.url}`);
}
for (const result of failures) {
  console.error(`ERROR ${result.status || result.error}: ${result.url}`);
}
console.log(`Checked ${checked} unique HTTP(S) links: ${failures.length} failed, ${restricted.length} restricted.`);
if (failures.length > 0) process.exitCode = 1;
