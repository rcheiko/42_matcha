const Pool = require("pg").Pool

const pool = new Pool({
    user: "rcheiko",
    password: "pass",
    database: "matcha",
    host: "localhost",
    port: 5432,
});

module.exports = pool;