const connection = require('./connection');

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
}
