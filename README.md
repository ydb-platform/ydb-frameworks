# YDB Frameworks & Integrations

[![Deploy to GitHub Pages](https://github.com/ydb-platform/ydb-frameworks/actions/workflows/deploy.yml/badge.svg)](https://github.com/ydb-platform/ydb-frameworks/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://ydb-platform.github.io/ydb-frameworks/)

Interactive visualization of YDB ecosystem: SDKs, drivers, ORMs, and integrations across multiple programming languages.

## 🌐 Live Demo

**[https://ydb-platform.github.io/ydb-frameworks/](https://ydb-platform.github.io/ydb-frameworks/?player=1)**

## Features

- **TreeMap visualization** — grouped by programming language
- **Filtering** — by language, category, responsible person, status
- **Status indicators** — production ready (✓) and in development (⚙)
- **System theme** — auto-detects light/dark mode
- **Query parameters** — `?theme=light` or `?theme=dark` for explicit theme

## Catalog data model

The catalog lives in `src/data/frameworks.js`. Newly audited records use a source-backed schema while the legacy fields remain readable by the UI:

- `maturity`: `experimental`, `preview`, `production`, `deprecated`, or `unknown`.
- `maintenance`: independent maintenance signals: `adding_features`, `accepting_prs`, `fixing_bugs`, `security_fixes_only`, or `unmaintained`.
- `integrationType`: a stable technical type such as `sdk`, `driver`, `orm`, `connector`, `plugin`, or `examples`.
- `documentation`, `releases`, `evidence`, and `evidenceReviewedAt`: primary-source links and the date on which claims were checked.
- `compatibility.minimumYdbVersion`: the minimum proven YDB version. `null` means that the minimum was not established; it never means universal compatibility.
- `migration`: roles, source systems, target, operating mode, schema-conversion support, checkpoint/resume support, limitations, and supporting sources.

`quality`, `attention`, and `impact` are legacy visualization scores. In particular, `quality` controls card opacity and must not be interpreted as maturity, maintenance state, or evidence quality. Records such as example collections may set `maturityApplies: false`; the neutral stored maturity for them is `unknown`.

### Compatibility and migration

The legacy `Статус` field is intentionally retained so existing consumers do not break. The UI and new consumers prefer `maturity` and fall back to a deterministic legacy mapping when it is absent. The existing production/development filter remains a two-bucket presentation: only `maturity: production` is placed in production; all other maturity values are non-production.

Consumers should migrate in this order:

1. Read `maturity`, falling back to `Статус` only for records not yet audited.
2. Read maintenance state exclusively from `maintenance`; do not infer it from maturity.
3. Treat `unknown` and `evidenceRequired: true` as an explicit evidence gap, not as a negative claim.
4. Stop using `quality` as a lifecycle signal.

Evidence should come from an official repository, package registry, release page, or YDB/upstream documentation. A GitHub topic, name match, issue, or roadmap entry alone is not enough to assert that an integration exists or is supported.

## Development

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm test
npm run lint
npm run check:links
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

## License

[Apache 2.0](LICENSE)
