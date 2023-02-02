const manager = require('../lib/Manager');
const engineer = require('../lib/Engineer');
const intern = require('../lib/Intern');


    const managerInfo = (manager) => { //make sure manager is an array
        return`
        <div class="grid mb-10">
            <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-4">
                <div class="card-body bg-blue-600 h-1/4">
                    <h5 class="card-title text-lg font-medium text-white">${manager.name}</h5>
                    <h6 class="card-title text-lg font-medium text-white">Manager</h6>
                </div>
                <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                    <div class="border-slate-600 border border-solid bg-white">ID: ${manager.id}</div>
                    <div class="border-slate-600 border bg-white">Email: ${manager.email}</div>
                    <div class="border-slate-600 border bg-white">Office number: ${manager.officeNumber}</div>
                </div>
            </div>
        </div>
        `;
    }

    const engineerInfo =(engineer) => {
         return`
        <div class="grid mb-10">
            <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-">
                <div class="card-body bg-blue-600 h-1/4">
                    <h5 class="card-title text-lg font-medium text-white">${engineer.name}</h5>
                    <h6 class="card-title text-lg font-medium text-white">Engineer</h6>
                </div>
                <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                    <div class="border-slate-600 border border-solid bg-white">ID: ${engineer.id}</div>
                    <div class="border-slate-600 border bg-white">Email: ${engineer.email}</div>
                    <div class="border-slate-600 border bg-white">Github: ${engineer.github}</div>
                </div>
            </div>
        </div>
        `;
    }

const internInfo = (intern) => {
    return`
    <div class="grid mb-10">
        <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-4">
            <div class="card-body bg-blue-600 h-1/4">
            <h5 class="card-title text-lg font-medium text-white">${intern.name}</h5>
            <h6 class="card-title text-lg font-medium text-white">Intern</h6>
        </div>
            <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                <div class="border-slate-600 border border-solid bg-white">ID: ${intern.id}</div>
                <div class="border-slate-600 border bg-white">Email: ${intern.email}</div>
                <div class="border-slate-600 border bg-white">School: ${intern.school}</div>
            </div>
        </div>
    </div>`
}
 //end of completed team

//html basic layout ready for completed team input
const HTMLsetup = (data) => 
    `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
    <body>
        <nav class="flex px-2 h-40 sm:px-4 py-2.5 bg-red-500 w-full border-b text-white font-medium text-3xl justify-center">My Team</nav>
            <div class="grid place-items-center grid-cols-3 justify-center gap-1 text-center mt-20">
            ${MyTeamGenerator(data)}
            </div>
    </body>
</html>
`;

//I HAVE TO RENDER!
const MyTeamGenerator = teamArray => {
    const sampleArray = [];
    teamArray.forEach(teamMember => {
        switch(teamMember.getRole()){
            case 'Manager':
            sampleArray.push(managerInfo(new manager(teamMember.name, teamMember.id, teamMember.email, teamMember.officeNumber)))
            break;
            case 'Engineer':
            sampleArray.push(engineerInfo(new engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github)))
            break;
            case 'Intern':
            sampleArray.push(internInfo(new intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school)));
            break;
            default:
            break;
        }
    })
    console.log(sampleArray)
    return sampleArray.join('');
}

module.exports = HTMLsetup;
