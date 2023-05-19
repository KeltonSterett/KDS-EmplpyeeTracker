const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
);

module.exports = db;

