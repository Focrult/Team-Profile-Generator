const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should pass data through', () => {
        const OfficeNumber = "1"
                                //other variables
        const obj = new Manager("", 0, "", OfficeNumber);
        expect(obj.OfficeNumber).toEqual("1");
    })
    it('should get role Manager', () => {
        const role = "Manager";

        const obj = new Manager("", role);
        expect(obj.role).toEqual("Manager");
    })
})