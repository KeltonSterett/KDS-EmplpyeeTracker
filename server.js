const connection = require('connection');
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
            // if the choice is view all employees, call the view all employees method
                case 'viewAllEmployees':
                    viewAllEmployees();
                    break;
            // if the choice is add department, call the add department method
                case 'addDepartment':
                    addDepartment();
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
            }
        })
}
        // write functions that take user input and (create, update, delete) and calls the appropriate method
        function viewAllDepartments() {
            db.viewAllDepartments()
                .then(([rows]) => {
                    let departments = rows;
                    console.log('\n');
                    console.table(departments);
                })
                .then(() => questions());
        }
        
