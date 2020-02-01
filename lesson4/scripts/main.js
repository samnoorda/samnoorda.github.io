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


function toggle(){
    document.getElementsByClassName("flex")[0].classList.toggle("resp");
}