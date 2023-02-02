const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should pass data through', () => {
        const officeNumber = "1"
                                //other variables
        const obj = new Manager("", 0, "", officeNumber);
        expect(obj.officeNumber).toEqual("1");
    })
    it('should get role Manager', () => {
        const role = "Manager";

        const obj = new Manager("", role);
        expect(obj.role).toEqual("Manager");
    })
})