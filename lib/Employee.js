//parent class for the manager, engineer, and intern.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    name(){
        return this.name;
    }
    id(){
        return this.id;
    }
    email(){
        return this.email;
    }

}

module.exports = Employee;