const validator = require('./src/utilities/validators');


describe('Testing Validator', () => {
    it('validateName: correct Input', () => {
        expect(validator.ValidateUsername("mayank@infy.com")).toEqual(undefined);
    })

    it('validateName: incorrect Input', () => {
        expect(function () { validator.ValidateUsername("abc") }).toThrow(new Error("Invalid Username"))
    })
})

describe('Testing Validator', () => {
    it('validatepincode: correct Input', () => {
        expect(validator.ValidatePassword("Mayank.123")).toEqual(undefined);
    })

    it('validatePassword: incorrect Input', () => {
        expect(function () { validator.ValidatePassword("admin") }).toThrow(new Error("Invalid Password"))
    })
})