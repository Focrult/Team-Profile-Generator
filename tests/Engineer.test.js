const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should pass data through', () => {
        const github = "focrult"
                                    //other variables
        const obj = new Engineer("",0,"",github);
        expect(obj.github).toEqual("focrult");
    })
    it('should get role Engineer', () => {
        const role = "Engineer";

        const obj = new Engineer("", role);
        expect(obj.role).toEqual("Engineer");
    })
})