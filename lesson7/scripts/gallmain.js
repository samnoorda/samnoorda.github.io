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


/* Font Loader */
WebFont.load({
    google: {
      families: [
         'Quicksand',
         'Libre Baskerville'
      ]
    }
  });

  let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}