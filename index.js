const inquirer = require('inquirer');
const fs = require('fs');
const generatedHTML = require('./src/generatedHTML');
// const TeamArrayInfo = require('./src/generatedHTML');  //file used to apply teamArray to the html
//TEAM MANAGER

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const TeamArrayInfo = []; //reference to previous lesson
FirstManager();

function FirstManager() {
const TeamManager = [ //should initiate first!
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Enter your name',
        },
        {
        type: 'input',
        name: 'id',
        message: 'Enter your id',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number',
        },
    ]).then(Info => {
        const managerInfo = new Manager(Info.name, Info.id, Info.email, Info.OfficeNumber);
        TeamArrayInfo.push(managerInfo); //removed this. <- didn't work
        roles(); //activate roles function
     
    })
]
}
function roles() {
//activating prompts for the user to select - roles
const roles = [
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role would you like to select?',
            choices: ["Intern", "Engineer", "Done!"],
            name: 'roles'
        }
    ]).then(({roles}) => {
        // const selected = {roles};
        if(roles === "Intern"){
            //prompt for the user to select
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your intern: ',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter the id for your intern: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email of your intern: ',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school is your intern from?: ',
                },
            ]).then(Info => {
                const internInfo = new Intern(Info.name, Info.id, Info.email, Info.school);
                TeamArrayInfo.push(internInfo);//push into an array?
                return inquirer.prompt(roles);
    //create a return for prompts?
            })
        }
        else if(roles === "Engineer"){
             //prompt for the user to select
             inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your engineer: ',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter the id for your engineer: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email of your engineer: ',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter the github for your engineer: ',
                },
            ]).then(Info => { //push into an array?
                const engineerInfo = new Engineer(Info.name, Info.email, Info.github, info.id);
                TeamArrayInfo.push(engineerInfo); 
                return inquirer.prompt(roles);
            })
        }
        else{
        const completed = generatedHTML(teamArray); //pass the array to the html generator
            fs.writeFile('./dist/index.html', completed, 'utf8');
        }
    })
]
}