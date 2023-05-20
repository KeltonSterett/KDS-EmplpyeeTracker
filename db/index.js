const connection = require('../connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
// create a method that returns all departments
    viewAllDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM department'
        );
    }
// create a method that returns all roles
    viewAllRoles() {
        return this.connection.promise().query(
            'SELECT * FROM role'
        );
    }
// create a method that returns all employees
    viewAllEmployees() {
        return this.connection.promise().query(
            'SELECT * FROM employee'
        );
    }
// create a method that adds a department
    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', department
        );
    }
// create a method that adds a role
    addRole(role) {
        return this.connection.promise().query(
            'INSERT INTO role SET ?', role
        );
    }
// create a method that adds an employee
    addEmployee(employee) {
        return this.connection.promise().query(
            'INSERT INTO employee SET ?', employee
        );
    }
// create a method that updates an employee role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            'UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]
        );
    }
}
