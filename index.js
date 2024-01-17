const inquirer = require('inquirer');
const fs = require('fs');
const {LogoText, Shape, SVG} = require('./svgLogo/svg.js');


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
            const logoText = new LogoText(response.letters, response.fontColor);
            const shape = new Shape(response.shape, response.shapeColor);
            const svg = new SVG(logoText.render(), shape.render());
            console.log(svg.render());
            fs.writeFile('logo.svg', svg.render(), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
}

// function call to initialize program
init();