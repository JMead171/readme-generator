const inquirer = require('inquirer');

// array of questions for user
//const questions = [

const promptQuestions = projectData => {
    // If there's no 'questions' array property, create one
    if (!projectData.questions) {
        projectData.questions = [];
    }
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
        choices: ['MIT', 'BSD', 'GPL']
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
    .then(projectData => {
        portfolioData.questions.push(projectData);
        return portfolioData;
    })
};
 
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
//init();
promptQuestions()
  .then(portfolioData => {
    return generatePage(portfolioData); 
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
   })
  .catch(err => {
    console.log(err);
  });