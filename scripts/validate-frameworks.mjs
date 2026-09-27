import {
  frameworks,
  maintenanceValues,
  maturityValues,
} from "../src/data/frameworks.js";

const errors = [];
const warnings = [];

const normalizeName = (value) => String(value ?? "")
  .normalize("NFKC")
  .toLocaleLowerCase("en-US")
  .replace(/[^a-z0-9а-яё]+/gu, "");

const normalizeRepository = (value) => String(value ?? "")
  .trim()
  .toLocaleLowerCase("en-US")
  .replace(/\.git$/u, "")
  .replace(/\/+$/u, "");

const isHttpUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const addToIndex = (index, key, product) => {
  if (!key) return;
  const products = index.get(key) ?? [];
  products.push(product);
  index.set(key, products);
};

const names = new Map();
const ids = new Map();
const repositories = new Map();

for (const [index, framework] of frameworks.entries()) {
  const product = framework["Продукт"] || `record #${index + 1}`;
  addToIndex(names, normalizeName(framework.name || product), product);
  addToIndex(ids, normalizeName(framework.id), product);
  addToIndex(repositories, normalizeRepository(framework.repository), product);

  if (framework.repository && !isHttpUrl(framework.repository)) {
    errors.push(`${product}: repository is not an HTTP(S) URL`);
  }

  if (!framework.maturity) continue; // Legacy records remain valid during migration.

  if (!maturityValues.includes(framework.maturity)) {
    errors.push(`${product}: unsupported maturity ${JSON.stringify(framework.maturity)}`);
  }
  if (!framework.id || !framework.name || !framework.integrationType) {
    errors.push(`${product}: audited records require id, name and integrationType`);
  }
  if (!Array.isArray(framework.maintenance)) {
    errors.push(`${product}: maintenance must be an array`);
  } else {
    for (const value of framework.maintenance) {
      if (!maintenanceValues.includes(value)) {
        errors.push(`${product}: unsupported maintenance value ${JSON.stringify(value)}`);
      }
    }
  }
  if (!Array.isArray(framework.documentation)) {
    errors.push(`${product}: documentation must be an array`);
  } else {
    for (const document of framework.documentation) {
      if (!document?.label || !isHttpUrl(document?.url)) {
        errors.push(`${product}: every documentation entry requires a label and HTTP(S) URL`);
      }
    }
  }
  if (framework.releases !== null && !isHttpUrl(framework.releases)) {
    errors.push(`${product}: releases must be null or an HTTP(S) URL`);
  }
  if (!framework.compatibility || !("minimumYdbVersion" in framework.compatibility)) {
    errors.push(`${product}: compatibility.minimumYdbVersion is required (null means not established)`);
  }
  if (!Array.isArray(framework.evidence)) {
    errors.push(`${product}: evidence must be an array`);
  } else {
    for (const evidence of framework.evidence) {
      if (!evidence?.claim || !isHttpUrl(evidence?.url)) {
        errors.push(`${product}: every evidence entry requires a claim and HTTP(S) URL`);
      }
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(framework.evidenceReviewedAt || "")) {
    errors.push(`${product}: evidenceReviewedAt must use YYYY-MM-DD`);
  }
  if (!framework.migration || !Array.isArray(framework.migration.roles)) {
    errors.push(`${product}: migration metadata with roles is required`);
  }
  if (framework.maturity === "unknown" && framework.maturityApplies !== false && !framework.evidenceRequired) {
    errors.push(`${product}: unknown maturity requires evidenceRequired=true`);
  }
  if (framework.maturityApplies === false && framework.maturity !== "unknown") {
    errors.push(`${product}: non-applicable maturity must use the neutral unknown value`);
  }
  if (framework.evidenceRequired && (framework.repository || framework.evidence.length > 0)) {
    errors.push(`${product}: evidence-required records must not contain an unverified repository or evidence`);
  }
  if (framework.maturity === "production" && framework["Статус"]?.includes("В разработке")) {
    errors.push(`${product}: production maturity contradicts the legacy development status`);
  }
  if (framework.maturity === "deprecated" && framework["Статус"]?.includes("Production ready")) {
    errors.push(`${product}: deprecated maturity contradicts the legacy production status`);
  }
}

for (const [key, products] of names) {
  if (products.length > 1) errors.push(`duplicate normalized name ${JSON.stringify(key)}: ${products.join(", ")}`);
}
for (const [key, products] of ids) {
  if (key && products.length > 1) errors.push(`duplicate id ${JSON.stringify(key)}: ${products.join(", ")}`);
}
for (const [repository, products] of repositories) {
  if (repository && products.length > 1) {
    warnings.push(`shared repository ${repository}: ${products.join(", ")}`);
  }
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

console.log(`Validated ${frameworks.length} records (${frameworks.filter(f => f.maturity).length} on the evidence schema).`);
if (errors.length > 0) process.exitCode = 1;
