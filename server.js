const connection = require('./connection.js');
const { prompt } = require('inquirer');
const DB = require('./db/index.js');

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
                },
                {
                    name: 'Exit',
                    value: 'exit'
                }
            ]
        }
    ])
        .then((answers) => {
            console.log(answers);
            let choices = answers.choices;
            // if the choice is view all departments, call the view all departments method
            switch (choices) {
                case 'viewAllDepartments':
                    DB.viewAllDepartments().then((res) => {
                        console.log(res[0]);
                    });
                    break;
                // if the choice is view all roles, call the view all roles method
                case 'viewAllRoles':
                    DB.viewAllRoles().then((res) => {
                        console.log(res[0]);
                    });
                    break;
                // if the choice is view all employees, call the view all employees method
                case 'viewAllEmployees':
                    DB.viewAllEmployees().then((res) => {
                        console.log(res[0]);
                    });
                    break;
                // if the choice is add department, call the add department method
                case 'addDepartment':
                    DB.addDepartment().then((res) => {
                        console.log(res[0]);
                    });
                    break;
                // if the choice is add role, call the add role method
                case 'addRole':
                    addRole();
                    break;
                // if the choice is add employee, call the add employee method
                case 'addEmployee':
                    addEmployee();
                    break;
                // if the choice is update employee role, call the update employee role method
                case 'updateEmployeeRole':
                    updateEmployeeRole();
                    break;
                // if the choice is exit, exit the application
                case 'exit':
                    console.log('Goodbye!');
                    connection.end();
                    break;
            }
        })
};

