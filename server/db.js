const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "huaqh6cynt",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;