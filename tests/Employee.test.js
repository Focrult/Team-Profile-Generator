const Employee = require('../lib/Employee'); //import the function we want to test

describe('Employee', () => {
    it('should pass data through the constructor', () => {
        const name = "Luke"

        const obj  = new Employee(name); //act
        expect(obj.name).toEqual("Luke"); //assert
    })
    it('should pass data through the constructor', () => {
        const id = 1

        const obj  = new Employee("", id); //act
        expect(obj.id).toEqual(1); //assert
    })
    it('should pass data through the constructor', () => {
        const email = "luke@example.com";

        const obj  = new Employee("", 0, email); //act
        expect(obj.email).toEqual("luke@example.com"); //assert
    })
})