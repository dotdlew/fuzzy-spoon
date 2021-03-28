// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// prompt for user info - github username, github profile, email address
const promptUser = () => {
    return inquirer
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
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
promptUser();