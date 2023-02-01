const inquirer = require('inquirer');
const generatedHTML = require('./src/generatedHTML.js');
const TeamArrayInfo = require('./src/generatedHTML');  //file used to apply teamArray to the html
//TEAM MANAGER

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
        const managerInfo = new Manager(Info.name, Info.id, Info.email, Info.officeNumber);
        this.TeamArrayInfo.push(managerInfo);
        this.roles();
    })
]

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
        const selected = {roles};
        if(selected === "Intern"){
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
                this.TeamArrayInfo.push(internInfo);//push into an array?
                return inquirer.prompt(roles);
    //create a return for prompts?
            })
        }
        //write to html?

        else if(selected === "Engineer"){
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
                this.TeamArrayInfo.push(engineerInfo);
                return inquirer.prompt(roles);
            })
        }
        else if(selected === "Done!"){
            generatedHTML(teamArray); //pass the array to the html generator
        }
    })
]