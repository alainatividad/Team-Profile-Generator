const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github;
    this.role = this.getRole();
  }

  getGithub(github) {
    if (!github) {
      return "Please enter a non-empty string";
    }

    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
