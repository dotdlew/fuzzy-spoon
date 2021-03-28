// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            {
                // Installation
            },
            {
                // Usage
            },
            {
                // Contributing
            },
            {
                // Tests
            }
        ]);
};
// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
promptUser();