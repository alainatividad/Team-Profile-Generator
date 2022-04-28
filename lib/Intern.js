const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.school;
    this.role = this.getRole();
  }

  getSchool(school) {
    if (!school) {
      return "Please enter a non-empty string";
    }

    this.school = school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
