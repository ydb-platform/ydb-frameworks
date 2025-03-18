[![pages-build-deployment](https://github.com/ydb-platform/ydb-frameworks/actions/workflows/pages/pages-build-deployment/badge.svg)](https://ydb-platform.github.io/ydb-frameworks)

# Database Frameworks Timeline

This project visualizes the development timeline of various frameworks, libraries, and utilities for different database systems. It allows users to explore when different tools were created, when they added support for specific databases, and how they relate to each other.

## Features

- Interactive timeline showing the evolution of database frameworks
- Filter frameworks by category (ORM, Migration, Driver, etc.)
- Filter frameworks by programming language
- Switch between different databases (PostgreSQL, MySQL, MongoDB, YDB, Cassandra)
- Dark and light theme support
- Detailed tooltips showing information about each framework
- Visualization of dependencies between frameworks

## Supported Databases

The project includes support for the following database systems:

- YDB (Yandex Database)
- PostgreSQL
- MySQL
- Microsoft SQL Server (MSSQL)
- Oracle
- MongoDB
- Amazon DynamoDB
- Greenplum
- Vertica
- TiDB
- Azure Cosmos DB
- Google Bigtable
- Google Cloud Spanner
- SQLite3
- YugabyteDB
- CockroachDB
- Redis
- Apache Cassandra

Each database has its own set of supported frameworks, including:
- Standard APIs (JDBC, database/sql, DB-API, ADO.NET)
- ORMs (GORM, Hibernate, SQLAlchemy, Prisma, TypeORM, etc.)
- Migration tools (Flyway, Liquibase, Alembic, etc.)
- Admin tools (DBeaver, DataGrip, etc.)
- ETL tools (Spark, Flink, Airflow, etc.)
- BI tools (Grafana, Superset, Tableau, etc.)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ydb-frameworks.git
cd ydb-frameworks
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Start the development server
```bash
npm start
# or
yarn start
```
Open http://localhost:3000 in your browser
