const Manager = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber){
        super(name, id, email);
        this.OfficeNumber = OfficeNumber;
    }
    OfficeNumber(){
        return this.OfficeNumber
    }
}

module.exports = Manager;