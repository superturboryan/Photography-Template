///////////////////////
// HEADROOM BASIC SETUP
var navBar = document.querySelector(".navbar");

const navOptions = {
   offset: 50,
   tolerance: {
      up: 5,
      down: 0
   }
}

var navHeadroom = new Headroom(navBar, navOptions);
// initialise
navHeadroom.init();

/////////////////////
// DO THINGS WHEN PAGE OFFSET IS...
window.onscroll = function () {
   var title = document.getElementById('title');
   if (window.pageYOffset > 346) {
      title.classList.add("opacity-zero");
   } else {
      title.classList.remove("opacity-zero");
   }

   this.console.log(window.pageYOffset)
}



// top 403