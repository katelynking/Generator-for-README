// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateRM = ({ creator, title, motivation, purpose, tools, utilization, contribution, code, test, github, link, email, license}) =>
    `# ${title}
## Description
The motivation of this project was ${motivation}.

This project solves the issue of ${purpose}.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

<a name="installation"></a>
## Installation 

This project requires the following: ${tools}

The following code will be necessary to utilize this project:

\`\`\` ${code} \`\`\`
<a name="usage"></a>
## Usage 
Link to deployed application: [${title}](${link})

${utilization}


<a name="license"></a>
## License 

${license}
MIT License
    
  Copyright (c) 2022 ${creator}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "${title}"), to deal in the software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  <a name="contributing"></a>
  ## Contributing
  
  Created by [${creator}](https://github.com/${github})
  
  If you would like to contribute to this project, you can do so by ${contribution}.

  <a name="test"></a>
  ## Tests
  ${test}
 

  <a name="questions"></a>
  ## Questions
  For any questions, please do not hesitate to contact me via [email](${email}) or [GitHub](https://github.com/${github}) !
`;


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
        message: 'What was the motivation behind this project?',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project?',
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
        message: 'Please enter your GitHub name: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you would like to include in your README.md.',
        choices: ['MIT license', 'Other']
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
