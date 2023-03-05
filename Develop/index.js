// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "what is the description?",
  },
  {
    type: "input",
    name: "installation",
    message: "how to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "instructions to use your project",
  },
  {
    type: "input",
    name: "credits",
    message: "credit any collaborators or third party assets",
  },
  {
    type: "list",
    message: "choose a license",
    name: "license",
    choices: ["Apache", "MIT", "Mozilla PL", "GPLv3", ""],
  },
  {
    type: "input",
    name: "contribute",
    message: "guidelines for other developers to contribute",
  },
  {
    type: "input",
    name: "deployedLink",
    message: "deployed link to the project",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //   .then((data) => {
  //     console.log(data);
  //     const userData = JSON.stringify(data);

  fs.writeFile(fileName, data, (error) => {
    error ? console.log(error) : console.log("File was written");
  });
}
// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
