// TODO: Include packages needed for this application
const fs = require('fs');
//test: const generateMarkdowns = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [];

questions
  .prompt(
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of the application.',
        name: 'description',
      },
      
      {
      type: 'input',
      message: 'Provide Installation instructions.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Provide contribution details.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Provide test instructions',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Select license from the options:',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please enter your github username.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
      },
  )
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions




 // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// example
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log('Commit logged!')
// );
// //if its an error then there will show the err or it will show commit logged