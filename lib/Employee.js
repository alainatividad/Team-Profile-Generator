class Employee {
  constructor() {
    this.name;
    this.id;
    this.email;
    this.role = this.getRole();
  }

  getName(name) {
    if (!/[a-z ]/gi.test(name)) {
      return "Please enter a non-empty string";
    }

    this.name = name;
  }

  getId(id) {
    if (!/[1-9]/gi.test(id)) {
      return "Please enter a non-zero number";
    }

    this.id = id;
  }

  getEmail(email) {
    if (!/[a-z0-9.@]/gi.test(email)) {
      return "Please enter a non-empty string.";
    }
    if (!email.includes("@")) {
      return `Valid email should have '@'.`;
    }
    if (!email.endsWith(".com")) {
      return `Valid email to end in '.com'.`;
    }

    this.email = email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
