const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'karan',
    database: 'gaea',
    password: 'password@28'
})

module.exports = pool.promise()