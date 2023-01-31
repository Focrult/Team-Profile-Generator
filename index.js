const inquirer = require('inquirer');

//html markup?

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
        const transfer = JNBVBIHJSBV(selected);
        console.log(transfer);
        //write to html?
    })
]