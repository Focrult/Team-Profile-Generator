const inquirer = require('inquirer');
const fs = require('fs');
const HTMLFinal = require('./src/generatedHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const TeamArrayInfo = []; 
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
        type: 'number',
        name: 'id',
        message: 'Enter your id',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        },
        {
        type: 'number',
        name: 'OfficeNumber',
        message: 'Enter your office number',
        },
    ]).then((info) => {
        const managerInfo = new Manager(info.name, info.id, info.email, info.OfficeNumber);
        TeamArrayInfo.push(managerInfo); 
        roles(); //activate roles function
     
    })
]
}
function reviewAnswer(){
    roles();

}
function roles() {
//activating prompts for the user to select - roles
const rolesprompt = [
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role would you like to select?',
            choices: ['Intern', 'Engineer', 'Done!'],
            name: 'roles'
        }
    ]).then(({roles}) => { 
        if(roles === 'Intern'){
            //prompt for the user to select
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your intern: ',
                },
                {
                    type: 'number',
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
            ]).then((info) => {
                const internInfo = new Intern(info.name, info.id, info.email, info.school);
                TeamArrayInfo.push(internInfo);//push into an array
                reviewAnswer();
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
                    type: 'number',
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
            ]).then((info) => { //push into an array
                const engineerInfo = new Engineer(info.name, info.id, info.email, info.github);
                TeamArrayInfo.push(engineerInfo); 
                reviewAnswer();
            })
        }
        else{
        const completed = HTMLFinal(TeamArrayInfo); //pass the array to the html generator
        console.log(TeamArrayInfo)
            fs.writeFile('./dist/index.html', completed, err => { //write the file
                if(err) throw err;
                console.log('logged!')
            });
        }
    })
]
}