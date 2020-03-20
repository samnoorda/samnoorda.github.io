let pday = new Date();
let aside = document.querySelector('aside');
if (pday.getDay() === 5) {
    aside.style.display = "block";
}
else {
    aside.style.display = "none";
}


const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

fetch(apiURLWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#currently').textContent = jsObject.weather[0].main;
    document.querySelector('#windchill').textContent = jsObject.main.feels_like;
    document.querySelector('#high').textContent = jsObject.main.temp_max;
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;

    let weatherIcon = document.querySelector('#weather-icon');
    let image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    let alt = jsObject.weather[0].description;
    weatherIcon.setAttribute('src', image);
    weatherIcon.setAttribute('alt', alt);
  });



const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const apiURLForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9e1d40f84b91347947411168e8eeb562&units=imperial'

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let counter = 1;
    jsObject.list.forEach(
      forecast => {
        if (forecast.dt_txt.includes('18:00')) {
          let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
          let dayofweek = days[forecastDate.getDay()];
          document.querySelector(`#day${counter}`).textContent = dayofweek;
          document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg;';
          let weatherIcon = document.getElementById(`icon${counter}`);
          let image = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
          let alt = forecast.weather[0].description;
          weatherIcon.setAttribute('src', image);
          weatherIcon.setAttribute('alt', alt);
                    
          counter++;
        }
      }
    );
  });

// fetch('https://byui-cit230.github.io/weather/data/towndata.json')
//   .then(result => result.json())
//   .then(
//     (result) => {
//       const preston = result.towns[0];

//       preston.events.forEach(
//         event => {
//           let li = document.createElement('li');
//           li.textContent = event;

//           document.querySelector('#events').appendChild(li);
//         }
//       )
//     }
//   );
function getEvents(cityName) {
  fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(result => result.json())
  .then(
    (result) => {
      result.towns.forEach(
        (town) => {
          if (town.name.toLowerCase() === cityName.toLowerCase()) {
            town.events.forEach(
              event => {
                let li = document.createElement('li');
                li.textContent = event;

                document.querySelector('#events').appendChild(li);
              }
            )
          }
        }
      )
        }
      )
    }


  // fetch(apiURL)
  // .then((response) => response.json())
  // .then((jsObject) => {
  //   let currenttemp = jsObject.main.temp;
  //   let windspeed = jsObject.wind.speed;
  //   let windchill = 0;

  //   if (currenttemp <= 50 && windspeed >= 3) {
  //     windchill = 35.74 + 0.6215 * currenttemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * currenttemp * Math.pow(windspeed, 0.16);
  //     document.querySelector('#windchill').innerHTML = windchill.toFixed() + '&deg;';
  // } else {
  //     // f = 'N/A';
  //     // document.querySelector('#wind-chill').innerHTML = f;
  //     // document.querySelector('#divwind').style.display = 'none';
  //     windchill = currenttemp;
  //     document.querySelector('#windchill').innerHTML = currenttemp.toFixed() + '&deg;';
  //     document.querySelector('#currently').textContent = jsObject.weather[0].main;
  //   // document.querySelector('#windchill').textContent = jsObject.main.feels_like;
  //     document.querySelector('#high').textContent = jsObject.main.temp_max;
  //     document.querySelector('#humidity').textContent = jsObject.main.humidity;
  //     document.querySelector('#windspeed').textContent = jsObject.wind.speed;
  // }
  // }