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
    "Продукт": "django-ydb-backend",
    "Статус": ["В разработке"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Library", "Студенческий проект", "AppTeam"],
    "description": "Django YDB Backend Overview This is a Django database backend for YDB, a distributed SQL database system. The backend allows Django applications to use YDB as their primary database while maintaining compatibility with Django's ORM layer.",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/django-ydb-backend",
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "Initial development started", "quality": 10 },
      { "date": "2024-12-01", "status": "В разработке", "description": "Student project development", "quality": 25 }
    ]
  },
  {
    "Продукт": "SQLGlot",
    "Статус": ["В разработке"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Migration", "Application", "Code Generation", "Студенческий проект", "AppTeam"],
    "description": "SQLGlot is a no-dependency SQL parser, transpiler, optimizer, and engine. It can be used to format SQL or translate between 31 different dialects.",
    "attention": 2,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/sqlglot/tree/ydb_dialect",
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
    "Продукт": "SQLC",
    "Статус": ["В разработке"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov", "nepunep"],
    "Язык программирования": "Go",
    "categories": ["Code Generation", "Library", "AppTeam"],
    "description": "Generate type-safe Go code from SQL queries",
    "attention": 5,
    "impact": 2,
    "quality": 40,
    "repository": "",
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
    "Продукт": "serverless ydb proxy",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "prkkofev",
    "Кто еще может помочь": ["asmyasnikov", "rekby", "zkpo"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless", "AppTeam"],
    "description": "Serverless proxy for YDB access in Yandex Cloud Functions",
    "attention": 6,
    "impact": 5,
    "quality": 95,
    "repository": "",
    "timeline": [
      { "date": "2020-06-01", "status": "В разработке", "description": "Initial development", "quality": 50 },
      { "date": "2021-01-01", "status": "Production ready", "description": "Production deployment", "quality": 80 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable service", "quality": 95 }
    ]
  },
  {
    "Продукт": "serverless docapi proxy",
    "Статус": ["Production ready", "Фиксим баги", "Заносим свежие фичи"],
    "Ответственный": "prkkofev",
    "Кто еще может помочь": ["asmyasnikov", "rekby", "zkpo"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless", "AppTeam"],
    "description": "DynamoDB-compatible Document API proxy for YDB serverless",
    "attention": 8,
    "impact": 5,
    "quality": 85,
    "repository": "",
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
    "Продукт": "ODBC",
    "Статус": ["В разработке"],
    "Ответственный": "brgayazov",
    "Кто еще может помочь": [],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "Library", "AppTeam"],
    "description": "Open Database Connectivity driver for YDB",
    "attention": 4,
    "impact": 7,
    "quality": 25,
    "repository": "",
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
    "Продукт": "logbroker cli",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "",
    "Кто еще может помочь": ["ovcharuk"],
    "Язык программирования": "Python",
    "categories": ["Console", "Data Ingestion", "Application", "AppTeam"],
    "description": "CLI tool for working with Logbroker/YDB Topics",
    "attention": 3,
    "impact": 4,
    "quality": 25,
    "repository": "",
    "timeline": [
      { "date": "2023-01-01", "status": "Production ready", "description": "CLI tool for topics management", "quality": 25 }
    ]
  },
  {
    "Продукт": "langchain-ydb",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Vector Store", "AI/ML", "Library", "AppTeam"],
    "description": "LangChain integration with YDB as vector store for AI/ML applications",
    "attention": 2,
    "impact": 7,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-langchain",
    "timeline": [
      { "date": "2024-08-01", "status": "В разработке", "description": "LangChain integration development", "quality": 50 },
      { "date": "2024-12-01", "status": "Production ready", "description": "Vector store support released", "quality": 85 }
    ]
  },
  {
    "Продукт": "apache airflow",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ETL", "Workflow", "Library", "AppTeam"],
    "description": "Apache Airflow provider for YDB with operators and hooks",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-airflow-provider",
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
        "date": "2017-02-15",
        "description": "YQL dialect support in SQLAlchemy",
        "status": "Production ready",
        "authors": ["blinkov"],
        "quality": 25,
        "attention": 3,
      },
      {
        "date": "2023-09-01",
        "description": "Initial YDB support in SQLAlchemy",
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
    "Продукт": "django orm",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "Django database backend for YDB",
    "attention": 1,
    "impact": 2,
    "quality": 60,
    "repository": "https://github.com/ydb-platform/ydb-django",
    "timeline": [
      { "date": "2024-01-01", "status": "В разработке", "description": "Django backend development", "quality": 30 },
      { "date": "2024-09-01", "status": "Production ready", "description": "Basic Django support", "quality": 60 }
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
    "Продукт": "ydb-js-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "polrk",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Native SDK", "Library", "AppTeam"],
    "description": "Native JavaScript/TypeScript SDK for YDB with Node.js support",
    "attention": 4,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-nodejs-sdk",
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
    "Продукт": "YDB FDW extention for PostgreSQL",
    "Статус": ["В разработке"],
    "Ответственный": "rekby",
    "Кто еще может помочь": ["spotivan", "brgayazov"],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "PostgreSQL", "Library", "AppTeam"],
    "description": "PostgreSQL Foreign Data Wrapper for querying YDB tables from PostgreSQL",
    "attention": 10,
    "impact": 10,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ydb-postgres-fdw",
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
    "Продукт": "linq2db",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library", "AppTeam"],
    "description": "LINQ to DB data provider for YDB with type-safe queries",
    "attention": 3,
    "impact": 6,
    "quality": 80,
    "repository": "",
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
    "Продукт": "ydb materializer",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "kurdyukov-kir",
    "Кто еще может помочь": ["alexandr268", "mzinal"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion", "Application", "AppTeam"],
    "description": "Tool for materializing data from external sources into YDB",
    "attention": 4,
    "impact": 6,
    "quality": 85,
    "repository": "",
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
    "Продукт": "golang-migrate",
    "Статус": ["В разработке"],
    "Ответственный": "asmyasnikov",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library", "AppTeam"],
    "description": "golang-migrate database migration library driver for YDB",
    "attention": 3,
    "impact": 5,
    "quality": 50,
    "repository": "",
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
    "Продукт": "Apache SuperSet",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "ovcharuk",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["BI", "Analytics", "AppTeam"],
    "description": "Modern data exploration and visualization platform with YDB support",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "",
    "timeline": [
      { "date": "2024-06-01", "status": "В разработке", "description": "SuperSet YDB integration", "quality": 50 },
      { "date": "2025-02-05", "status": "Production ready", "description": "SuperSet YDB support released", "quality": 90 }
    ]
  },
  {
    "Продукт": "logstash",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "alexandr268",
    "Кто еще может помочь": ["kurdyukov-kir"],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "Observability", "Library", "AppTeam"],
    "description": "Logstash output plugin for streaming data to YDB",
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "",
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
    "attention": 2,
    "impact": 2,
    "quality": 50,
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
    "Продукт": "ydb-go-sdk-otel",
    "Статус": ["В разработке", "Фиксим баги", "Production ready", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "OpenTelemetry tracing and metrics integration for ydb-go-sdk",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-otel",
    "timeline": [
      { "date": "2023-01-01", "status": "В разработке", "description": "OpenTelemetry integration development", "quality": 70 },
      { "date": "2024-01-01", "status": "Production ready", "description": "Stable OTEL integration", "quality": 99 }
    ]
  },
  {
    "Продукт": "ydb-go-sdk-opentracing",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "zkpo",
    "Кто еще может помочь": ["asmyasnikov"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability", "AppTeam"],
    "description": "OpenTracing integration for ydb-go-sdk distributed tracing",
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-opentracing",
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

// Status categories
export const getStatusCategory = (status) => {
  const statusArray = Array.isArray(status) ? status : [status];
  if (statusArray.some(s => s.includes("Production ready"))) return "production";
  return "development";
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
