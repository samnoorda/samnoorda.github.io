const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    let weatherIcon = document.querySelector('#weather-icon');
    let image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    let alt = jsObject.weather[0].description;
    weatherIcon.setAttribute('src', image);
    weatherIcon.setAttribute('alt', alt);
  });

