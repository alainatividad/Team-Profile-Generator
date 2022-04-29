const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

// let's store the input objects into an array
let team = [];

function start() {
  // the program starts with asking for the manager's details
  inquirer
    .prompt([
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
      {
        type: "input",
        name: "officeNum",
        message: "What's the office number of the Team Manager?",
        validate(officeNumber) {
          if (!/[0-9]/gi.test(officeNumber)) {
            return "Please enter a valid office number (without spaces)";
          }
          return true;
        },
      },
    ])
    .then((val) => {
      // create the Manager object
      const manager = new Manager();
      manager.getName(val.name);
      manager.getEmail(val.email);
      manager.getId(val.empId);
      manager.getNumber(val.officeNumber);

      // add it to the empty team array
      team.push(manager);
      console.log(team);
      // show prompt to add members or finish creating the team
      addMore();
    });
}

function getEngineer() {
  // if the user selects Engineer from the prompt, ask Engineer's details
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the Engineer?",
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
        message: "What's the employee ID of the Engineer?",
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
        message: "What's the email of the Engineer?",
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
      {
        type: "input",
        name: "github",
        message: "What's the Github username of the Engineer?",
        validate(github) {
          if (!github) {
            return "Please enter a Github username";
          }
          return true;
        },
      },
    ])
    .then((val) => {
      // create new Engineer object
      const engineer = new Engineer();
      engineer.getName(val.name);
      engineer.getEmail(val.email);
      engineer.getId(val.empId);
      engineer.getGithub(val.github);

      // push new Engineer to team
      team.push(engineer);
      console.log(team);
      // show prompt to add members or finish creating the team
      addMore();
    });
}

function getIntern() {
  // When Intern is selected on the addMore prompt, ask Intern details
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the name of the Intern?",
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
        message: "What's the employee ID of the Intern?",
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
        message: "What's the email of the Intern?",
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
      {
        type: "input",
        name: "school",
        message: "What's the school of the Intern?",
        validate(school) {
          if (!school) {
            return "Please enter a valid school name";
          }
          return true;
        },
      },
    ])
    .then((val) => {
      // create new Intern
      const intern = new Intern();
      intern.getName(val.name);
      intern.getEmail(val.email);
      intern.getId(val.empId);
      intern.getSchool(val.school);

      // add new intern to team
      team.push(intern);
      console.log(team);
      // show prompt to add members or finish creating the team
      addMore();
    });
}

function addMore() {
  // prompt that would ask for more team members or to finish adding
  inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "Add more team members?",
        choices: ["Engineer", "Intern", "Finished building my team"],
      },
    ])
    .then((val) => {
      switch (val.member) {
        case "Engineer":
          getEngineer();
          break;

        case "Intern":
          getIntern();
          break;

        default:
          quit();
      }
    });
}

function quit() {
  process.exit(0);
}

// Function call to initialise app
start();
