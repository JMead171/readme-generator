const {writeFile} = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');

const promptQuestions = questionData => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project? (Required)',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log("Please enter your project name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDescInput => {
            if (projectDescInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses do you have with this project? (Check all that apply)',
        choices: ['MIT', 'BSD', 'GPL', 'Apache']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions',
    },

    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: gitLinkInput => {
            if (gitLinkInput) {
                return true;
            } else {
                console.log("Please enter your GitHub link!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
    },
    ])
};
 

promptQuestions()
  .then(questionData => {
    console.log(questionData);  
    console.log(questionData.license);
    if (questionData.license = ["MIT"]) {
        questionData.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (questionData.license = ["BSD"]) {
        questionData.badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    if (license = ["GPL"]) {
        questionData.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
    }
    if (license = ["Apache"]) {
        questionData.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    return generatePage(questionData); 
  })
  .then(pageReadme => {
    return writeFile(pageReadme);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
   })
  .catch(err => {
    console.log(err);
  });