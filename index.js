
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
   
    {
        type: 'input',
        name: 'creator',
        message: 'Please enter the name of the creator of this project:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'The motivation of this project was to:',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'This project solves the issue of:',
    },
    {
        type: 'input',
        name: 'tools',
        message: 'What is needed for this project to be properly executed?',
    },
    {
        type: 'input',
        name: 'code',
        message: 'What coding needs to be installed?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter the link to the project:',
    },
    {
        type: 'input',
        name: 'utilization',
        message: 'Please provide step by step details on how to utilize this project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If one would like to contribute to this project, they can do so by:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub name:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you would like to include in your README.md.',
        choices: ['BSD', 'MIT', 'GNU']
    }
    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        } else {
            return 'Successfully created new README.md!';
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README-new.md', data, (err) => err
                ? console.log(err)
                : console.log('Successfully created new README.md!'));
        });
};

init();
