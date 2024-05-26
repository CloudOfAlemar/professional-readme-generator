// TODO: Include packages needed for this application
const fs = require( "fs" );
const inquirer = require( "inquirer" );
const generateMarkdown = require( "./utils/generateMarkdown" );

// TODO: Create an array of questions for user input
const questions = [
  {
    type : "input",
    message : "What will be your project Title?",
    name : "title"
  },
  {
    type : "input",
    message : "Give your project a Description?",
    name : "description"
  },
  {
    type : "input",
    message : "What are the Installation instructions for this project?",
    name : "installation"
  },
  {
    type : "input",
    message : "How should this application be Used?",
    name : "usage"
  },
  {
    type : "list",
    message : "What is the License of this project?",
    name : "license",
    choices : [
      "none",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "Unlicense"
    ]
  },
  {
    type : "input",
    message : "What are the Contribution guidelines?",
    name : "contribution"
  },
  {
    type : "input",
    message : "What are the instructions for Testing?",
    name : "testing"
  },
  {
    type : "input",
    message : "What is your Github username?",
    name : "github"
  },
  {
    type : "input",
    message : "What is your email?",
    name : "email"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile( fileName, data, err => {
    err ? console.log( err ) : console.log( "File was successfully created." );
  } );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt( questions )
  .then( res => {
    const readmeHTML = generateMarkdown( res );
    writeToFile( "README-sample.md", readmeHTML );
  } );
}

// Function call to initialize app
init();