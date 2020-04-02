
function toggle(){
    document.getElementsByClassName("flex")[0].classList.toggle("resp");
}

/* Font Loader */
WebFont.load({
    google: {
      families: [
         'Nanum Gothic',
         'Vollkorn'
      ]
    }
  });

  function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
}