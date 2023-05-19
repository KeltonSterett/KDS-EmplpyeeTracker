const connection = require('./connection');
const { prompt } = require('inquirer');
const db = require('./db/index.js');

questions()
function questions() {
    prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an option:',
            choices: [
                {
                    name: 'View All Departments',
                    value: 'viewAllDepartments'
                },
                {
                    name: 'View All Roles',
                    value: 'viewAllRoles'
                },
                {
                    name: 'View All Employees',
                    value: 'viewAllEmployees',
                },

                {
                    name: 'Add Department',
                    value: 'addDepartment'
                },
                {
                    name: 'Add Role',
                    value: 'addRole'
                },
                {
                    name: 'Add Employee',
                    value: 'addEmployee'
                },
                {
                    name: 'Update Employee Role',
                    value: 'updateEmployeeRole'
                }
            ]
        }
    ])
        .then((answers) => {
            let choice = answers.choice;
            // if the choice is view all departments, call the view all departments method
            switch (choice) {
                case 'viewAllDepartments':
                    viewAllDepartments();
                    break;
             // if the choice is view all roles, call the view all roles method
                case 'viewAllRoles':
                    viewAllRoles();
                    break;
            }
        })
}
        // write a functions that take user input and (create, update, delete) and calls the appropriate method