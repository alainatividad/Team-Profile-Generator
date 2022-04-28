const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Initialisation", () => {
    it("should create an initialised object with role = Employee", () => {
      const employee = new Employee();

      expect(employee).toEqual({ role: "Employee" });
    });

    it("should create an object with name, id, email, and role after calling the three get methods", () => {
      const employee = new Employee();
      employee.getName("Alyssa Natividad");
      employee.getId(1);
      employee.getEmail("email@email.com");

      expect(employee).toEqual({
        name: "Alyssa Natividad",
        id: 1,
        email: "email@email.com",
        role: "Employee",
      });
    });
  });

  describe("getName", () => {
    it("should return an error if name provided is not a string", () => {
      const employee = new Employee();
      const err = "Please enter a non-empty string";

      expect(employee.getName("")).toEqual(err);
    });
  });

  describe("getId", () => {
    it("should return an error if id provided is zero or is not a number", () => {
      const employee = new Employee();
      const err = "Please enter a non-zero number";

      expect(employee.getId(0)).toEqual(err);
      expect(employee.getId("0")).toEqual(err);
    });
  });

  describe("getEmail", () => {
    it("should return an error if email provided is not a string", () => {
      const employee = new Employee();
      const err = "Please enter a non-empty string.";

      expect(employee.getEmail("")).toEqual(err);
    });

    it("should return an error if email doesn't have an '@'", () => {
      const employee = new Employee();
      const err = "Valid email should have '@'.";

      expect(employee.getEmail("emailemail.com")).toEqual(err);
    });

    it("should return an error if email doesn't end in '.com'", () => {
      const employee = new Employee();
      const err = "Valid email to end in '.com'.";

      expect(employee.getEmail("email@email")).toEqual(err);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee();

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
