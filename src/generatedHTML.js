const manager = require('./lib/Manager.js');
const enginner = require('./lib/Enginner.js');
const intern = require('./lib/Intern.js');

const managerInfo = () => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${manager.Name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Manager</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${manager.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${manager.email}</div>
            <div class="border-slate-600 border bg-white">Office number: ${manager.OfficeNumber}</div>
        </div>
    </div>
</div>`
}
const engineerInfo = () => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${engineer.Name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Engineer</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${engineer.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${engineer.email}</div>
            <div class="border-slate-600 border bg-white">Github: ${engineer.github}</div>
        </div>
    </div>
</div>`
}
const internInfo = () => {`
<div class="grid">
    <div class="card drop-shadow-xl w-48 bg-gray-300 h-56 rounded-sm">
        <div class="card-body bg-blue-600 h-1/4">
        <h5 class="card-title text-lg font-medium text-white">${intern.Name}</h5>
        <h6 class="card-title text-lg font-medium text-white">Intern</h6>
    </div>
        <div class="pt-10 place-items-center pl-3 pr-3 col-cols-1 ">
            <div class="border-slate-600 border border-solid bg-white">ID: ${intern.id}</div>
            <div class="border-slate-600 border bg-white">Email: ${intern.email}</div>
            <div class="border-slate-600 border bg-white">Github: ${intern.github}</div>
        </div>
    </div>
</div>`
}