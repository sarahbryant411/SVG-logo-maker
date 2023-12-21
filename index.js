const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const questions = [{
    type: 'input',
    message: "What letters would you like in your logo?",
    name: 'letters',
},
{
    type: 'input',
    message: "What text color do you want the logo text to be?",
    name: 'fontColor',
},
{
    type: 'list',
    message: "Please select your logo shape.",
    name: 'shape',
    choices: ['square', 'circle', 'triangle'],
},
{
    type: 'input',
    message: "What color would you like your logo shape to be?",
    name: 'shapeColor',
}
];

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
        });
}

// function call to initialize program
init();