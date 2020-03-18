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

let f, t, s;
t = 43;
s = 15;

// if (t <= 50 && s >= 3) {
//     f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
//     document.querySelector('#wind-chill').innerHTML = f.toFixed() + '&deg;';
// } else {
//     // f = 'N/A';
//     // document.querySelector('#wind-chill').innerHTML = f;
//     // document.querySelector('#divwind').style.display = 'none';
//     f = t;
//     document.querySelector('#wind-chill').innerHTML = f.toFixed() + '&deg;';
// }

// document.querySelector('#curtemp').innerHTML = t + '&deg;';
// document.querySelector('#wind-speed').innerHTML = s + 'mph';
// document.querySelector('#humidity').innerHTML = '10&percnt;';

/* Font Loader */
WebFont.load({
    google: {
      families: [
         'Quicksand',
         'Libre Baskerville'
      ]
    }
  });

function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
}



fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then (result => {
        return result.json();
    })
    .then (resultJSON => {
        let towns = resultJSON.towns
        
        towns.forEach(
            town => {
                if (town.name === 'Fish Haven') {
                    document.querySelector('#h1fish').textContent = town.name;
                    document.querySelector('#mottofish').textContent = town.motto;
                    document.querySelector('#yearfish').textContent = town.yearFounded;
                    document.querySelector('#popfish').textContent = town.currentPopulation;
                    document.querySelector('#rainfish').textContent = town.averageRainfall;
                    document.querySelector('#imgfish').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#imgfish').setAttribute('alt', town.name);

                } else if (town.name === 'Preston') {
                    document.querySelector('#h1pres').textContent = town.name;
                    document.querySelector('#mottopres').textContent = town.motto;
                    document.querySelector('#yearpres').textContent = town.yearFounded;
                    document.querySelector('#poppres').textContent = town.currentPopulation;
                    document.querySelector('#rainpres').textContent = town.averageRainfall;
                    document.querySelector('#imgpres').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#imgpres').setAttribute('alt', town.name);
                    
                } else if (town.name === 'Soda Springs') {
                    document.querySelector('#h1soda').textContent = town.name;
                    document.querySelector('#mottosoda').textContent = town.motto;
                    document.querySelector('#yearsoda').textContent = town.yearFounded;
                    document.querySelector('#popsoda').textContent = town.currentPopulation;
                    document.querySelector('#rainsoda').textContent = town.averageRainfall;
                    document.querySelector('#imgsoda').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#imgsoda').setAttribute('alt', town.name);
                }

            }
        );
    });
