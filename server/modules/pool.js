
const pg = require('pg');
// const url = require('url');



//HEROKU CONFIG
let config = {}

if (process.env.DB_PASS) {
  config = {
    user: 'danraskin',
    host: 'db.bit.io',
    database: 'danraskin/weekend-to-do-app',
    password: process.env.DB_PASS, // key from bit.io database page connect menu
    port: 5432,
    ssl: true,
  };
} else {
  config = {
    database: 'weekend-to-do-app', 
    host: 'localhost', 
    port: 5432, 
    max: 10, 
    idleTimeoutMillis: 30000 
  };
}
const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});

pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
  process.exit(-1);
});

module.exports = pool;


// OLD HEROKU CONFIG
// if (process.env.DATABASE_URL) {
//     // Heroku gives a url, not a connection object
//     // https://github.com/brianc/node-pg-pool
//     let params = url.parse(process.env.DATABASE_URL);
//     let auth = params.auth.split(':');

//     config = {
//         user: auth[0],
//         password: auth[1],
//         host: params.hostname,
//         port: params.port,
//         database: params.pathname.split('/')[1],
//         ssl: { rejectUnauthorized: false },
//         max: 10, // max number of clients in the pool
//         idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//     };

// } else {
//     // only change the things on the right side of the ||
//     config = {
//         user: process.env.PG_USER || null, //env var: PGUSER
//         password: process.env.DATABASE_SECRET || null, //env var: PGPASSWORD
//         host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
//         port: process.env.DATABASE_PORT || 5432, //env var: PGPORT
//         database: process.env.DATABASE_NAME || 'prime_feedback', //env var: PGDATABASE or the name of your database (e.g. database: process.env.DATABASE_NAME || 'koala_holla',)
//         max: 10, // max number of clients in the pool
//         idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//     };
// }

// module.exports = new pg.Pool(config);
