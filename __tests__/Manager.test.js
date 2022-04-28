const Manager = require("../lib/Manager");

describe("Employee class", () => {
  describe("Initialisation", () => {
    it("should create an initialised object", () => {
      const manager = new Manager();

      expect(manager).toEqual({ role: "Manager" });
    });

    it("should create an object with name, id, and email after calling the three get methods", () => {
      const manager = new Manager();
      manager.getName("Alyssa Natividad");
      manager.getId(1);
      manager.getEmail("email@email.com");
      manager.getNumber(1234567);

      expect(manager).toEqual({
        name: "Alyssa Natividad",
        id: 1,
        email: "email@email.com",
        officeNumber: 1234567,
        role: "Manager",
      });
    });
  });

  describe("getNumber", () => {
    it("should return an error if number provided is not a number", () => {
      const manager = new Manager();
      const err = "Please enter a valid office number (without spaces)";

      expect(manager.getNumber("0abcd323")).toEqual(err);
      expect(manager.getNumber("ten")).toEqual(err);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const manager = new Manager();

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
