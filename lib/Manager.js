const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNumber;
    this.role = this.getRole();
  }

  getNumber(officeNumber) {
    if (!officeNumber || !/^\d*$/gi.test(officeNumber)) {
      return "Please enter a valid office number";
    }

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
