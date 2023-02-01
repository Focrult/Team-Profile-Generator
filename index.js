const inquirer = require('inquirer');

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
    ]).then(pushInfo => {
        const managerInfo = new Manager();
        this.TeamArrayInfo.push(managerInfo);
        this.roles();
    })
]

//activating prompts for the user to select - roles
const roles = [
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What role would you like to select?',
            choices: ["Intern", "Engineer", "Done!"],
            name: 'roles'
        }
    ]).then(({roles}) => {
        const selected = {roles};
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
            ]).then(pushInfo => {
                const internInfo = new Intern();
                this.TeamArrayInfo.push(internInfo);//push into an array?
    
            })
        }
        //write to html?

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
            ]).then(pushInfo => { //push into an array?
                const engineerInfo = new Engineer();
                this.TeamArrayInfo.push(engineerInfo);
    
            })
        }
        else if(roles === "Done!"){
            generatedHTML(teamArray); //pass the array to the html generator
        }
    })
]