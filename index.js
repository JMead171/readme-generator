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
        message: 'What licenses do you have with this project? (Select one)',
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
    console.log(questionData.license);
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