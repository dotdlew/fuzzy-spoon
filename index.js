const { writeFile } = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

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
            },
            {
                type: 'confirm',
                name: 'confirmUser',
                message: 'confirm user?',
                default: true
            }
        ]);
}

const promptProject = projectData => {
    console.log('prompt for project data')
    inquirer
        .prompt([
            {
                // enter a project title
                type: 'input',
                name: 'name',
                message: 'enter a project title'
            },
            {
                // enter a description
                type: 'input',
                name: 'description',
                message: 'enter a description'
            },
            {
                // enter installation instructions
                type: 'input',
                name: 'installation',
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
                name: 'contribution',
                message: 'enter contribution guidelines'
            },
            {
                // enter test instructions
                type: 'input',
                name: 'test',
                message: 'enter test instructions'
            },
            {
                // choose a license for my application from a list of options
                type: 'checkbox',
                name: 'licenseType',
                message: 'choose a license',
                choices: ['1', '2', '3']
            },
            {
                type: 'confirm',
                name: 'confirmProj',
                message: 'confirm project?',
                default: true
            }
        ])
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
promptUser()
    .then(promptProject);