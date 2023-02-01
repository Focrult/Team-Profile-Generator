//bring in parent class
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email); //using employee constructor
        this.github = github;
    }
}

module.exports = Engineer;