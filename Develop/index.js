// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//test: const generateMarkdowns = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = []
  inquirer.prompt(
    [
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
      choices: ['None', 'GNU General Public License', 'MIT License', 'Boost Software License 1.0']
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
  ]);


  // .then(({
  //   title,
  //   installation,
  //   instructions,
  //   credits,
  //   license,
  //   git,
  //   email,
  //   usage,
  //   contributions,

  // }) => {
  //   const template = 
  // })
   // TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(`./${fileName.join(' ')}.md`, data, (err) =>{
  if(err){
    console.log(err)
  }
  console.log("Your README file has been created");
 })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

