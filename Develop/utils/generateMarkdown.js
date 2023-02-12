// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
    
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#license)
  - [Contribute](#Contribute)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## How to Contribute
  ${data.contribution}
  
  ## Tests
${data.test}

  ## Questions
  Feel free to contact me at ${data.email}
  Please visit my github profile at [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
