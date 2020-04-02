//Bern Temple 
fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            
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
    // var apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=2661552&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

    // fetch(apiURLWeather)
    //   .then((response) => response.json())
    //   .then((jsObject) => {
    //     document.querySelector('#currently').textContent = jsObject.weather[0].main;
    //     document.querySelector('#windchill').textContent = jsObject.main.feels_like;
    //     document.querySelector('#high').textContent = jsObject.main.temp_max;
    //     document.querySelector('#humidity').textContent = jsObject.main.humidity;
    //     document.querySelector('#windspeed').textContent = jsObject.wind.speed;
    
    //     let weatherIcon = document.querySelector('#weather-icon');
    //     let image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    //     let alt = jsObject.weather[0].description;
    //     weatherIcon.setAttribute('src', image);
    //     weatherIcon.setAttribute('alt', alt);
    //   });
    
    
    
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

//End of Bern Temple

// San Diego Temple 

fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

            const address = response[1].Streetline1 + "<br>" + response[1].City + ", " + response[1].State + " " + response[1].Zip + "<br>" + response[1].Country;
            document.querySelector('#temple2name').textContent = response[1].Temple;
            document.querySelector('#address2').innerHTML = address;
            document.querySelector('#phone2').textContent = response[1].Telephone;
            document.querySelector('#email2').textContent = response[1].Email;
        

            response[1].Services.forEach(
                service => {
                    document.querySelector('#service2').innerHTML += 
                        `<li>${ service }</li>`;
                }
            )
            response[1].History.forEach(
                milestone => {
                    document.querySelector('#history2').innerHTML += 
                        `<li>${ milestone }</li>`;
                }
            )
            response[1].Schedule.forEach(
                schedules => {
                    document.querySelector('#schedule2').innerHTML += 
                        `<li>${ schedules }</li>`;
                }
            )
            response[1].Closures.forEach(
                closed => {
                    document.querySelector('#closure2').innerHTML += 
                        `<li>${ closed }</li>`;
                }
            )
            document.querySelector('#image2').setAttribute('src', response[0].Image);
            document.querySelector('#image2').setAttribute('alt', response[0].Temple);
        }
    )
    // var apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

    // fetch(apiURLWeather)
    //   .then((response) => response.json())
    //   .then((jsObject) => {
    //     document.querySelector('#currently2').textContent = jsObject.weather[0].main;
    //     document.querySelector('#windchill2').textContent = jsObject.main.feels_like;
    //     document.querySelector('#high2').textContent = jsObject.main.temp_max;
    //     document.querySelector('#humidity2').textContent = jsObject.main.humidity;
    //     document.querySelector('#windspeed2').textContent = jsObject.wind.speed;
    
    //     let weatherIcon = document.querySelector('#weather-icon');
    //     let image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    //     let alt = jsObject.weather[0].description;
    //     weatherIcon.setAttribute('src', image);
    //     weatherIcon.setAttribute('alt', alt);
    //   });
    
    //End Of San Diego Temple

    //Logan Temple 

fetch('json/temples.json')
.then(response => response.json())
.then(
    response => {
        
        const address = response[2].Streetline1 + "<br>" + response[2].City + ", " + response[2].State + " " + response[2].Zip + "<br>" + response[2].Country;
        document.querySelector('#temple3name').textContent = response[2].Temple;
        document.querySelector('#address3').innerHTML = address;
        document.querySelector('#phone3').textContent = response[2].Telephone;
        document.querySelector('#email3').textContent = response[2].Email;
    

        response[2].Services.forEach(
            service => {
                document.querySelector('#service3').innerHTML += 
                    `<li>${ service }</li>`;
            }
        )
        response[2].History.forEach(
            milestone => {
                document.querySelector('#history3').innerHTML += 
                    `<li>${ milestone }</li>`;
            }
        )
        response[2].Schedule.forEach(
            schedules => {
                document.querySelector('#schedule3').innerHTML += 
                    `<li>${ schedules }</li>`;
            }
        )
        response[2].Closures.forEach(
            closed => {
                document.querySelector('#closure3').innerHTML += 
                    `<li>${ closed }</li>`;
            }
        )
        document.querySelector('#image3').setAttribute('src', response[2].Image);
        document.querySelector('#image3').setAttribute('alt', response[2].Temple);
    }
)
// var apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5777544&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

// fetch(apiURLWeather)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     document.querySelector('#currently3').textContent = jsObject.weather[0].main;
//     document.querySelector('#windchill3').textContent = jsObject.main.feels_like;
//     document.querySelector('#high3').textContent = jsObject.main.temp_max;
//     document.querySelector('#humidity3').textContent = jsObject.main.humidity;
//     document.querySelector('#windspeed3').textContent = jsObject.wind.speed;

//     let weatherIcon = document.querySelector('#weather-icon');
//     let image = 'https://openweathermap.org/img/w/' + jsObject.weather[2].icon + '.png';
//     let alt = jsObject.weather[0].description;
//     weatherIcon.setAttribute('src', image);
//     weatherIcon.setAttribute('alt', alt);
//   });

//End of Logan Temple

//Nauvoo Temple

fetch('json/temples.json')
.then(response => response.json())
.then(
    response => {

        const address = response[3].Streetline1 + "<br>" + response[3].City + ", " + response[3].State + " " + response[3].Zip + "<br>" + response[3].Country;
        document.querySelector('#temple4name').textContent = response[3].Temple;
        document.querySelector('#address4').innerHTML = address;
        document.querySelector('#phone4').textContent = response[3].Telephone;
        document.querySelector('#email4').textContent = response[3].Email;
    

        response[3].Services.forEach(
            service => {
                document.querySelector('#service4').innerHTML += 
                    `<li>${ service }</li>`;
            }
        )
        response[3].History.forEach(
            milestone => {
                document.querySelector('#history4').innerHTML += 
                    `<li>${ milestone }</li>`;
            }
        )
        response[3].Schedule.forEach(
            schedules => {
                document.querySelector('#schedule4').innerHTML += 
                    `<li>${ schedules }</li>`;
            }
        )
        response[3].Closures.forEach(
            closed => {
                document.querySelector('#closure4').innerHTML += 
                    `<li>${ closed }</li>`;
            }
        )
        document.querySelector('#image4').setAttribute('src', response[3].Image);
        document.querySelector('#image4').setAttribute('alt', response[3].Temple);
    }
)
// var apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=4903330&appid=9e1d40f84b91347947411168e8eeb562&units=imperial';

// fetch(apiURLWeather)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     document.querySelector('#currently4').textContent = jsObject.weather[0].main;
//     document.querySelector('#windchill4').textContent = jsObject.main.feels_like;
//     document.querySelector('#high4').textContent = jsObject.main.temp_max;
//     document.querySelector('#humidity4').textContent = jsObject.main.humidity;
//     document.querySelector('#windspeed4').textContent = jsObject.wind.speed;

//     let weatherIcon = document.querySelector('#weather-icon');
//     let image = 'https://openweathermap.org/img/w/' + jsObject.weather[3].icon + '.png';
//     let alt = jsObject.weather[0].description;
//     weatherIcon.setAttribute('src', image);
//     weatherIcon.setAttribute('alt', alt);
//   });

//End of Nauvoo Temple