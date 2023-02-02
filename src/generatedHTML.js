const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


    const managerInfo = (manager) => { //HTML for the Manager
        return`
        <div class="grid mb-10">
            <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-4">
                <div class="card-body bg-blue-600 h-1/4">
                    <h5 class="card-title text-lg font-medium text-white">${manager.name}</h5>
                    <h6 class="card-title text-lg font-medium text-white">Manager</h6>
                </div>
                <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                    <div class="border-slate-600 border border-solid bg-white">ID: ${manager.id}</div>
                    <div class="border-slate-600 border bg-white">Email: <a href="${manager.email}" class="text-blue-600 dark:text-blue-500 underline">${manager.email}</a></div>
                    <div class="border-slate-600 border bg-white">Office number: ${manager.officeNumber}</div>
                </div>
            </div>
        </div>
        `;
    }

    const engineerInfo =(engineer) => {//HTML for the Engineer
         return`
        <div class="grid mb-10">
            <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-">
                <div class="card-body bg-blue-600 h-1/4">
                    <h5 class="card-title text-lg font-medium text-white">${engineer.name}</h5>
                    <h6 class="card-title text-lg font-medium text-white">Engineer</h6>
                </div>
                <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                    <div class="border-slate-600 border border-solid bg-white">ID: ${engineer.id}</div>
                    <div class="border-slate-600 border bg-white">Email: <a href="${engineer.email}" class="text-blue-600 dark:text-blue-500 underline">${engineer.email}</a></div>
                    <div class="border-slate-600 border bg-white ">Github: <a href="https://github.com/${engineer.github}" class="text-blue-600 dark:text-blue-500 underline"> ${engineer.github} </a></div>
                </div>
            </div>
        </div>
        `;
    }

const internInfo = (intern) => { //HTML for the intern
    return`
    <div class="grid mb-10">
        <div class="card drop-shadow-xl w-52 bg-gray-300 h-60 rounded-sm mb-4">
            <div class="card-body bg-blue-600 h-1/4">
            <h5 class="card-title text-lg font-medium text-white">${intern.name}</h5>
            <h6 class="card-title text-lg font-medium text-white">Intern</h6>
        </div>
            <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
                <div class="border-slate-600 border border-solid bg-white">ID: ${intern.id}</div>
                <div class="border-slate-600 border bg-white">Email: <a href="${intern.email}" class="text-blue-600 dark:text-blue-500 underline">${intern.email}</a></div>
                <div class="border-slate-600 border bg-white">School: ${intern.school}</div>
            </div>
        </div>
    </div>`
}
 //end of completed team

//HTMLsetup and ready to be populated with team members
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
    const sampleArray = []; //Empty array
    teamArray.forEach(teamMember => { //Loop through the array of each team members
        switch(teamMember.getRole()){
            //call each function to get information about team members and push result to the empty array
            case 'Manager':  
            sampleArray.push(managerInfo(new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.officeNumber)))
            break;
            case 'Engineer':
            sampleArray.push(engineerInfo(new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github)))
            break;
            case 'Intern':
            sampleArray.push(internInfo(new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school)));
            break;
            default:
            break;
        }
    })
    console.log(sampleArray)
    return sampleArray.join(''); //join all the elements within the array into a single string
}

module.exports = HTMLsetup;
