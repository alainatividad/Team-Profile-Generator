// same questions for all types of employees

module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the name of the Team Manager?",
    validate(input) {
      if (!/[a-z ]/gi.test(input)) {
        return "Please enter a non-empty string";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "empId",
    message: "What's the employee ID of the Team Manager?",
    validate(id) {
      if (!/[1-9]/gi.test(id)) {
        return "Please enter a non-zero number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What's the email of the Team Manager?",
    validate(email) {
      if (!/[a-z0-9.@]/gi.test(email)) {
        return "Please enter a non-empty string.";
      }
      if (!email.includes("@")) {
        return `Valid email should have '@'.`;
      }
      if (!email.endsWith(".com")) {
        return `Valid email to end in '.com'.`;
      }
      return true;
    },
  },
];
