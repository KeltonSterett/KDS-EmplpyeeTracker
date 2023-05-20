const connection = require('./connection.js');
const { prompt } = require('inquirer');
const db = require('./db/index.js');
const cTable = require('console.table');

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
                    db.viewAllDepartments().then((res) => {
                        console.table(res[0]);
                    });
                    questions();
                    break;
                // if the choice is view all roles, call the view all roles method
                case 'viewAllRoles':
                    db.viewAllRoles().then((res) => {
                        console.table(res[0]);
                    });
                    // questions();
                    break;
                // if the choice is view all employees, call the view all employees method
                case 'viewAllEmployees':
                    db.viewAllEmployees().then((res) => {
                        console.table(res[0]);
                    });
                    // questions();
                    break;
                // if the choice is add department, call the add department method and prompt the user for the department name
                case 'addDepartment':
                    addDepartment();
                    // questions()
                    break;
                // if the choice is add role, call the add role method
                case 'addRole':
                    db.addRole()
                    // questions();
                    break;
                // if the choice is add employee, call the add employee method
                case 'addEmployee':
                    addEmployee()
                    // questions();
                    break;
                // if the choice is update employee role, call the update employee role method
                case 'updateEmployeeRole':
                    updateEmployeeRole();
                    // questions();
                    break;
                // if the choice is exit, exit the application
                case 'exit':
                    console.log('Goodbye!');
                    connection.end();
                    break;
            }
        })
};

// Functions for adding an employee, role, and department
// function to add a department
function addDepartment() {
    prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department you would like to add?'
        }
    ])
        .then((res) => {
            let department = res;
            db.addDepartment(department).then(() => {
                console.log('Department added to database!');
                console.table(department);
            });
        })
}

// function to add a role
function addRole() {
    prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the title of the role you would like to add?'
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the salary for this role?'
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the department id for this role?'
        }
    ])
        .then((res) => {
            let role = res;
            db.addRole(role).then(() => {
                console.table(role);
            });
        })
}

// function to add an employee
function addEmployee() {
    prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the first name of the employee you would like to add?'
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the last name of the employee you would like to add?'
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the role for this employee?'
        },
        {
            name: 'name',
            type: 'input',
            message: 'Who is the manager for this employee?'
        }
    ])
        .then((res) => {
            let employee = res;
            db.addEmployee(employee).then(() => {
                console.table(employee);
            });
        })
}