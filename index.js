const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// prompt for user info - github username, github profile, email address
function promptUser() {
    console.log('prompt for user data');

    return inquirer
        .prompt([
            {
                // enter a GitHub username
                type: 'input',
                name: 'githubUsername',
                message: 'enter a GitHub username'
            },
            {
                // enter an email address
                type: 'input',
                name: 'emailAddress',
                message: 'enter an email address'
            }
        ]);
}

const promptProject = projectData => {
    console.log('prompt for project data')
    // If there's no 'projects' array property, create one
    if (!projectData.projects) {
        projectData.projects = [];
    }

    return inquirer
        .prompt([
            {
                // enter a project title
                type: 'input',
                name: 'title',
                message: 'enter a project title'
            },
            {
                // enter a description
                type: 'input',
                name: 'descr',
                message: 'enter a description'
            },
            {
                // enter installation instructions
                type: 'input',
                name: 'insta',
                message: 'enter installation instructions'
            },
            {
                // enter usage information
                type: 'input',
                name: 'usage',
                message: 'enter usage information'
            },
            {
                // enter contribution guidelines
                type: 'input',
                name: 'contr',
                message: 'enter contribution guidelines'
            },
            {
                // enter test instructions
                type: 'input',
                name: 'tests',
                message: 'enter test instructions'
            },
            {
                // choose a license for my application from a list of options
                type: 'checkbox',
                name: 'licen',
                message: 'choose a license',
                choices: ['1', '2', '3']
            },
            {
                type: 'confirm',
                name: 'confi',
                message: 'confirm project?',
                default: true
            }
        ])
        .then(data => {
            if (data.confi) {
                console.log(data);
                projectData.projects.push(data);
            } else {
                return promptProject();
            }
        });
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
promptUser()
    .then(promptProject)
    .then(projectData => {
        markdown.generatePage(projectData);
    })
    .catch(err => {
        console.log(err);
    });
