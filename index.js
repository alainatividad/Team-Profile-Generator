// include modules for filesystem and inquirer
const fs = require("fs");
const inquirer = require("inquirer");

// include class definitions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const returnArrayQuestion = require("./lib/questions");
// const generatePage = require("./lib/generatePage");
const generateHTML = require("./lib/generateHTML");

// let's store the input objects into an array
let team = [];
let question = [];
const generatePage = (cardsHTML) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
      <title>My Team</title>
  </head>
  <body>
      <header class="jumbotron jumbotron-fluid text-center bg-dark">
          <div class="container-fluid">
              <p class="h1 text-white">My Team</p>
          </div>
      </header>
      <div class="container">
          <div class="row row-cols-2 row-cols-md-4">
          ${cardsHTML}  
          </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html>`;

function start() {
  question = returnArrayQuestion("Team Manager");
  // the program starts with asking for the manager's details
  inquirer
    .prompt([
      ...question,
      {
        type: "input",
        name: "officeNum",
        message: "What's the office number of the Team Manager?",
        validate(officeNumber) {
          if (!/^\d*$/gi.test(officeNumber)) {
            return "Please enter a valid office number";
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
      manager.getNumber(val.officeNum);

      // add it to the empty team array
      team.push(manager);
      // show prompt to add members or finish creating the team
      addMore();
    });
}

function getEngineer() {
  question = returnArrayQuestion("Engineer");
  // if the user selects Engineer from the prompt, ask Engineer's details
  inquirer
    .prompt([
      ...question,
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
      // show prompt to add members or finish creating the team
      addMore();
    });
}

function getIntern() {
  question = returnArrayQuestion("Intern");
  // When Intern is selected on the addMore prompt, ask Intern details
  inquirer
    .prompt([
      ...question,
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
  let teamHTML = "";

  // generate card for each team member
  team.forEach((teamMember) => {
    teamHTML += generateHTML(teamMember);
  });

  //append the created cards to the base HTML and then write to index.html
  fs.writeFile("./dist/index.html", generatePage(teamHTML), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

// Function call to initialise app
start();
