const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should pass data through', () => {
        const school = "UWA"
                                //other variables
        const obj = new Intern("",0,"",school);
        expect(obj.school).toEqual("UWA");
    })
    it('should get role Intern', () => {
        const role = "Intern";

        const obj = new Intern("", role);
        expect(obj.role).toEqual("Intern");
    })
})