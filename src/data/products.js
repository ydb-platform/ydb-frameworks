export const products = [
  {
    "Продукт": "docker image local-ydb",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "Я Владислав Поляков (polrk)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Python",
    "categories": ["CI/CD"],
    "attention": 4,
    "impact": 10,
    "quality": 85,
    "repository": "https://hub.docker.com/r/ydbplatform/local-ydb"
  },
  {
    "Продукт": "SLO",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "Я Владислав Поляков (polrk)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Js/Ts",
    "categories": ["CI/CD"],
    "attention": 4,
    "impact": 10,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-slo-action"
  },
  {
    "Продукт": "ydb-go-sdk",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)", "Тимофей Кулин (rekby)"],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Library"],
    "attention": 8,
    "impact": 10,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
  },
  {
    "Продукт": "database/sql",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Standard API", "Library"],
    "attention": 8,
    "impact": 6,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
  },
  {
    "Продукт": "ydb terraform provider",
    "Статус": ["Принимаем PR", "Фиксим баги", "Заносим свежие фичи", "Production ready"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["IaaS"],
    "attention": 3,
    "impact": 4,
    "quality": 75,
    "repository": "https://github.com/ydb-platform/terraform-provider-ydb"
  },
  {
    "Продукт": "GORM",
    "Статус": ["В разработке", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["ORM", "Library"],
    "attention": 3,
    "impact": 2,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/gorm-driver"
  },
  {
    "Продукт": "XORM",
    "Статус": ["В разработке", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["ORM", "Library"],
    "attention": 4,
    "impact": 1,
    "quality": 10,
    "repository": "https://github.com/ydb-platform/xorm"
  },
  {
    "Продукт": "goose",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Алексей Мясников (asmyasnikov)",
    "Кто еще может помочь": ["Константин Прокопенко (zkpo)"],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library"],
    "attention": 2,
    "impact": 6,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
  },
  {
    "Продукт": "Grafana over YDB",
    "Статус": ["В разработке"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["BI", "Observability", "Library"],
    "attention": 6,
    "impact": 3,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-grafana-datasource-plugin"
  },
  {
    "Продукт": "SQLC",
    "Статус": ["В разработке"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Code Generation", "Library"],
    "attention": 5,
    "impact": 2,
    "quality": 40,
    "repository": ""
  },
  {
    "Продукт": "fluentbit",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Алексей Мясников (asmyasnikov)",
    "Кто еще может помочь": ["Константин Прокопенко (zkpo)"],
    "Язык программирования": "Go",
    "categories": ["Data Ingestion", "Observability", "Library"],
    "attention": 1,
    "impact": 4,
    "quality": 95,
    "repository": "https://github.com/ydb-platform/fluent-bit-ydb"
  },
  {
    "Продукт": "jaeger ydb store",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)", "Константин Прокопенко (zkpo)"],
    "Язык программирования": "Go",
    "categories": ["Observability", "Data Ingestion", "Library"],
    "attention": 2,
    "impact": 5,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/jaeger-ydb-store"
  },
  {
    "Продукт": "serverless ydb proxy",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "Евгений Прокофьев (prkkofev)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)", "Тимофей Кулин (rekby)"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless"],
    "attention": 6,
    "impact": 5,
    "quality": 95,
    "repository": ""
  },
  {
    "Продукт": "serverless docapi proxy",
    "Статус": ["Production ready", "Фиксим баги", "Заносим свежие фичи"],
    "Ответственный": "Евгений Прокофьев (prkkofev)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)", "Тимофей Кулин (rekby)"],
    "Язык программирования": "Go",
    "categories": ["Application", "Serverless"],
    "attention": 8,
    "impact": 5,
    "quality": 85,
    "repository": ""
  },
  {
    "Продукт": "ydb-cpp-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Булат Гаязов (brgayazov)",
    "Кто еще может помочь": ["Николай Перфилов (pnv1)"],
    "Язык программирования": "C/C++",
    "categories": ["Native SDK", "Library"],
    "attention": 9,
    "impact": 10,
    "quality": 75,
    "repository": "https://github.com/ydb-platform/ydb-cpp-sdk"
  },
  {
    "Продукт": "ODBC",
    "Статус": ["В разработке"],
    "Ответственный": "Булат Гаязов (brgayazov)",
    "Кто еще может помочь": [],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "Library"],
    "attention": 4,
    "impact": 7,
    "quality": 25,
    "repository": ""
  },
  {
    "Продукт": "ydb-python-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": ["Тимофей Кулин (rekby)"],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Library"],
    "attention": 8,
    "impact": 10,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-python-sdk"
  },
  {
    "Продукт": "federated ydb-python-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": ["Тимофей Кулин (rekby)"],
    "Язык программирования": "Python",
    "categories": ["Native SDK", "Federation", "Library"],
    "attention": 3,
    "impact": 4,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-python-sdk"
  },
  {
    "Продукт": "federated ydb-go-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Тимофей Кулин (rekby)"],
    "Язык программирования": "Go",
    "categories": ["Native SDK", "Federation", "Library"],
    "attention": 2,
    "impact": 4,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk"
  },
  {
    "Продукт": "logbroker cli",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Console", "Data Ingestion"],
    "attention": 3,
    "impact": 4,
    "quality": 25,
    "repository": ""
  },
  {
    "Продукт": "langchain-ydb",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Vector Store", "AI/ML", "Library"],
    "attention": 2,
    "impact": 7,
    "quality": 85,
    "repository": "https://github.com/ydb-platform/ydb-langchain"
  },
  {
    "Продукт": "apache airflow",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ETL", "Workflow", "Library"],
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-airflow-provider"
  },
  {
    "Продукт": "sqlalchemy",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Standard API", "Library"],
    "attention": 3,
    "impact": 6,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy"
  },
  {
    "Продукт": "dbt",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ELT", "Analytics", "Library"],
    "attention": 4,
    "impact": 3,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/dbt-ydb"
  },
  {
    "Продукт": "DBAPI",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Standard API", "Library"],
    "attention": 2,
    "impact": 8,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-python-sdk"
  },
  {
    "Продукт": "django orm",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["ORM", "Library"],
    "attention": 1,
    "impact": 2,
    "quality": 60,
    "repository": "https://github.com/ydb-platform/ydb-django"
  },
  {
    "Продукт": "ydb-java-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Николай Перфилов (pnv1)", "Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["Native SDK", "Library"],
    "attention": 9,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-sdk"
  },
  {
    "Продукт": "JDBC Driver",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["Standard API", "Library"],
    "attention": 9,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver"
  },
  {
    "Продукт": "ydb-importer",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion"],
    "attention": 2,
    "impact": 3,
    "quality": 60,
    "repository": "https://github.com/ydb-platform/ydb-importer"
  },
  {
    "Продукт": "YDB Spark Connector",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги", "Заносим свежие фичи"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": [],
    "Язык программирования": "Java",
    "categories": ["ETL", "Analytics", "Library"],
    "attention": 6,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-spark-connector"
  },
  {
    "Продукт": "ydb-js-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Я Владислав Поляков (polrk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Js/Ts",
    "categories": ["Native SDK", "Library"],
    "attention": 4,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-nodejs-sdk"
  },
  {
    "Продукт": "ydb cli",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Николай Перфилов (pnv1)",
    "Кто еще может помочь": ["Булат Гаязов (brgayazov)"],
    "Язык программирования": "C/C++",
    "categories": ["Console", "Admin"],
    "attention": 10,
    "impact": 10,
    "quality": 75,
    "repository": "https://github.com/ydb-platform/ydb"
  },
  {
    "Продукт": "YDB FDW extention for PostgreSQL",
    "Статус": ["В разработке"],
    "Ответственный": "Тимофей Кулин (rekby)",
    "Кто еще может помочь": ["Иван Шиляев (spotivan)", "Булат Гаязов (brgayazov)"],
    "Язык программирования": "C/C++",
    "categories": ["Standard API", "Integration", "Library"],
    "attention": 10,
    "impact": 10,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ydb-postgres-fdw"
  },
  {
    "Продукт": "ydb-dotnet-sdk",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["Native SDK", "Library"],
    "attention": 8,
    "impact": 6,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
  },
  {
    "Продукт": "ADO.Net",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["Standard API", "Library"],
    "attention": 9,
    "impact": 6,
    "quality": 80,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
  },
  {
    "Продукт": "EntityFramework",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library"],
    "attention": 9,
    "impact": 6,
    "quality": 80,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
  },
  {
    "Продукт": "linq2db",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library"],
    "attention": 3,
    "impact": 6,
    "quality": 80,
    "repository": ""
  },
  {
    "Продукт": "Hibernate 5/6 dialects",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Library"],
    "attention": 7,
    "impact": 10,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
  },
  {
    "Продукт": "JOOQ dialect",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Code Generation", "Library"],
    "attention": 2,
    "impact": 7,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
  },
  {
    "Продукт": "liquibase",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["Migration", "Library"],
    "attention": 2,
    "impact": 7,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
  },
  {
    "Продукт": "FlyWay",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["Migration", "Library"],
    "attention": 2,
    "impact": 5,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
  },
  {
    "Продукт": "ydb materializer",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion"],
    "attention": 4,
    "impact": 6,
    "quality": 85,
    "repository": ""
  },
  {
    "Продукт": "ydb-php-sdk",
    "Статус": ["Production ready", "Принимаем PR"],
    "Ответственный": "",
    "Кто еще может помочь": ["Тимофей Кулин (rekby)"],
    "Язык программирования": "PHP",
    "categories": ["Native SDK", "Library"],
    "attention": 1,
    "impact": 1,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-php-sdk"
  },
  {
    "Продукт": "golang-migrate",
    "Статус": ["В разработке"],
    "Ответственный": "Алексей Мясников (asmyasnikov)",
    "Кто еще может помочь": [],
    "Язык программирования": "Go",
    "categories": ["Migration", "Library"],
    "attention": 3,
    "impact": 5,
    "quality": 50,
    "repository": ""
  },
  {
    "Продукт": "Dapper",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": [],
    "Язык программирования": "C#",
    "categories": ["ORM", "Library"],
    "attention": 2,
    "impact": 6,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-dotnet-sdk"
  },
  {
    "Продукт": "alembic",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["Migration", "Library"],
    "attention": 4,
    "impact": 4,
    "quality": 25,
    "repository": "https://github.com/ydb-platform/ydb-sqlalchemy"
  },
  {
    "Продукт": "Apache SuperSet",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Олег Овчарук (ovcharuk)",
    "Кто еще может помочь": [],
    "Язык программирования": "Python",
    "categories": ["BI", "Analytics"],
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": ""
  },
  {
    "Продукт": "logstash",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["Data Ingestion", "Observability", "Library"],
    "attention": 2,
    "impact": 4,
    "quality": 90,
    "repository": ""
  },
  {
    "Продукт": "ydb-rust-sdk",
    "Статус": ["Production ready", "Принимаем PR", "Фиксим баги"],
    "Ответственный": "Тимофей Кулин (rekby)",
    "Кто еще может помочь": [],
    "Язык программирования": "Rust",
    "categories": ["Native SDK", "Library"],
    "attention": 2,
    "impact": 2,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-rs-sdk"
  },
  {
    "Продукт": "ydb-go-sdk-zap",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zap"
  },
  {
    "Продукт": "ydb-go-sdk-logrus",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-logrus"
  },
  {
    "Продукт": "ydb-go-sdk-zerolog",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-zerolog"
  },
  {
    "Продукт": "ydb-go-sdk-otel",
    "Статус": ["В разработке", "Фиксим баги", "Production ready", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-otel"
  },
  {
    "Продукт": "ydb-go-sdk-opentracing",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-opentracing"
  },
  {
    "Продукт": "ydb-go-sdk-slog",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Константин Прокопенко (zkpo)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "Go",
    "categories": ["Library", "Observability"],
    "attention": 1,
    "impact": 1,
    "quality": 99,
    "repository": "https://github.com/ydb-platform/ydb-go-sdk-slog"
  },
  {
    "Продукт": "Spring Data JDBC",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "Кирилл Курдюков (kurdyukov-kir)",
    "Кто еще может помочь": ["Александр Горшенин (alexandr268)"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Standard API", "Library"],
    "attention": 7,
    "impact": 9,
    "quality": 90,
    "repository": "https://github.com/ydb-platform/ydb-java-dialects"
  },
  {
    "Продукт": "YOJ",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["ORM", "Library"],
    "attention": 2,
    "impact": 2,
    "quality": 70,
    "repository": "https://github.com/ydb-platform/yoj-project"
  },
  {
    "Продукт": "Federated ydb-java-sdk",
    "Статус": ["Production ready", "Фиксим баги", "Принимаем PR", "Заносим свежие фичи"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Николай Перфилов (pnv1)", "Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["Native SDK", "Federation", "Library"],
    "attention": 3,
    "impact": 4,
    "quality": 65,
    "repository": "https://github.com/ydb-platform/ydb-java-sdk"
  },
  {
    "Продукт": "userver ydb component",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Булат Гаязов (brgayazov)",
    "Кто еще может помочь": ["Алексей Мясников (asmyasnikov)"],
    "Язык программирования": "C/C++",
    "categories": ["Library", "Integration"],
    "attention": 4,
    "impact": 6,
    "quality": 50,
    "repository": "https://github.com/userver-framework/userver"
  },
  {
    "Продукт": "Apache NiFi",
    "Статус": ["Production ready", "Заносим свежие фичи", "Фиксим баги", "Принимаем PR"],
    "Ответственный": "Александр Горшенин (alexandr268)",
    "Кто еще может помочь": ["Кирилл Курдюков (kurdyukov-kir)"],
    "Язык программирования": "Java",
    "categories": ["ETL", "Data Ingestion", "Library"],
    "attention": 2,
    "impact": 4,
    "quality": 50,
    "repository": "https://github.com/ydb-platform/ydb-jdbc-driver"
  }
];

// Solid colors for programming languages (no gradients)
export const languageColors = {
  "Go": { bg: "#00ADD8", text: "#003e6b" },
  "Python": { bg: "#398800", text: "#110f00" },
  "Java": { bg: "#ffa77c", text: "#920000" },
  "C/C++": { bg: "#a2d5f8", text: "#001e72" },
  "C#": { bg: "#9b7eff", text: "#5c00b4" },
  "Js/Ts": { bg: "#ffef55", text: "#000000" },
  "Rust": { bg: "#f37c6c", text: "#440000" },
  "PHP": { bg: "#fb91ff", text: "#8e00c0" }
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
  "Integration": "#0D9488",
  "Federation": "#D946EF",
  "Code Generation": "#FACC15",
  "Workflow": "#FB923C"
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
  products.forEach(p => {
    if (p["Ответственный"]) {
      owners.add(p["Ответственный"]);
    }
    const helpers = p["Кто еще может помочь"] || [];
    helpers.forEach(h => owners.add(h));
  });
  return Array.from(owners).sort();
};

// Get unique languages
export const getLanguages = () => {
  const langs = new Set();
  products.forEach(p => {
    if (p["Язык программирования"]) {
      langs.add(p["Язык программирования"]);
    }
  });
  return Array.from(langs).sort();
};

// Get unique categories
export const getCategories = () => {
  const cats = new Set();
  products.forEach(p => {
    const categories = p.categories || [];
    categories.forEach(c => cats.add(c));
  });
  return Array.from(cats).sort();
};

// Check if person is involved with product
export const isPersonInvolved = (product, person) => {
  if (!person) return true;
  if (product["Ответственный"] === person) return true;
  const helpers = product["Кто еще может помочь"] || [];
  return helpers.includes(person);
};

// Check if product has category
export const hasCategory = (product, category) => {
  if (!category) return true;
  const categories = product.categories || [];
  return categories.includes(category);
};
