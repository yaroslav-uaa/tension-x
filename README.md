# tension-x
Node.js server with MySQL database & Prisma ORM

For start need istall dependencies and run MySQL database locally
First create .env - file with variable -
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server and MongoDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=mysql://example:examplePassword@localhost:3306/exampleDb

The second you need to push data into DB :
use this command - npx prisma db seed

