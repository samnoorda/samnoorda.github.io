fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);

            const address = response[0].Streetline1 + "<br>" + response[0].Streetline2 + "<br>" + response[0].Country;
            document.querySelector('#temple1name').textContent = response[0].Temple;
            document.querySelector('#address1').innerHTML = address;
            document.querySelector('#phone1').textContent = response[0].Telephone;
            document.querySelector('#email1').textContent = response[0].Email;
        

            response[0].Services.forEach(
                service => {
                    document.querySelector('#service1').innerHTML += 
                        `<li>${ service }</li>`;
                }
            )
            response[0].History.forEach(
                milestone => {
                    document.querySelector('#history1').innerHTML += 
                        `<li>${ milestone }</li>`;
                }
            )
            response[0].Schedule.forEach(
                schedules => {
                    document.querySelector('#schedule1').innerHTML += 
                        `<li>${ schedules }</li>`;
                }
            )
            response[0].Closures.forEach(
                closed => {
                    document.querySelector('#closure1').innerHTML += 
                        `<li>${ closed }</li>`;
                }
            )
            document.querySelector('#image1').setAttribute('src', response[0].Image);
            document.querySelector('#image1').setAttribute('alt', response[0].Temple);
        }
    )
    var apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=2661552&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

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