const manager = require('../lib/Manager');
const engineer = require('../lib/Engineer');
const intern = require('../lib/Intern');

const completedTeam = () => {

const managerInfo = (manager => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${manager.name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Manager</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${manager.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${manager.email}</div>
            <div class="border-slate-600 border bg-white">Office number: ${manager.OfficeNumber}</div>
        </div>
    </div>
</div>`
}).join('')
const engineerInfo = (engineer => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${engineer.name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Engineer</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${engineer.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${engineer.email}</div>
            <div class="border-slate-600 border bg-white">Github: ${engineer.Github}</div>
        </div>
    </div>
</div>`
}).join('');
const internInfo = (intern => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${intern.name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Intern</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${intern.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${intern.email}</div>
            <div class="border-slate-600 border bg-white">Github: ${intern.Github}</div>
        </div>
    </div>
</div>`
}).join('');
} //end of completed team



//html basic layout ready for completed team input
const HTMLsetup =  () => `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
    <body>
        <nav class="flex px-2 h-40 sm:px-4 py-2.5 bg-red-500 w-full border-b text-white font-medium text-3xl justify-center align-middle">My Team</nav>
            <div class="grid place-items-center grid-cols-3 justify-center gap-1 text-center mt-20">
            ${completedTeam}
            </div>
    </body>
</html>
`

module.exports = HTMLsetup;