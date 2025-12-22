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
    "repository": "https://github.com/ydb-platform/ydb-mcp"
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
    "repository": "https://github.com/ydb-platform/django-ydb-backend"
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
    "repository": "https://github.com/ydb-platform/sqlglot/tree/ydb_dialect"
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
    "repository": "https://github.com/ydb-platform/ariga-atlas/tree/ydb-develop"
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
    "repository": "https://github.com/ydb-platform/ent/tree/ydb-develop"
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
    "repository": "https://github.com/ydb-platform/hashicorp-vault/tree/ydb-backend"
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
    "repository": "https://hub.docker.com/r/ydbplatform/local-ydb"
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
    "repository": "https://github.com/ydb-platform/ydb-slo-action"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
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
    "repository": "https://github.com/ydb-platform/terraform-provider-ydb"
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
    "repository": "https://github.com/ydb-platform/gorm-driver"
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
    "repository": "https://github.com/ydb-platform/xorm"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-grafana-datasource-plugin"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/fluent-bit-ydb"
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
    "repository": "https://github.com/ydb-platform/jaeger-ydb-store"
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
    "repository": ""
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-cpp-sdk"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-python-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-python-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-langchain"
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
    "repository": "https://github.com/ydb-platform/ydb-airflow-provider"
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
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy"
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
    "repository": "https://github.com/ydb-platform/dbt-ydb"
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
    "repository": "https://github.com/ydb-platform/ydb-python-dbapi"
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
    "repository": "https://github.com/ydb-platform/ydb-django"
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
    "repository": "https://github.com/ydb-platform/ydb-java-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver"
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
    "repository": "https://github.com/ydb-platform/ydb-importer"
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
    "repository": "https://github.com/ydb-platform/ydb-spark-connector"
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
    "repository": "https://github.com/ydb-platform/ydb-nodejs-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb"
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
    "repository": "https://github.com/ydb-platform/ydb-postgres-fdw"
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
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
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
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
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
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
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
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-php-sdk"
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
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
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy"
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
    "repository": ""
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
    "repository": ""
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
    "repository": "https://github.com/ydb-platform/ydb-rs-sdk"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zap"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-logrus"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zerolog"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-otel"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-opentracing"
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
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-slog"
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
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
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
    "repository": "https://github.com/ydb-platform/yoj-project"
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
    "repository": "https://github.com/ydb-platform/ydb-java-sdk"
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
    "repository": "https://github.com/userver-framework/userver"
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
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver"
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
    "repository": "https://github.com/ydb-platform/ydbcp"
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
    "repository": "https://github.com/ydb-platform/ydb-go-genproto"
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
    "repository": "https://github.com/ydb-platform/ydb-api-protos"
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
    "repository": "https://github.com/ydb-platform/ydb-ansible"
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
  "AppTeam": "#E11D48"
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

// Check if students query parameter is present
export const showStudentProjects = () => {
  return new URLSearchParams(window.location.search).has('students');
};

// Get filtered frameworks (excluding student projects unless ?students is in URL)
export const getFilteredFrameworks = () => {
  if (showStudentProjects()) {
    return frameworks;
  }
  return frameworks.filter(f => !isStudentProject(f));
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
