export const frameworks = [
  {
    "Продукт": "YDB MCP",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["AI/ML", "Application", "AppTeam"],
    "description": "Model Context Protocol server for YDB. It allows to work with YDB databases from any LLM that supports MCP. This integration enables AI-powered database operations and natural language interactions with your YDB instances.",
    "attention": 2,
    "impact": 4,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-mcp",
    "timeline": [
      { "date": "2024-12-01", "status": "В разработке", "description": "Initial development", "quality": 50 },
      { "date": "2025-01-15", "status": "Production ready", "description": "First stable release", "quality": 85 }
    ]
  },
  {
    "Продукт": "ydb-ai-skills",
    "Статус": ["В разработке", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "polrk",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Python",
    "categories": ["AI/ML", "Application", "AppTeam"],
    "description": "AI coding agent skills for YDB — for writing YQL, designing schemas, and reviewing application code against YDB SDK best practices. Skills auto-trigger based on context and install into Claude Code, Cursor, Copilot, Gemini and other agents.",
    "attention": 2,
    "impact": 5,
    "quality": 40,
    "repository": "https://github.com/ydb-platform/ydb-ai-skills",
    "timeline": [
      { "date": "2026-05-18", "status": "В разработке", "description": "First skills landed (ydb-core, ydb-table) with Go/Java audit rules", "quality": 40 }
    ]
  },
  {
    "id": "django-ydb-backend",
    "name": "django-ydb-backend",
    "Продукт": "django-ydb-backend",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "driver",
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Django YDB Backend Overview This is a Django database backend for YDB, a distributed SQL database system. The backend allows Django applications to use YDB as their primary database while maintaining compatibility with Django's ORM layer.",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/django-ydb-backend",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/django-ydb-backend" },
      { "label": "PyPI", "url": "https://pypi.org/project/django-ydb-backend/" }
    ],
    "releases": "https://pypi.org/project/django-ydb-backend/#history",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [
        { "claim": "The README documents Django >= 3.2 and ydb-dbapi >= 0.1.8, but no minimum YDB server version.", "url": "https://github.com/ydb-platform/django-ydb-backend" }
      ]
    },
    "evidence": [
      { "claim": "The only published package is the beta prerelease 0.0.1b1.", "url": "https://pypi.org/project/django-ydb-backend/#history" },
      { "claim": "The repository documents installation, supported operations, limitations and an integration-test command.", "url": "https://github.com/ydb-platform/django-ydb-backend" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility", "schema_migration"],
      "sourceSystems": ["Django"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": ["The README limits the claim to basic CRUD, most common fields and query operations, and notes limitations for secondary indexes."],
      "evidence": ["https://github.com/ydb-platform/django-ydb-backend"]
    },
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "Initial development started", "quality": 10 },
      { "date": "2024-12-01", "status": "В разработке", "description": "Student project development", "quality": 25 }
    ]
  },
  {
    "Продукт": "SQLGlot",
    "Статус": ["В разработке", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Migration", "Application", "Code Generation", "Студенческий проект", "AppTeam"],
    "description": "SQLGlot is a no-dependency SQL parser, transpiler, optimizer, and engine. It can be used to format SQL or translate between 31 different dialects.",
    "attention": 2,
    "impact": 4,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-sqlglot-plugin",
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "YDB dialect development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "Ariga/Atlas",
    "Статус": ["В разработке"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library", "Студенческий проект", "AppTeam"],
    "description": "Database schema as code tool for managing and migrating database schemas",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ariga-atlas/tree/ydb-develop",
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "YDB driver development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "Ent. An entity framework for Go",
    "Статус": ["В разработке"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["ORM", "Library", "Студенческий проект", "AppTeam"],
    "description": "An entity framework for Go with code generation, graph traversal and schema migration",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ent/tree/ydb-develop",
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "YDB driver development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "HashiCorp Vault over YDB",
    "Статус": ["В разработке"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Secrets Management", "Secrets", "IAM", "PAM", "Authentication", "Authorization", "KMS", "Application", "Студенческий проект", "AppTeam"],
    "description": "HashiCorp Vault storage backend using YDB for secrets management and encryption",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/hashicorp-vault/tree/ydb-backend",
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "YDB backend development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "docker image local-ydb",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "polrk",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Docker",
    "categories": ["CI/CD", "AppTeam"],
    "description": "Official Docker image for running YDB locally for development and testing",
    "attention": 4,
    "impact": 10,
    "quality": 85,
    "repository": "https://hub.docker.com/r/ydbplatform/local-ydb",
    "timeline": [
      { "date": "2022-04-19", "status": "Production ready", "description": "Initial release with YDB OpenSource", "quality": 70 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable multi-architecture support", "quality": 85 }
    ]
  },
  {
    "Продукт": "Chaos testing framework (GitHub SLO Action)",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "polrk",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Js/Ts",
    "categories": ["CI/CD", "AppTeam"],
    "description": "GitHub Action for SLO testing and chaos engineering with YDB",
    "attention": 4,
    "impact": 10,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-slo-action",
    "timeline": [
      { "date": "2023-06-01", "status": "В разработке", "description": "Initial development", "quality": 30 },
      { "date": "2024-01-01", "status": "Production ready", "description": "First stable release", "quality": 65 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov", "rekby"],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Pure Go native SDK for YDB with connection pooling, retries and all YDB features",
    "attention": 8,
    "impact": 10,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk",
    "timeline": [
      { "date": "2019-04-17", "status": "В разработке", "description": "First commit", "quality": 20 },
      { "date": "2020-01-01", "status": "Production ready", "description": "First stable release v1", "quality": 60 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release, v3 major rewrite", "quality": 80 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Mature SDK with full feature support", "quality": 95 }
    ]
  },
  {
    "Продукт": "database/sql",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Go standard database/sql interface driver for YDB",
    "attention": 8,
    "impact": 6,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk",
    "timeline": [
      { "date": "2019-07-17", "status": "В разработке", "description": "Initial database/sql support", "quality": 30 },
      { "date": "2020-06-01", "status": "Production ready", "description": "Stable database/sql driver", "quality": 60 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 75 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Full standard compliance", "quality": 85 }
    ]
  },
  {
    "Продукт": "ydb terraform provider",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["IaaS", "AppTeam"],
    "description": "Terraform provider for managing YDB resources as Infrastructure as Code",
    "attention": 3,
    "impact": 4,
    "quality": 75,
    "repository": "https://github.com/ydb-platform/terraform-provider-ydb",
    "timeline": [
      { "date": "2021-06-01", "status": "В разработке", "description": "Initial development", "quality": 30 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 60 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable provider", "quality": 75 }
    ]
  },
  {
    "Продукт": "GORM",
    "Статус": ["В разработке", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "The fantastic ORM library for Golang, aims to be developer friendly",
    "attention": 3,
    "impact": 2,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/gorm-driver",
    "timeline": [
      { "date": "2023-10-03", "status": "В разработке", "description": "Initial YDB GORM driver", "quality": 25 }
    ]
  },
  {
    "Продукт": "XORM",
    "Статус": ["В разработке", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Simple and powerful ORM for Go with chainable API",
    "attention": 4,
    "impact": 1,
    "quality": 10,
    "repository": "https://github.com/ydb-platform/xorm",
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "YDB driver development started", "quality": 10 }
    ]
  },
  {
    "Продукт": "goose",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "asmyasnikov",
    "Кто еще может помочь": ["zkpo"],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library", "Application", "AppTeam"],
    "description": "Database migration tool for Go with SQL and Go migration support",
    "attention": 2,
    "impact": 6,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk",
    "timeline": [
      { "date": "2023-11-12", "status": "Production ready", "description": "YDB support merged to upstream goose", "quality": 95 }
    ]
  },
  {
    "Продукт": "Grafana over YDB",
    "Статус": ["В разработке"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["BI", "Observability", "Library", "Application", "AppTeam"],
    "description": "Grafana data source plugin for querying and visualizing data from YDB",
    "attention": 6,
    "impact": 3,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-grafana-datasource-plugin",
    "timeline": [
      { "date": "2021-06-01", "status": "В разработке", "description": "Initial plugin development", "quality": 30 },
      { "date": "2024-01-01", "status": "В разработке", "description": "Plugin improvements", "quality": 50 }
    ]
  },
  {
    "id": "sqlc-ydb",
    "name": "sqlc-ydb",
    "Продукт": "SQLC",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "code_generator",
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov", "nepunep"],
    "Язык программирования": "Go",
    "categories": ["Code Generation", "Library", "AppTeam"],
    "description": "Generate type-safe Go code from SQL queries",
    "attention": 5,
    "impact": 2,
    "quality": 40,
    "repository": "https://github.com/ydb-platform/sqlc-ydb",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/sqlc-ydb" }
    ],
    "releases": "https://github.com/ydb-platform/sqlc-ydb/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": []
    },
    "evidence": [
      { "claim": "The project explicitly calls YDB support experimental because sqlc external engine plugins are not supported upstream.", "url": "https://github.com/ydb-platform/sqlc-ydb" },
      { "claim": "The repository provides configuration and examples but has no published GitHub releases.", "url": "https://github.com/ydb-platform/sqlc-ydb/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility", "developer_tool"],
      "sourceSystems": ["sqlc"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": ["Requires an sqlc engine-plugin checkout or compatible fork because the engine plugin system is not available in upstream sqlc."],
      "evidence": ["https://github.com/ydb-platform/sqlc-ydb"]
    },
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "YDB support development started", "quality": 40 }
    ]
  },
  {
    "Продукт": "fluentbit",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "asmyasnikov",
    "Кто еще может помочь": ["zkpo", "mzinal"],
    "Язык программирования": "Go",
    "categories": ["Data Ingestion", "Observability", "Library", "AppTeam"],
    "description": "Fluent Bit output plugin for streaming logs and metrics to YDB",
    "attention": 1,
    "impact": 4,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/fluent-bit-ydb",
    "timeline": [
      { "date": "2023-09-18", "status": "Production ready", "description": "YDB output plugin released", "quality": 95 }
    ]
  },
  {
    "Продукт": "jaeger ydb store",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "",
    "Кто еще может помочь": ["asmyasnikov", "zkpo"],
    "Язык программирования": "Go",
    "categories": ["Observability", "Data Ingestion", "Application", "Library", "AppTeam"],
    "description": "Jaeger distributed tracing storage backend using YDB",
    "attention": 2,
    "impact": 5,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/jaeger-ydb-store",
    "timeline": [
      { "date": "2020-01-01", "status": "В разработке", "description": "Initial development", "quality": 30 },
      { "date": "2022-01-01", "status": "Production ready", "description": "Stable release", "quality": 50 }
    ]
  },
  {
    "id": "serverless-ydb-proxy",
    "name": "serverless ydb proxy",
    "Продукт": "serverless ydb proxy",
    "Статус": ["Evidence required"],
    "maturity": "unknown",
    "maintenance": [],
    "integrationType": "service",
    "Ответственный": "prkkofev",
    "Кто еще может помочь": ["asmyasnikov", "rekby", "zkpo"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless", "AppTeam"],
    "description": "Serverless proxy for YDB access in Yandex Cloud Functions",
    "attention": 6,
    "impact": 5,
    "quality": 95,
    "repository": "",
    "documentation": [],
    "releases": null,
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [],
    "evidenceRequired": true,
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": [],
      "sourceSystems": [],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": []
    },
    "timeline": [
      { "date": "2020-06-01", "status": "В разработке", "description": "Initial development", "quality": 50 },
      { "date": "2021-01-01", "status": "Production ready", "description": "Production deployment", "quality": 80 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable service", "quality": 95 }
    ]
  },
  {
    "id": "serverless-docapi-proxy",
    "name": "serverless docapi proxy",
    "Продукт": "serverless docapi proxy",
    "Статус": ["Evidence required"],
    "maturity": "unknown",
    "maintenance": [],
    "integrationType": "service",
    "Ответственный": "prkkofev",
    "Кто еще может помочь": ["asmyasnikov", "rekby", "zkpo"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless", "AppTeam"],
    "description": "DynamoDB-compatible Document API proxy for YDB serverless",
    "attention": 8,
    "impact": 5,
    "quality": 85,
    "repository": "",
    "documentation": [],
    "releases": null,
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [],
    "evidenceRequired": true,
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": [],
      "sourceSystems": [],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": []
    },
    "timeline": [
      { "date": "2020-06-01", "status": "В разработке", "description": "Initial development", "quality": 40 },
      { "date": "2021-01-01", "status": "Production ready", "description": "Production deployment", "quality": 70 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable service", "quality": 85 }
    ]
  },
  {
    "Продукт": "ydb-cpp-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "brgayazov",
    "Кто еще может помочь": ["pnv1"],
    "Язык программирования": "C/C++",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native C++ SDK for YDB with full feature support and high performance",
    "attention": 9,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-cpp-sdk",
    "timeline": [
      { "date": "2016-04-06", "status": "В разработке", "description": "Initial C++ SDK development", "quality": 30 },
      { "date": "2018-01-01", "status": "Production ready", "description": "Internal production use", "quality": 70 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 80 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Standalone SDK extracted from YDB", "quality": 90 }
    ]
  },
  {
    "id": "odbc",
    "name": "ODBC",
    "Продукт": "ODBC",
    "Статус": ["Evidence required"],
    "maturity": "unknown",
    "maintenance": [],
    "integrationType": "driver",
    "Ответственный": "brgayazov",
    "Кто еще может помочь": [],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Open Database Connectivity driver for YDB",
    "attention": 4,
    "impact": 7,
    "quality": 25,
    "repository": "",
    "documentation": [],
    "releases": null,
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [],
    "evidenceRequired": true,
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": [],
      "sourceSystems": [],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": []
    },
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "ODBC driver development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "ydb-python-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": ["rekby"],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Pure Python native SDK for YDB with async support",
    "attention": 8,
    "impact": 10,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-python-sdk",
    "timeline": [
      { "date": "2017-05-18", "status": "В разработке", "description": "Initial Python SDK development", "quality": 30 },
      { "date": "2019-01-01", "status": "Production ready", "description": "First stable release", "quality": 60 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 75 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Async support and improvements", "quality": 85 }
    ]
  },
  {
    "Продукт": "federated ydb-python-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": ["rekby"],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Federation", "Library", "AppTeam"],
    "description": "Federated queries support for Python SDK across multiple YDB clusters",
    "attention": 3,
    "impact": 4,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-python-sdk",
    "timeline": [
      { "date": "2023-12-22", "status": "В разработке", "description": "Federation support development", "quality": 50 },
      { "date": "2024-06-01", "status": "Production ready", "description": "Federation support released", "quality": 85 }
    ]
  },
  {
    "Продукт": "federated ydb-go-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["rekby"],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Federation", "Library", "AppTeam"],
    "description": "Federated queries support for Go SDK across multiple YDB clusters",
    "attention": 2,
    "impact": 4,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk",
    "timeline": [
      { "date": "2023-12-22", "status": "В разработке", "description": "Federation support development", "quality": 50 },
      { "date": "2024-06-01", "status": "Production ready", "description": "Federation support released", "quality": 85 }
    ]
  },
  {
    "id": "logbroker-cli",
    "name": "logbroker cli",
    "Продукт": "logbroker cli",
    "Статус": ["Evidence required"],
    "maturity": "unknown",
    "maintenance": [],
    "integrationType": "cli",
    "Ответственный": "",
    "Кто еще может помочь": ["ovcharuk"],
    "Язык программирования": "Python",
    "categories": ["Console", "Data Ingestion", "Application", "AppTeam"],
    "description": "CLI tool for working with Logbroker/YDB Topics",
    "attention": 3,
    "impact": 4,
    "quality": 25,
    "repository": "",
    "documentation": [],
    "releases": null,
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [],
    "evidenceRequired": true,
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": [],
      "sourceSystems": [],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": []
    },
    "timeline": [
      { "date": "2023-01-01", "status": "Production ready", "description": "CLI tool for topics management", "quality": 25 }
    ]
  },
  {
    "Продукт": "@ydbjs/langchain",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "polrk",
    "Кто еще может помочь": ["ovcharuk"],
    "Язык программирования": "Js/Ts",
    "categories": ["Vector Store", "AI/ML", "Library", "AppTeam"],
    "description": "LangChain Js/Ts integration with YDB as vector store for AI/ML applications",
    "attention": 2,
    "impact": 7,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-js-sdk",
    "timeline": [
      { "date": "2024-06-01", "status": "Production ready", "description": "Vector store support released", "quality": 85 }
    ]
  },
  {
    "Продукт": "@ydbjs/drizzle-adapter",
    "Статус": ["В разработке", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "polrk",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["ORM", "Migration", "Library", "AppTeam"],
    "description": "Drizzle ORM adapter for YDB: Drizzle-compatible database API, schema DSL with YDB-specific options (partitioning, TTL, column families, indexes), YDB/YQL query extensions, DDL builders and migrations. Supports CRUD, relational queries with automatic joins, transactions and vector search.",
    "attention": 2,
    "impact": 7,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-js-sdk",
    "timeline": [
      { "date": "2026-05-20", "status": "В разработке", "description": "First npm release of @ydbjs/drizzle-adapter (v0.1.x)", "quality": 50 }
    ]
  },
  {
    "id": "langchain-ydb",
    "name": "langchain-ydb",
    "Продукт": "langchain-ydb",
    "Статус": ["В разработке", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "maturity": "preview",
    "maintenance": ["adding_features", "accepting_prs", "fixing_bugs"],
    "integrationType": "library",
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Vector Store", "AI/ML", "Library", "AppTeam"],
    "description": "LangChain integration with YDB as vector store for AI/ML applications",
    "attention": 2,
    "impact": 7,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/langchain-ydb",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/langchain-ydb" },
      { "label": "PyPI", "url": "https://pypi.org/project/langchain-ydb/" }
    ],
    "releases": "https://github.com/ydb-platform/langchain-ydb/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README documents installation, synchronous and asynchronous usage, credentials and vector-store operations, and the repository runs functional and lint checks.", "url": "https://github.com/ydb-platform/langchain-ydb" },
      { "claim": "Versioned releases are published, but no explicit YDB compatibility or support policy is documented.", "url": "https://github.com/ydb-platform/langchain-ydb/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["LangChain"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["This is a LangChain vector-store library, not a general-purpose application or data migration path."],
      "evidence": ["https://github.com/ydb-platform/langchain-ydb"]
    },
    "timeline": [
      { "date": "2024-08-01", "status": "В разработке", "description": "LangChain integration development", "quality": 50 },
      { "date": "2024-12-01", "status": "Production ready", "description": "Vector store support released", "quality": 85 }
    ]
  },
  {
    "id": "apache-airflow-providers-ydb",
    "name": "apache-airflow-providers-ydb",
    "Продукт": "apache airflow",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "maturity": "production",
    "maintenance": ["adding_features", "accepting_prs", "fixing_bugs"],
    "integrationType": "provider",
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ETL", "Workflow", "Library", "AppTeam"],
    "description": "Apache Airflow provider for YDB with operators and hooks",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "https://github.com/apache/airflow/tree/main/providers/ydb",
    "documentation": [
      { "label": "Apache Airflow provider documentation", "url": "https://airflow.apache.org/docs/apache-airflow-providers-ydb/stable/" },
      { "label": "Official YDB guide", "url": "https://ydb.tech/docs/en/integrations/orchestration/airflow" }
    ],
    "releases": "https://pypi.org/project/apache-airflow-providers-ydb/#history",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [{ "claim": "Upstream documents minimum Airflow and Python-package versions but not a minimum YDB server version.", "url": "https://airflow.apache.org/docs/apache-airflow-providers-ydb/stable/" }]
    },
    "evidence": [
      { "claim": "The provider is maintained and released in Apache Airflow with source, tests, versioned packages, API reference and stable installation documentation.", "url": "https://github.com/apache/airflow/tree/main/providers/ydb" },
      { "claim": "Official YDB documentation describes provider installation and use for queries, uploads and transaction orchestration.", "url": "https://ydb.tech/docs/en/integrations/orchestration/airflow" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility", "developer_tool"],
      "sourceSystems": ["Apache Airflow"],
      "target": "YDB",
      "mode": "orchestration",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The provider orchestrates YDB hooks and operators; it does not by itself convert schemas or provide a complete source-to-YDB migration engine."],
      "evidence": ["https://airflow.apache.org/docs/apache-airflow-providers-ydb/stable/", "https://ydb.tech/docs/en/integrations/orchestration/airflow"]
    },
    "timeline": [
      { "date": "2024-06-27", "status": "Production ready", "description": "YDB Airflow provider released", "quality": 90 }
    ]
  },
  {
    "Продукт": "sqlalchemy",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Standard API", "Library", "AppTeam"],
    "description": "The Python SQL Toolkit and Object Relational Mapper dialect for YDB",
    "attention": 3,
    "impact": 6,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy",
    "timeline": [
      {
        "date": "2019-05-20",
        "description": "Initial YDB support in SQLAlchemy",
        "status": "В разработке",
        "authors": ["blinkov"],
        "quality": 25,
        "attention": 3,
      },
      {
        "date": "2023-09-01",
        "description": "Production ready YDB support in SQLAlchemy",
        "status": "Production ready",
        "authors": ["ovcharuk"],
        "quality": 50,
        "attention": 5,
      },
    ]
  },
  {
    "Продукт": "dbt",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ELT", "Analytics", "Library", "AppTeam"],
    "description": "dbt (data build tool) adapter for YDB analytics transformations",
    "attention": 4,
    "impact": 3,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/dbt-ydb",
    "timeline": [
      { "date": "2024-03-01", "status": "В разработке", "description": "dbt adapter development", "quality": 30 },
      { "date": "2024-09-01", "status": "Production ready", "description": "First stable release", "quality": 50 }
    ]
  },
  {
    "Продукт": "DBAPI",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Python Database API Specification (PEP 249) implementation for YDB",
    "attention": 2,
    "impact": 8,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-python-dbapi",
    "timeline": [
      {
        "date": "2019-05-20",
        "description": "Initial YDB support in DBAPI",
        "status": "В разработке",
        "authors": ["blinkov"],
        "quality": 25,
        "attention": 5,
      },
      {
        "date": "2023-09-01",
        "description": "YDB implementation of DB-API",
        "status": "Production ready",
        "authors": ["ovcharuk"],
        "quality": 50,
        "attention": 5,
      }
    ]
  },
  {
    "Продукт": "ydb-java-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["pnv1", "kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native Java SDK for YDB with reactive streams and gRPC transport",
    "attention": 9,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-sdk",
    "timeline": [
      { "date": "2018-05-05", "status": "В разработке", "description": "Initial Java SDK development", "quality": 30 },
      { "date": "2019-01-01", "status": "Production ready", "description": "First stable release", "quality": 60 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 80 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Mature SDK", "quality": 90 }
    ]
  },
  {
    "Продукт": "JDBC Driver",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Java Database Connectivity (JDBC) driver for YDB",
    "attention": 9,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver",
    "timeline": [
      { "date": "2021-05-18", "status": "В разработке", "description": "Initial JDBC driver", "quality": 40 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 70 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Full JDBC compliance", "quality": 90 }
    ]
  },
  {
    "Продукт": "ydb-importer",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion", "Application", "AppTeam"],
    "description": "Tool for importing data from various sources into YDB",
    "attention": 2,
    "impact": 3,
    "quality": 60,
    "repository": "https://github.com/ydb-platform/ydb-importer",
    "timeline": [
      { "date": "2023-06-01", "status": "В разработке", "description": "Initial development", "quality": 30 },
      { "date": "2024-01-01", "status": "Production ready", "description": "First stable release", "quality": 60 }
    ]
  },
  {
    "Продукт": "YDB Spark Connector",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги", "Заносим свежие фичи"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["ETL", "Analytics", "Library", "Workflow", "AppTeam"],
    "description": "Apache Spark connector for reading and writing data to YDB",
    "attention": 6,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-spark-connector",
    "timeline": [
      { "date": "2023-06-01", "status": "В разработке", "description": "Spark connector development", "quality": 30 },
      { "date": "2024-06-01", "status": "Production ready", "description": "First stable release", "quality": 65 }
    ]
  },
  {
    "id": "ydb-js-sdk",
    "name": "ydb-js-sdk",
    "Продукт": "ydb-js-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "maturity": "production",
    "maintenance": ["accepting_prs", "fixing_bugs", "adding_features"],
    "integrationType": "sdk",
    "Ответственный": "polrk",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native JavaScript/TypeScript SDK for YDB with Node.js support",
    "attention": 4,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-js-sdk",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/ydb-js-sdk" },
      { "label": "Examples", "url": "https://github.com/ydb-platform/ydb-js-examples" },
      { "label": "npm @ydbjs/core", "url": "https://www.npmjs.com/package/@ydbjs/core" }
    ],
    "releases": "https://github.com/ydb-platform/ydb-js-sdk/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": []
    },
    "evidence": [
      { "claim": "The SDK documents installation, package-level documentation, examples, testing, versioning and release procedures.", "url": "https://github.com/ydb-platform/ydb-js-sdk" },
      { "claim": "The current SDK is distributed as scoped @ydbjs packages through npm.", "url": "https://www.npmjs.com/package/@ydbjs/core" },
      { "claim": "Versioned releases are published from the current repository.", "url": "https://github.com/ydb-platform/ydb-js-sdk/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["JavaScript", "TypeScript"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": ["https://github.com/ydb-platform/ydb-js-sdk"]
    },
    "timeline": [
      { "date": "2019-10-03", "status": "В разработке", "description": "Initial Node.js SDK development", "quality": 30 },
      { "date": "2020-06-01", "status": "Production ready", "description": "First stable release", "quality": 50 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 60 },
      { "date": "2024-01-01", "status": "Production ready", "description": "TypeScript improvements", "quality": 65 }
    ]
  },
  {
    "Продукт": "ydb cli",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "pnv1",
    "Кто еще может помочь": ["brgayazov"],
    "Язык программирования": "C/C++",
    "categories": ["Console", "Admin", "Application", "AppTeam"],
    "description": "Official YDB command-line interface for database administration and queries",
    "attention": 10,
    "impact": 10,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb",
    "timeline": [
      { "date": "2018-01-01", "status": "В разработке", "description": "YDB CLI development", "quality": 50 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release with YDB", "quality": 75 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Full-featured CLI", "quality": 85 }
    ]
  },
  {
    "id": "ydb-postgres-fdw",
    "name": "YDB FDW extension for PostgreSQL",
    "Продукт": "YDB FDW extension for PostgreSQL",
    "Статус": ["Evidence required"],
    "maturity": "unknown",
    "maintenance": [],
    "integrationType": "driver",
    "Ответственный": "rekby",
    "Кто еще может помочь": ["spotivan", "brgayazov"],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "PostgreSQL", "Library", "AppTeam"],
    "description": "PostgreSQL Foreign Data Wrapper for querying YDB tables from PostgreSQL",
    "attention": 10,
    "impact": 10,
    "quality": 25,
    "repository": "",
    "documentation": [],
    "releases": null,
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [],
    "evidenceRequired": true,
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": [],
      "sourceSystems": [],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": [],
      "evidence": []
    },
    "timeline": [
      { "date": "2024-09-01", "status": "В разработке", "description": "FDW development started", "quality": 25 }
    ]
  },
  {
    "Продукт": "ydb-dotnet-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native .NET SDK for YDB with async/await support",
    "attention": 8,
    "impact": 6,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk",
    "timeline": [
      { "date": "2023-08-15", "status": "В разработке", "description": "Initial .NET SDK development", "quality": 40 },
      { "date": "2024-01-01", "status": "Production ready", "description": "First stable release", "quality": 60 },
      { "date": "2024-09-01", "status": "Production ready", "description": "Mature SDK", "quality": 70 }
    ]
  },
  {
    "Продукт": "ADO.Net",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Microsoft ADO.NET data provider for YDB",
    "attention": 9,
    "impact": 6,
    "quality": 80,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk",
    "timeline": [
      { "date": "2024-08-16", "status": "Production ready", "description": "ADO.NET provider released", "quality": 80 }
    ]
  },
  {
    "Продукт": "EntityFramework",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Entity Framework Core provider for YDB",
    "attention": 9,
    "impact": 6,
    "quality": 80,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk",
    "timeline": [
      { "date": "2024-01-01", "status": "В разработке", "description": "EF Core provider development", "quality": 40 },
      { "date": "2024-09-01", "status": "Production ready", "description": "EF Core provider released", "quality": 80 }
    ]
  },
  {
    "id": "linq2db",
    "name": "linq2db",
    "Продукт": "linq2db",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "orm",
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "LINQ to DB data provider for YDB with type-safe queries",
    "attention": 3,
    "impact": 6,
    "quality": 80,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk",
    "documentation": [
      { "label": "Official YDB guide", "url": "https://ydb.tech/docs/en/integrations/orm/linq2db" },
      { "label": "Example", "url": "https://github.com/ydb-platform/ydb-dotnet-sdk/tree/main/examples/Linq2db.QuickStart" },
      { "label": "NuGet package", "url": "https://www.nuget.org/packages/Community.Ydb.Linq2db" }
    ],
    "releases": "https://www.nuget.org/packages/Community.Ydb.Linq2db#versions-body-tab",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "Official YDB documentation covers installation, type mapping, schema generation, relations and bulk operations.", "url": "https://ydb.tech/docs/en/integrations/orm/linq2db" },
      { "claim": "The provider is published as the pre-1.0 Community.Ydb.Linq2db package.", "url": "https://www.nuget.org/packages/Community.Ydb.Linq2db" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["LinqToDB"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The official guide states that LinqToDB does not manage migrations; Liquibase or Flyway is recommended for schema changes."],
      "evidence": ["https://ydb.tech/docs/en/integrations/orm/linq2db"]
    },
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "LINQ2DB provider development", "quality": 50 },
      { "date": "2024-12-01", "status": "Production ready", "description": "LINQ2DB provider released", "quality": 80 }
    ]
  },
  {
    "Продукт": "Hibernate 5/6 dialects",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Hibernate ORM dialect for YDB supporting JPA and HQL",
    "attention": 7,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects",
    "timeline": [
      { "date": "2024-01-15", "status": "Production ready", "description": "Hibernate YDB dialect released", "quality": 90 }
    ]
  },
  {
    "Продукт": "JOOQ dialect",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Code Generation", "Library", "AppTeam"],
    "description": "jOOQ type-safe SQL query builder dialect for YDB",
    "attention": 2,
    "impact": 7,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects",
    "timeline": [
      { "date": "2024-02-13", "status": "Production ready", "description": "jOOQ YDB dialect released", "quality": 90 }
    ]
  },
  {
    "Продукт": "liquibase",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268"],
    "Язык программирования": "Java",
    "categories": ["Migration", "Library", "AppTeam"],
    "description": "Liquibase database schema change management extension for YDB",
    "attention": 2,
    "impact": 7,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects",
    "timeline": [
      { "date": "2024-02-14", "status": "Production ready", "description": "Liquibase YDB extension released", "quality": 90 }
    ]
  },
  {
    "Продукт": "FlyWay",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268"],
    "Язык программирования": "Java",
    "categories": ["Migration", "Library", "AppTeam"],
    "description": "Flyway database migration tool extension for YDB",
    "attention": 2,
    "impact": 5,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects",
    "timeline": [
      { "date": "2024-04-10", "status": "Production ready", "description": "Flyway YDB extension released", "quality": 90 }
    ]
  },
  {
    "id": "ydb-materializer",
    "name": "ydb-materializer",
    "Продукт": "ydb materializer",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "maturity": "production",
    "maintenance": ["accepting_prs", "fixing_bugs"],
    "integrationType": "application",
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268", "mzinal"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion", "Application", "AppTeam"],
    "description": "Tool for materializing data from external sources into YDB",
    "attention": 4,
    "impact": 6,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-materializer",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/ydb-materializer" },
      { "label": "Development notes", "url": "https://github.com/ydb-platform/ydb-materializer/blob/main/DEVELOP.md" }
    ],
    "releases": "https://github.com/ydb-platform/ydb-materializer/releases",
    "compatibility": {
      "minimumYdbVersion": "24.4",
      "evidence": [
        { "claim": "The README requires YDB cluster 24.4 or newer.", "url": "https://github.com/ydb-platform/ydb-materializer" }
      ]
    },
    "evidence": [
      { "claim": "The project publishes versioned releases and documents standalone and embedded installation paths.", "url": "https://github.com/ydb-platform/ydb-materializer/releases" },
      { "claim": "The README documents validation, CDC synchronization, configuration, requirements and operational behavior.", "url": "https://github.com/ydb-platform/ydb-materializer" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["cdc", "validation"],
      "sourceSystems": ["YDB"],
      "target": "YDB",
      "mode": "cdc",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Source and destination tables, required indexes and CDC streams must be created before synchronization; the tool can only generate selected DDL fragments."],
      "evidence": ["https://github.com/ydb-platform/ydb-materializer"]
    },
    "timeline": [
      { "date": "2023-06-01", "status": "В разработке", "description": "Materializer development", "quality": 50 },
      { "date": "2024-06-01", "status": "Production ready", "description": "Stable release", "quality": 85 }
    ]
  },
  {
    "Продукт": "ydb-php-sdk",
    "Статус": ["Production ready", "Принимаем PR"],
    "Ответственный": "",
    "Кто еще может помочь": ["rekby"],
    "Язык программирования": "PHP",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native PHP SDK for YDB",
    "attention": 1,
    "impact": 1,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-php-sdk",
    "timeline": [
      { "date": "2021-04-01", "status": "Production ready", "description": "PHP SDK released", "quality": 50 }
    ]
  },
  {
    "id": "golang-migrate-ydb",
    "name": "golang-migrate YDB fork",
    "Продукт": "golang-migrate",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "schema_migration_tool",
    "Ответственный": "asmyasnikov",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library", "AppTeam"],
    "description": "golang-migrate database migration library driver for YDB",
    "attention": 3,
    "impact": 5,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/golang-migrate",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/golang-migrate" },
      { "label": "YDB driver source", "url": "https://github.com/ydb-platform/golang-migrate/tree/master/database/ydb" }
    ],
    "releases": "https://github.com/ydb-platform/golang-migrate/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The YDB organization repository is a fork and lists a YDB database driver.", "url": "https://github.com/ydb-platform/golang-migrate" },
      { "claim": "The fork has no dedicated published releases, so stable delivery of the YDB fork is not established.", "url": "https://github.com/ydb-platform/golang-migrate/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["schema_migration"],
      "sourceSystems": ["golang-migrate"],
      "target": "YDB",
      "mode": "batch",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Stable delivery and a support policy for the YDB fork are not documented."],
      "evidence": ["https://github.com/ydb-platform/golang-migrate", "https://github.com/ydb-platform/golang-migrate/releases"]
    },
    "timeline": [
      { "date": "2024-01-01", "status": "В разработке", "description": "YDB driver for golang-migrate in review", "quality": 50 }
    ]
  },
  {
    "Продукт": "Dapper",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Simple object mapper for .NET - micro ORM support for YDB",
    "attention": 2,
    "impact": 6,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk",
    "timeline": [
      { "date": "2024-09-11", "status": "Production ready", "description": "Dapper YDB support released", "quality": 90 }
    ]
  },
  {
    "Продукт": "alembic",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Migration", "Library", "AppTeam"],
    "description": "Alembic database migration tool for SQLAlchemy with YDB support",
    "attention": 4,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy",
    "timeline": [
      { "date": "2024-11-13", "status": "Production ready", "description": "Alembic YDB support released", "quality": 65 }
    ]
  },
  {
    "id": "apache-superset",
    "name": "Apache Superset",
    "Продукт": "Apache SuperSet",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "maturity": "production",
    "maintenance": [],
    "integrationType": "application_integration",
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["BI", "Analytics", "AppTeam"],
    "description": "Modern data exploration and visualization platform with YDB support",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "https://github.com/apache/superset",
    "documentation": [
      { "label": "Official YDB guide", "url": "https://ydb.tech/docs/en/integrations/visualization/superset" },
      { "label": "Apache Superset repository", "url": "https://github.com/apache/superset" }
    ],
    "releases": "https://github.com/apache/superset/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [
        { "claim": "The official guide documents native YDB connections for Apache Superset 5.0.0 and newer; it does not establish a minimum YDB server version.", "url": "https://ydb.tech/docs/en/integrations/visualization/superset" }
      ]
    },
    "evidence": [
      { "claim": "Official YDB documentation provides a supported native connection workflow through ydb-sqlalchemy.", "url": "https://ydb.tech/docs/en/integrations/visualization/superset" },
      { "claim": "YDB integration is represented in the upstream Apache Superset project.", "url": "https://github.com/apache/superset" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["developer_tool"],
      "sourceSystems": ["Apache Superset"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["This is a visualization integration, not a data or schema migration path."],
      "evidence": ["https://ydb.tech/docs/en/integrations/visualization/superset"]
    },
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "SuperSet YDB integration", "quality": 50 },
      { "date": "2025-02-05", "status": "Production ready", "description": "SuperSet YDB support released", "quality": 90 }
    ]
  },
  {
    "id": "ydb-logstash-plugins",
    "name": "ydb-logstash-plugins",
    "Продукт": "logstash",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "plugin",
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "Observability", "Library", "AppTeam"],
    "description": "Logstash output plugin for streaming data to YDB",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-logstash-plugins",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/ydb-logstash-plugins" },
      { "label": "Official YDB guide", "url": "https://ydb.tech/docs/en/integrations/ingestion/logstash" }
    ],
    "releases": "https://github.com/ydb-platform/ydb-logstash-plugins/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The repository contains storage, topic input and topic output plugins with build documentation.", "url": "https://github.com/ydb-platform/ydb-logstash-plugins" },
      { "claim": "The latest published line remains pre-1.0, so production support is not established by versioning alone.", "url": "https://github.com/ydb-platform/ydb-logstash-plugins/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["data_migration"],
      "sourceSystems": ["Logstash"],
      "target": "YDB",
      "mode": "streaming",
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": ["The repository contains several plugins; data direction and guarantees depend on the selected input, output or storage plugin."],
      "evidence": ["https://github.com/ydb-platform/ydb-logstash-plugins"]
    },
    "timeline": [
      { "date": "2024-03-26", "status": "Production ready", "description": "Logstash YDB output plugin released", "quality": 90 }
    ]
  },
  {
    "Продукт": "ydb-rust-sdk",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "rekby",
    "Кто еще может помочь": [],
    "Язык программирования": "Rust",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native Rust SDK for YDB with async runtime support",
    "attention": 8,
    "impact": 3,
    "quality": 75,
    "repository": "https://github.com/ydb-platform/ydb-rs-sdk",
    "timeline": [
      { "date": "2022-05-22", "status": "В разработке", "description": "Initial Rust SDK development", "quality": 30 },
      { "date": "2023-06-01", "status": "Production ready", "description": "First stable release", "quality": 50 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk-zap",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "Zap logging integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zap",
    "timeline": [
      { "date": "2022-06-01", "status": "Production ready", "description": "Zap integration released", "quality": 99 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk-logrus",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "Logrus logging integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-logrus",
    "timeline": [
      { "date": "2022-06-01", "status": "Production ready", "description": "Logrus integration released", "quality": 99 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk-zerolog",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "Zerolog logging integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zerolog",
    "timeline": [
      { "date": "2022-06-01", "status": "Production ready", "description": "Zerolog integration released", "quality": 99 }
    ]
  },
  {
    "id": "ydb-go-sdk-otel",
    "name": "ydb-go-sdk-otel",
    "Продукт": "ydb-go-sdk-otel",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "maturity": "production",
    "maintenance": ["accepting_prs", "fixing_bugs", "adding_features"],
    "integrationType": "observability_adapter",
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "OpenTelemetry tracing and metrics integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-otel",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/ydb-go-sdk-otel" },
      { "label": "Go package documentation", "url": "https://pkg.go.dev/github.com/ydb-platform/ydb-go-sdk-otel" }
    ],
    "releases": "https://github.com/ydb-platform/ydb-go-sdk-otel/tags",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [
        { "claim": "The adapter documents the ydb-go-sdk API it integrates with, but does not state a minimum YDB server version.", "url": "https://github.com/ydb-platform/ydb-go-sdk-otel" }
      ]
    },
    "evidence": [
      { "claim": "Tagged Go module versions are published and indexed by pkg.go.dev.", "url": "https://pkg.go.dev/github.com/ydb-platform/ydb-go-sdk-otel" },
      { "claim": "The repository documents traces, metrics, logs, quick start, examples, local development and contains focused tests.", "url": "https://github.com/ydb-platform/ydb-go-sdk-otel" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["observability"],
      "sourceSystems": ["ydb-go-sdk"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The adapter does not configure OpenTelemetry exporters; applications must configure providers and exporters separately."],
      "evidence": ["https://github.com/ydb-platform/ydb-go-sdk-otel"]
    },
    "timeline": [
      { "date": "2023-01-01", "status": "В разработке", "description": "OpenTelemetry integration development", "quality": 70 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable OTEL integration", "quality": 99 }
    ]
  },
  {
    "id": "ydb-go-sdk-opentracing",
    "name": "ydb-go-sdk-opentracing",
    "Продукт": "ydb-go-sdk-opentracing",
    "Статус": ["Deprecated"],
    "maturity": "deprecated",
    "maintenance": [],
    "integrationType": "observability_adapter",
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "OpenTracing integration for ydb-go-sdk distributed tracing",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-opentracing",
    "documentation": [
      { "label": "Archived repository", "url": "https://github.com/ydb-platform/ydb-go-sdk-opentracing" },
      { "label": "Recommended replacement", "url": "https://github.com/ydb-platform/ydb-go-sdk-otel" }
    ],
    "releases": "https://github.com/ydb-platform/ydb-go-sdk-opentracing/tags",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "replacement": {
      "id": "ydb-go-sdk-otel",
      "repository": "https://github.com/ydb-platform/ydb-go-sdk-otel"
    },
    "evidence": [
      { "claim": "The owner archived the repository on 2025-05-20; it is read-only.", "url": "https://github.com/ydb-platform/ydb-go-sdk-opentracing" },
      { "claim": "ydb-go-sdk-otel is the maintained OpenTelemetry replacement.", "url": "https://github.com/ydb-platform/ydb-go-sdk-otel" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["observability"],
      "sourceSystems": ["ydb-go-sdk"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Archived and read-only; use ydb-go-sdk-otel for new integrations."],
      "evidence": ["https://github.com/ydb-platform/ydb-go-sdk-opentracing", "https://github.com/ydb-platform/ydb-go-sdk-otel"]
    },
    "timeline": [
      { "date": "2022-06-01", "status": "Production ready", "description": "OpenTracing integration released", "quality": 99 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk-slog",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "Go 1.21+ slog logging integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-slog",
    "timeline": [
      { "date": "2023-09-01", "status": "Production ready", "description": "Slog integration released with Go 1.21", "quality": 99 }
    ]
  },
  {
    "Продукт": "Spring Data JDBC",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Standard API", "Library", "AppTeam"],
    "description": "Spring Data JDBC dialect for YDB with repository support",
    "attention": 7,
    "impact": 9,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects",
    "timeline": [
      { "date": "2024-08-27", "status": "Production ready", "description": "Spring Data JDBC YDB dialect released", "quality": 90 }
    ]
  },
  {
    "Продукт": "YOJ",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "YDB Object-relational mapping for Java - lightweight ORM framework",
    "attention": 2,
    "impact": 2,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/yoj-project",
    "timeline": [
      { "date": "2023-12-17", "status": "Production ready", "description": "YOJ project open-sourced", "quality": 70 }
    ]
  },
  {
    "Продукт": "Federated ydb-java-sdk",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["pnv1", "kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["Native SDK", "Federation", "Library", "AppTeam"],
    "description": "Federated queries support for Java SDK across multiple YDB clusters",
    "attention": 3,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-java-sdk",
    "timeline": [
      { "date": "2023-12-22", "status": "В разработке", "description": "Federation support development", "quality": 40 },
      { "date": "2024-06-01", "status": "Production ready", "description": "Federation support released", "quality": 65 }
    ]
  },
  {
    "Продукт": "userver ydb component",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "brgayazov",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "C/C++",
    "categories": ["Library", "AppTeam"],
    "description": "YDB component for userver C++ framework",
    "attention": 4,
    "impact": 6,
    "quality": 50,
    "repository": "https://github.com/userver-framework/userver",
    "timeline": [
      { "date": "2023-01-01", "status": "В разработке", "description": "userver YDB component development", "quality": 30 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable userver integration", "quality": 50 }
    ]
  },
  {
    "Продукт": "Apache NiFi",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion", "Library", "Workflow", "AppTeam"],
    "description": "Apache NiFi processor for data flow automation with YDB",
    "attention": 2,
    "impact": 4,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver",
    "timeline": [
      { "date": "2024-06-01", "status": "Production ready", "description": "NiFi YDB processor via JDBC", "quality": 50 }
    ]
  },
  {
    "Продукт": "ydbcp",
    "Статус": ["В разработке", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "qrort",
    "Кто еще может помочь": ["ulya-sidorina"],
    "Язык программирования": "Go",
    "categories": ["Admin", "Application"],
    "description": "YDB Control Plane - management and orchestration service for YDB clusters",
    "attention": 9,
    "impact": 6,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydbcp",
    "timeline": [
      { "date": "2024-01-01", "status": "В разработке", "description": "YDB Control Plane development", "quality": 50 },
      { "date": "2024-09-01", "status": "В разработке", "description": "Active development", "quality": 70 }
    ]
  },
  {
    "Продукт": "ydb-go-genproto",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Code Generation", "AppTeam"],
    "description": "Generated Go code from YDB API protobuf definitions",
    "attention": 2,
    "impact": 8,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-go-genproto",
    "timeline": [
      { "date": "2019-04-17", "status": "Production ready", "description": "Initial Go protobuf generation", "quality": 90 }
    ]
  },
  {
    "Продукт": "ydb-api-protos",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "asmyasnikov",
    "Кто еще может помочь": [],
    "Язык программирования": "Protobuf",
    "categories": ["AppTeam"],
    "description": "YDB API protocol buffer definitions for all supported languages",
    "attention": 2,
    "impact": 10,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/ydb-api-protos",
    "timeline": [
      { "date": "2018-01-01", "status": "Production ready", "description": "YDB API protobuf definitions", "quality": 80 },
      { "date": "2022-04-19", "status": "Production ready", "description": "OpenSource release", "quality": 95 }
    ]
  },
  {
    "Продукт": "ydb-ansible",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["IaaS", "Admin", "Application"],
    "description": "Ansible playbooks for YDB cluster deployment and maintenance",
    "attention": 5,
    "impact": 7,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydb-ansible",
    "timeline": [
      { "date": "2023-06-01", "status": "В разработке", "description": "Ansible playbooks development", "quality": 50 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable Ansible playbooks", "quality": 70 }
    ]
  },
  {
    "Продукт": "Apache Kafka (librdkafka)",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "C/C++",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "The Apache Kafka C/C++ client library (librdkafka) - high performance producer and consumer. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/confluentinc/librdkafka",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "kafka-python",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Pure Python client for Apache Kafka. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/dpkp/kafka-python",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "confluent-kafka-python",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Confluent's Python client for Apache Kafka (wrapper around librdkafka). Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/confluentinc/confluent-kafka-python",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "franz-go",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "High-performance, pure Go Kafka client. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/twmb/franz-go",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "sarama",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Sarama is a pure Go client library for Apache Kafka. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/IBM/sarama",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "KafkaJS",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Modern Apache Kafka client for Node.js. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/tulios/kafkajs",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Spring Kafka",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Library", "Kafka API"],
    "description": "Spring integration for Apache Kafka. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/spring-projects/spring-kafka",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Apache Kafka Java Client",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Official Apache Kafka client for Java. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/apache/kafka",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "rdkafka-dotnet (Confluent.Kafka)",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Confluent's .NET client for Apache Kafka. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/confluentinc/confluent-kafka-dotnet",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "rust-rdkafka",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Rust",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "Rust wrapper for librdkafka - Apache Kafka client. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/fede1024/rust-rdkafka",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "php-rdkafka",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "PHP",
    "categories": ["Native SDK", "Library", "Kafka API"],
    "description": "PHP extension for Apache Kafka (based on librdkafka). Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/arnaud-lb/php-rdkafka",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Kafka UI",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Admin", "Application", "Kafka API"],
    "description": "Open-source web UI for Apache Kafka management. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/provectus/kafka-ui",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Kafdrop",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Admin", "Application", "Kafka API"],
    "description": "Web UI for viewing Kafka topics and browsing consumer groups. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/obsidiandynamics/kafdrop",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "AKHQ (Kafka HQ)",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Admin", "Application", "Kafka API"],
    "description": "Kafka GUI for managing topics, consumer groups, schema registry. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/tchiotludo/akhq",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "kcat (kafkacat)",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "C/C++",
    "categories": ["Console", "Application", "Kafka API"],
    "description": "Generic command line non-JVM Apache Kafka producer and consumer. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/edenhill/kcat",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Debezium",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "ETL", "Application", "Kafka API"],
    "description": "Change Data Capture platform for streaming database changes via Kafka. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://github.com/debezium/debezium",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "Продукт": "Kafka Connect",
    "Статус": ["Production ready"],
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "ETL", "Library", "Kafka API"],
    "description": "Tool for streaming data between Apache Kafka and other systems. Works with YDB via Kafka API compatibility.",
    "attention": 1,
    "impact": 10,
    "quality": 100,
    "repository": "https://kafka.apache.org/documentation/#connect",
    "timeline": [
      { "date": "2024-07-31", "status": "Production ready", "description": "YDB Kafka API compatibility (YDB 24.1)", "quality": 100 }
    ]
  },
  {
    "id": "ydb-kafka-sink-connector",
    "name": "ydb-kafka-sink-connector",
    "Продукт": "ydb-kafka-sink-connector",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "connector",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "ETL", "Application"],
    "description": "Kafka Connect sink that writes Kafka records to YDB tables.",
    "repository": "https://github.com/ydb-platform/ydb-kafka-sink-connector",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-kafka-sink-connector" }],
    "releases": "https://github.com/ydb-platform/ydb-kafka-sink-connector/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README provides only a local standalone Kafka Connect demonstration and links to a student-project specification.", "url": "https://github.com/ydb-platform/ydb-kafka-sink-connector" },
      { "claim": "No versioned releases are published.", "url": "https://github.com/ydb-platform/ydb-kafka-sink-connector/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["data_migration"],
      "sourceSystems": ["Apache Kafka"],
      "target": "YDB",
      "mode": "streaming",
      "supportsSchemaConversion": null,
      "checkpointResume": null,
      "limitations": ["The public documentation demonstrates key/value writes to a table named after the topic but does not document release packaging, compatibility or operational guarantees."],
      "evidence": ["https://github.com/ydb-platform/ydb-kafka-sink-connector"]
    }
  },
  {
    "id": "mysql-ydb-importer",
    "name": "mysql-ydb-importer",
    "Продукт": "mysql-ydb-importer",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "migration_application",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "ETL", "Data Ingestion", "Application"],
    "description": "Batch utility for migrating MySQL schemas and data to YDB.",
    "repository": "https://github.com/ydb-platform/mysql-ydb-importer",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/mysql-ydb-importer" }],
    "releases": "https://github.com/ydb-platform/mysql-ydb-importer/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README documents schema creation, chunked batch reads, idempotent BulkUpsert writes and tests.", "url": "https://github.com/ydb-platform/mysql-ydb-importer" },
      { "claim": "No versioned release or packaged distribution is published.", "url": "https://github.com/ydb-platform/mysql-ydb-importer/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["schema_migration", "data_migration"],
      "sourceSystems": ["MySQL"],
      "target": "YDB",
      "mode": "batch",
      "supportsSchemaConversion": true,
      "checkpointResume": null,
      "limitations": ["Tables without a suitable key use OFFSET pagination, which the README warns may degrade for large offsets; no durable checkpoint mechanism is documented."],
      "evidence": ["https://github.com/ydb-platform/mysql-ydb-importer"]
    }
  },
  {
    "id": "aardappel",
    "name": "aardappel",
    "Продукт": "aardappel",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "cdc_application",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "ETL", "Data Ingestion", "Application"],
    "description": "Asynchronous YDB-to-YDB CDC replication service with transactional checkpoints.",
    "repository": "https://github.com/ydb-platform/aardappel",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/aardappel" }],
    "releases": "https://github.com/ydb-platform/aardappel/tags",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The repository documents architecture, recovery, monitoring, tests, failure handling and operational limitations.", "url": "https://github.com/ydb-platform/aardappel" },
      { "claim": "Versioned tags are published, but no explicit support policy or minimum YDB version is documented.", "url": "https://github.com/ydb-platform/aardappel/tags" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["cdc", "data_migration"],
      "sourceSystems": ["YDB"],
      "target": "YDB",
      "mode": "cdc",
      "supportsSchemaConversion": false,
      "checkpointResume": true,
      "limitations": ["Destination tables must be created in advance with compatible keys and columns; schemas are read only at startup, so the process must restart after destination schema changes."],
      "evidence": ["https://github.com/ydb-platform/aardappel"]
    }
  },
  {
    "id": "fq-connector-go",
    "name": "fq-connector-go",
    "Продукт": "fq-connector-go",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "connector",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Federation", "Data Ingestion", "Application"],
    "description": "External data source connector for YDB Federated Query.",
    "repository": "https://github.com/ydb-platform/fq-connector-go",
    "documentation": [
      { "label": "README", "url": "https://github.com/ydb-platform/fq-connector-go" },
      { "label": "Official deployment guide", "url": "https://ydb.tech/docs/en/devops/deployment-options/manual/federated-queries/connector-deployment" }
    ],
    "releases": "https://github.com/ydb-platform/fq-connector-go/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "Official YDB deployment documentation explicitly labels connector functionality experimental.", "url": "https://ydb.tech/docs/en/devops/deployment-options/manual/federated-queries/connector-deployment" },
      { "claim": "The project publishes binary and container release artifacts and documents supported external sources.", "url": "https://github.com/ydb-platform/fq-connector-go" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["ClickHouse", "PostgreSQL", "Greenplum", "YDB", "Microsoft SQL Server", "MySQL", "MariaDB", "Oracle", "MongoDB", "Redis", "OpenSearch", "Yandex Cloud Logging", "Prometheus"],
      "target": "YDB",
      "mode": "federated_query",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Official YDB documentation marks the connector functionality experimental; it provides federated access and is not by itself a complete migration workflow."],
      "evidence": ["https://github.com/ydb-platform/fq-connector-go", "https://ydb.tech/docs/en/devops/deployment-options/manual/federated-queries/connector-deployment"]
    }
  },
  {
    "id": "ydb-cdc-processor",
    "name": "ydb-cdc-processor",
    "Продукт": "ydb-cdc-processor",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "example",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Examples", "Migration", "Data Ingestion", "Application"],
    "description": "Example application that consumes a YDB changefeed and updates dependent YDB tables.",
    "repository": "https://github.com/ydb-platform/ydb-cdc-processor",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-cdc-processor" }],
    "releases": "https://github.com/ydb-platform/ydb-cdc-processor/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The repository describes itself as a Change Data Capture application example and documents a narrow sample configuration.", "url": "https://github.com/ydb-platform/ydb-cdc-processor" },
      { "claim": "A 0.9.x release exists, but the README build still uses a SNAPSHOT artifact and does not document a support policy.", "url": "https://github.com/ydb-platform/ydb-cdc-processor/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["cdc", "data_migration"],
      "sourceSystems": ["YDB"],
      "target": "YDB",
      "mode": "cdc",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The project is documented as an example rather than a supported general-purpose replication product; checkpoint and recovery guarantees are not documented."],
      "evidence": ["https://github.com/ydb-platform/ydb-cdc-processor"]
    }
  },
  {
    "id": "ydb-dbeaver-plugin",
    "name": "ydb-dbeaver-plugin",
    "Продукт": "ydb-dbeaver-plugin",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": ["accepting_prs"],
    "integrationType": "plugin",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Developer Tool", "Admin", "Application"],
    "description": "DBeaver extension with native YDB navigation, YQL and administration support.",
    "repository": "https://github.com/ydb-platform/ydb-dbeaver-plugin",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-dbeaver-plugin" }],
    "releases": "https://github.com/ydb-platform/ydb-dbeaver-plugin/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [{ "claim": "The README requires DBeaver CE 24.x or later and Java 21+, but does not state a minimum YDB server version.", "url": "https://github.com/ydb-platform/ydb-dbeaver-plugin" }]
    },
    "evidence": [
      { "claim": "The README documents installation, upgrades, authentication, features and test execution.", "url": "https://github.com/ydb-platform/ydb-dbeaver-plugin" },
      { "claim": "Installable 0.1.x releases are published with offline and update-site artifacts.", "url": "https://github.com/ydb-platform/ydb-dbeaver-plugin/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["developer_tool"],
      "sourceSystems": ["DBeaver"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["This is a database administration plugin, not a data or schema migration path."],
      "evidence": ["https://github.com/ydb-platform/ydb-dbeaver-plugin"]
    }
  },
  {
    "id": "db-scheduler-ydb",
    "name": "db-scheduler-ydb",
    "Продукт": "db-scheduler-ydb",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "library",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Workflow", "Library"],
    "description": "YDB task repository and builder integration for db-scheduler.",
    "repository": "https://github.com/ydb-platform/db-scheduler-ydb",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/db-scheduler-ydb" }],
    "releases": "https://github.com/ydb-platform/db-scheduler-ydb/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README documents dependency coordinates, schema setup and usage.", "url": "https://github.com/ydb-platform/db-scheduler-ydb" },
      { "claim": "A versioned 9.4.1 release exists, but compatibility and support policy are not documented.", "url": "https://github.com/ydb-platform/db-scheduler-ydb/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["db-scheduler"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The integration does not migrate existing scheduler state or schemas automatically."],
      "evidence": ["https://github.com/ydb-platform/db-scheduler-ydb"]
    }
  },
  {
    "id": "ydb-jmeter",
    "name": "ydb-jmeter",
    "Продукт": "ydb-jmeter",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "plugin",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Developer Tool", "Validation", "Application"],
    "description": "Apache JMeter plugin for load testing YDB workloads.",
    "repository": "https://github.com/ydb-platform/ydb-jmeter",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-jmeter" }],
    "releases": "https://github.com/ydb-platform/ydb-jmeter/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [{ "claim": "Release 1.2 bundles YDB Java SDK 2.4.0, but the project does not state a minimum compatible YDB server version.", "url": "https://github.com/ydb-platform/ydb-jmeter/releases" }]
    },
    "evidence": [
      { "claim": "The README documents installation and test-plan configuration for YDB load testing.", "url": "https://github.com/ydb-platform/ydb-jmeter" },
      { "claim": "Versioned plugin archives are published, but no compatibility or support policy is documented.", "url": "https://github.com/ydb-platform/ydb-jmeter/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["validation", "developer_tool"],
      "sourceSystems": ["Apache JMeter"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["This is a load-testing plugin, not a data or schema migration path."],
      "evidence": ["https://github.com/ydb-platform/ydb-jmeter"]
    }
  },
  {
    "id": "ydb-js-examples",
    "name": "ydb-js-examples",
    "Продукт": "ydb-js-examples",
    "Статус": ["Reference"],
    "maturity": "unknown",
    "maturityApplies": false,
    "maintenance": [],
    "integrationType": "examples",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Examples", "Developer Tool"],
    "description": "Runnable JavaScript and TypeScript examples for using YDB from common runtimes and frameworks.",
    "repository": "https://github.com/ydb-platform/ydb-js-examples",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-js-examples" }],
    "releases": "https://github.com/ydb-platform/ydb-js-examples/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The repository is explicitly a collection of examples for Node.js, Next.js, NestJS and other JavaScript environments.", "url": "https://github.com/ydb-platform/ydb-js-examples" },
      { "claim": "No versioned releases are published; maturity is not applied because this is reference material rather than a distributable integration.", "url": "https://github.com/ydb-platform/ydb-js-examples/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["developer_tool", "application_compatibility"],
      "sourceSystems": ["JavaScript and TypeScript frameworks"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["The repository contains examples only and does not provide a migration product or compatibility guarantee."],
      "evidence": ["https://github.com/ydb-platform/ydb-js-examples"]
    }
  },
  {
    "id": "ydb-parallel-processor",
    "name": "ydb-parallel-processor",
    "Продукт": "ydb-parallel-processor",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "batch_processor",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Migration", "ETL", "Application", "Library"],
    "description": "Parallel Java processor for reading, transforming and writing large YDB table ranges.",
    "repository": "https://github.com/ydb-platform/ydb-parallel-processor",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-parallel-processor" }],
    "releases": "https://github.com/ydb-platform/ydb-parallel-processor/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README documents range partitioning, configuration, retries, metrics, testing and operational limitations.", "url": "https://github.com/ydb-platform/ydb-parallel-processor" },
      { "claim": "A versioned 1.3 release exists, while the README warns that artifacts are not available from Maven Central.", "url": "https://github.com/ydb-platform/ydb-parallel-processor/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["data_migration"],
      "sourceSystems": ["YDB"],
      "target": "YDB",
      "mode": "batch",
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Output order is not guaranteed; consumers must provide processing logic, and the documented artifact must currently be built or sourced outside Maven Central."],
      "evidence": ["https://github.com/ydb-platform/ydb-parallel-processor"]
    }
  },
  {
    "id": "ydb-r2dbc-driver",
    "name": "ydb-r2dbc-driver",
    "Продукт": "ydb-r2dbc-driver",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "driver",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Standard API", "Library"],
    "description": "Experimental Reactive Relational Database Connectivity driver for YDB.",
    "repository": "https://github.com/ydb-platform/ydb-r2dbc-driver",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-r2dbc-driver" }],
    "releases": "https://github.com/ydb-platform/ydb-r2dbc-driver/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The public README contains only basic build instructions and does not document installation, supported features, compatibility or limitations.", "url": "https://github.com/ydb-platform/ydb-r2dbc-driver" },
      { "claim": "No versioned releases are published.", "url": "https://github.com/ydb-platform/ydb-r2dbc-driver/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["R2DBC applications"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["Supported R2DBC operations, compatibility boundaries and production guarantees are not documented."],
      "evidence": ["https://github.com/ydb-platform/ydb-r2dbc-driver"]
    }
  },
  {
    "id": "ydb-vscode-plugin",
    "name": "ydb-vscode-plugin",
    "Продукт": "ydb-vscode-plugin",
    "Статус": ["В разработке"],
    "maturity": "preview",
    "maintenance": [],
    "integrationType": "plugin",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Developer Tool", "Admin", "Application"],
    "description": "Visual Studio Code extension for exploring YDB databases and running YQL queries.",
    "repository": "https://github.com/ydb-platform/ydb-vscode-plugin",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-vscode-plugin" }],
    "releases": "https://github.com/ydb-platform/ydb-vscode-plugin/releases",
    "compatibility": { "minimumYdbVersion": null, "evidence": [] },
    "evidence": [
      { "claim": "The README documents installation, connection setup, query execution, schema browsing and tests.", "url": "https://github.com/ydb-platform/ydb-vscode-plugin" },
      { "claim": "Installable 0.1.x releases are published, but no YDB compatibility or support policy is stated.", "url": "https://github.com/ydb-platform/ydb-vscode-plugin/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["developer_tool"],
      "sourceSystems": ["Visual Studio Code"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["This is a database development extension, not a data or schema migration path."],
      "evidence": ["https://github.com/ydb-platform/ydb-vscode-plugin"]
    }
  },
  {
    "id": "ydb-janusgraph-storage-backend",
    "name": "ydb-janusgraph-storage-backend",
    "Продукт": "ydb-janusgraph-storage-backend",
    "Статус": ["В разработке"],
    "maturity": "experimental",
    "maintenance": [],
    "integrationType": "storage_backend",
    "Ответственный": "",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["Application", "Library"],
    "description": "Experimental JanusGraph storage backend implemented on YDB.",
    "repository": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend",
    "documentation": [{ "label": "README", "url": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend" }],
    "releases": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend/releases",
    "compatibility": {
      "minimumYdbVersion": null,
      "evidence": [{ "claim": "The README records tests against a local YDB 26.x build, JanusGraph 1.1.0 and YDB Java SDK 2.4.7; this does not establish a minimum server version.", "url": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend" }]
    },
    "evidence": [
      { "claim": "The README documents configuration, test setup, component versions and feature limitations.", "url": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend" },
      { "claim": "No versioned releases are published and significant JanusGraph semantics remain unsupported.", "url": "https://github.com/ydb-platform/ydb-janusgraph-storage-backend/releases" }
    ],
    "evidenceReviewedAt": "2026-08-22",
    "migration": {
      "roles": ["application_compatibility"],
      "sourceSystems": ["JanusGraph"],
      "target": "YDB",
      "mode": null,
      "supportsSchemaConversion": false,
      "checkpointResume": null,
      "limitations": ["TTL is not supported; read-only locking modes do not enforce uniqueness; transaction size is constrained by YDB limits."],
      "evidence": ["https://github.com/ydb-platform/ydb-janusgraph-storage-backend"]
    }
  }
];

// Solid colors for programming languages (no gradients)
export const languageColors = {
  "Go": { bg: "#00ADD8", text: "#003e6b" },
  "Python": { bg: "#398800", text: "#110f00" },
  "Java": { bg: "#ffa77c", text: "#920000" },
  "C/C++": { bg: "#90ffe1", text: "#001e72" },
  "C#": { bg: "#9b7eff", text: "#5c00b4" },
  "Js/Ts": { bg: "#ffef55", text: "#000000" },
  "Rust": { bg: "#f37c6c", text: "#440000" },
  "PHP": { bg: "#fb91ff", text: "#8e00c0" },  
  "Docker": { bg: "#e989ff", text: "#003e6b" },
  "Protobuf": { bg: "#b0b0b0", text: "#373737" }
};

// Category colors
export const categoryColors = {
  "Native SDK": "#10B981",
  "Standard API": "#6366F1",
  "ORM": "#EC4899",
  "Migration": "#F59E0B",
  "ETL": "#8B5CF6",
  "ELT": "#A855F7",
  "BI": "#14B8A6",
  "Analytics": "#06B6D4",
  "Vector Store": "#84CC16",
  "AI/ML": "#22C55E",
  "Data Ingestion": "#EF4444",
  "Observability": "#F97316",
  "Console": "#64748B",
  "Admin": "#475569",
  "IaaS": "#0EA5E9",
  "Application": "#3B82F6",
  "Serverless": "#7C3AED",
  "Library": "#78716C",
  "Federation": "#D946EF",
  "PostgreSQL": "#3B82F6",
  "Code Generation": "#FACC15",
  "Workflow": "#FB923C",
  "Examples": "#0D9488",
  "Developer Tool": "#2563EB",
  "Validation": "#DC2626",
  "AppTeam": "#E11D48",
  "Kafka API": "#231F20"
};

// AppTeam members - explicit list of people belonging to AppTeam group
export const appTeamMembers = [
  "asmyasnikov",
  "alexandr268",
  "brgayazov",
  "prkkofev",
  "spotivan",
  "kurdyukov-kir",
  "zkpo",
  "pnv1",
  "ovcharuk",
  "rekby",
  "polrk",
];

// Check if person is AppTeam member
export const isAppTeamMember = (person) => {
  return appTeamMembers.includes(person);
};

export const maturityValues = ["experimental", "preview", "production", "deprecated", "unknown"];
export const maintenanceValues = ["adding_features", "accepting_prs", "fixing_bugs", "security_fixes_only", "unmaintained"];

// Backward-compatible mapping for records and historical timeline events that
// still expose only the legacy Russian `Статус` field.
export const getMaturityFromLegacyStatus = (status) => {
  const statusArray = (Array.isArray(status) ? status : [status]).filter(Boolean);
  if (statusArray.some(s => String(s).includes("Deprecated"))) return "deprecated";
  if (statusArray.some(s => String(s).includes("Production ready"))) return "production";
  if (statusArray.some(s => String(s).includes("Evidence required"))) return "unknown";
  return "experimental";
};

export const getFrameworkMaturity = (frameworkOrStatus) => {
  if (frameworkOrStatus && !Array.isArray(frameworkOrStatus) && typeof frameworkOrStatus === "object") {
    return frameworkOrStatus.maturity || getMaturityFromLegacyStatus(frameworkOrStatus["Статус"]);
  }
  return getMaturityFromLegacyStatus(frameworkOrStatus);
};

// The two visual buckets are retained for URL and CSS compatibility. The
// production bucket is now based on maturity; every other value is non-prod.
export const getStatusCategory = (frameworkOrStatus) => {
  return getFrameworkMaturity(frameworkOrStatus) === "production" ? "production" : "development";
};

// Get unique owners (including helpers)
export const getOwners = () => {
  const owners = new Set();
  frameworks.forEach(f => {
    if (f["Ответственный"]) {
      owners.add(f["Ответственный"]);
    }
    const helpers = f["Кто еще может помочь"] || [];
    helpers.forEach(h => owners.add(h));
  });
  return Array.from(owners).sort();
};

// Get unique languages
export const getLanguages = () => {
  const langs = new Set();
  frameworks.forEach(f => {
    if (f["Язык программирования"]) {
      langs.add(f["Язык программирования"]);
    }
  });
  return Array.from(langs).sort();
};

// Check if framework is a student project
export const isStudentProject = (framework) => {
  const categories = framework.categories || [];
  return categories.includes("Студенческий проект");
};

// Get all frameworks
export const getFilteredFrameworks = () => {
  return frameworks;
};

// Get unique categories from filtered frameworks
export const getCategories = () => {
  const filteredFrameworks = getFilteredFrameworks();
  const cats = new Set();
  filteredFrameworks.forEach(f => {
    const categories = f.categories || [];
    categories.forEach(c => cats.add(c));
  });
  return Array.from(cats).sort();
};

// Check if person is involved with framework
export const isPersonInvolved = (framework, person) => {
  if (!person) return true;
  if (framework["Ответственный"] === person) return true;
  const helpers = framework["Кто еще может помочь"] || [];
  return helpers.includes(person);
};

// Check if framework has category
export const hasCategory = (framework, category) => {
  if (!category) return true;
  const categories = framework.categories || [];
  return categories.includes(category);
};
