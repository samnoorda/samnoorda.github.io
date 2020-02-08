/* Wednesday, 20 May 2020 Format */

let date = new Date();
let fullDate;

let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let day = date.getDate();
let year = date.getFullYear();


fullDate = daysOfWeek[date.getDay()] + ", " + day + " " + month[date.getMonth()] + " " + year;
document.querySelector("#curDate").textContent = fullDate;
// document.getElementById("curDate").innerHTML = fullDate;

let pday = new Date();
let aside = document.querySelector('aside');
if (pday.getDay() === 5) {
    aside.style.display = "block";
}
else {
    aside.style.display = "none";
}

function toggle(){
    document.getElementsByClassName("flex")[0].classList.toggle("resp");
    document.getElementsByClassName("weather-summary")[0].classList.toggle("respon");
}

document.querySelector('#curtemp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';