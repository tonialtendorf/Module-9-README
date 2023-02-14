// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },

    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If any, list your collaborators, tutorials, etc',
      name: 'credits',
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
      type: 'list',
      message: 'Select license from the options:',
      name: 'license',
      choices: ['None', 'Apache', 'GNU', 'MIT', 'Boost Software 1.0']
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
  ];

   // TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Creating README file');
    writeToFile('README.md', generateMarkdown({ ...responses }));
  });
}
// Function call to initialize app
init();

