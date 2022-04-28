const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Initialisation", () => {
    it("should create an initialised object with role = Intern", () => {
      const intern = new Intern();

      expect(intern).toEqual({ role: "Intern" });
    });

    it("should create an object with name, id, email, github username, and role after calling the four get methods", () => {
      const intern = new Intern();
      intern.getName("Alyssa Natividad");
      intern.getId(1);
      intern.getEmail("email@email.com");
      intern.getSchool("UNSW");

      expect(intern).toEqual({
        name: "Alyssa Natividad",
        id: 1,
        email: "email@email.com",
        school: "UNSW",
        role: "Intern",
      });
    });
  });

  describe("getSchool", () => {
    it("should return an error if no parameter is provided", () => {
      const intern = new Intern();
      const err = "Please enter a non-empty string";

      expect(intern.getSchool("")).toEqual(err);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern();

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
