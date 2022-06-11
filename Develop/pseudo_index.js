// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateRM = ({ creator, title, motivation, purpose, tools, solution, code, github, link}) =>
    `# ${title}
## Description
The motivation of this project was ${motivation}.

This project solves the issue of ${purpose}.


## Table of Contents


## Installation

This project requires the following: ${tools}

The following code will be necessary to utilize this project:

\`\`\` ${code} \`\`\`

## Usage 

Link to deployed application: [${title}](${link})

## License 

MIT License
    
  Copyright (c) 2022 ${creator}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "${title}"), to deal in the software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  ## Contributing
  
  [${creator}](https://github.com/${github})

  ## Tests
  
  
  ## Questions
`;


const questions = [
    {
        type: 'input',
        name: 'creator',
        message: 'Who is the creator of this project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation behind this project?',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does it solve?',
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
        message: 'Please enter the link to the project: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub name: ',
    }
];


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateRM(answers);
            fs.writeFile('README.md', readmeContent, (err) => err 
            ? console.log(err) 
            : console.log('Successfully created new README.md!'));
        });
};

init();


// ## Usage

// ![${altText}](${imagePath})