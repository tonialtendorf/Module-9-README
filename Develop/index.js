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

