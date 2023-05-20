const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const MySqlconnection = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hattie732$',
        database: 'employee_tracker_db'
    },
);

module.exports = MySqlconnection;

