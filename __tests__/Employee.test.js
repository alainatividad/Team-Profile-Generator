const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialisation", () => {
        it("should create an object with a name, id, and email if given valid arguments", () => {
            const employee = new Employee("Alyssa", 1, "alyssa@email.com");

            expect(employee.name).toEqual("Alyssa");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("alyssa.email.com");
        });

        it("should throw an error if there are no arguments provided", () => {
            const futureCmd = () => new Employee();

            expect(futureCmd).toThrow();
        });

        it("should throw an error if there are less than 3 arguments provided", () => {
            const futureCmd = () => new Employee("Alyssa", 
            "alyssa@email.com");
            const err = new Error("Expected to have 3 parameters");

            expect(futureCmd).toThrowError(err);
        });

        it("should throw an error if id provided is less than 1", () => {
            const futureCmd = () => new Employee("Alyssa", 0,
            "alyssa@email.com");
            const err = new Error("Expected parameter 'id' to be a non-zero number");

            expect(futureCmd).toThrowError(err);
        });

        it("should throw an error if name provided is not a string", () => {
            const futureCmd = () => new Employee(25, 1,
            "alyssa@email.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(futureCmd).toThrowError(err);
        });

        it("should throw an error if id provided is not a number", () => {
            const futureCmd = () => new Employee("Alyssa", "1",
            "alyssa@email.com");
            const err = new Error("Expected parameter 'id' to be a non-zero number");

            expect(futureCmd).toThrowError(err);
        });

        it("should throw an error if email provided doesn't have '@'", () => {
            const futureCmd = () => new Employee("Alyssa", 0,
            "alyssaemail.com");
            const err = new Error("Expected parameter 'email' to have '@'");

            expect(futureCmd).toThrowError(err);
        });

        it("should throw an error if email provided doesn't end in '.com'", () => {
            const futureCmd = () => new Employee("Alyssa", 0,
            "alyssa@emailcom");
            const err = new Error("Expected parameter 'email' to end in '.com'");

            expect(futureCmd).toThrowError(err);
        });
    })
})