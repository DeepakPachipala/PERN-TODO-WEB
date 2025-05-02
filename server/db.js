const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    password: "1998",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;


// DATABASE_HOST=localhost
// DATABASE_PASSWORD=1998
// # DATABASE_HOST=tt-miyo-useast1-dev-rds.cchvgvxclr8b.us-east-1.rds.amazonaws.com
// # DATABASE_PASSWORD=miyo@PostgreSQL
// DATABASE_PORT=5432
// DATABASE_USER=postgres
// DATABASE_NAME=miyo