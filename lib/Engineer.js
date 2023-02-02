//bring in parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email) //using employee constructor
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;