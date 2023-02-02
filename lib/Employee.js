//parent class for the manager, engineer, and intern.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){  //method for getting the name
        return this.name;
    }
    getID(){ //method for getting the id
        return this.id;
    }
    getEmail(){ //method for getting the email
        return this.email;
    }
    getRole(){ //method for getting the role
        return this.role;
    }
}

module.exports = Employee;