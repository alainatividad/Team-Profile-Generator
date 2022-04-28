const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Initialisation", () => {
    it("should create an initialised object with role = Engineer", () => {
      const engineer = new Engineer();

      expect(engineer).toEqual({ role: "Engineer" });
    });

    it("should create an object with name, id, email, github username, and role after calling the four get methods", () => {
      const engineer = new Engineer();
      engineer.getName("Alyssa Natividad");
      engineer.getId(1);
      engineer.getEmail("email@email.com");
      engineer.getGithub("anatividad");

      expect(engineer).toEqual({
        name: "Alyssa Natividad",
        id: 1,
        email: "email@email.com",
        github: "anatividad",
        role: "Engineer",
      });
    });
  });

  describe("getGithub", () => {
    it("should return an error if no parameter is provided", () => {
      const engineer = new Engineer();
      const err = "Please enter a non-empty string";

      expect(engineer.getGithub("")).toEqual(err);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
