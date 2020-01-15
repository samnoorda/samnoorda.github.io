let myName = 'Sam Noorda';
let currentDate = new Date();
console.log(currentDate);

let currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;

var lastMod = document.lastModified;
console.log(lastMod);

document.getElementById("lastMod").innerHTML = lastMod