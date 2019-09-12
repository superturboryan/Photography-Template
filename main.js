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
// initialize
// navHeadroom.init();


///////////////////////////////////
// DO THINGS WHEN PAGE IS LOADED...
window.onload = function () {

   var title = document.getElementById('title');

   if (window.pageYOffset > 500) {
      //HIDE THE TITLE WHEN PAGE LOADS IF ALREADY SCROLLED DOWN
      title.classList.add("opacity-zero");
   }
}


///////////////////////////////////
// DO THINGS WHEN PAGE OFFSET IS...
window.onscroll = function () {

   var title = document.getElementById('title');

   if (window.pageYOffset > 500) {
      title.classList.add("opacity-zero");
   } else {
      title.classList.remove("opacity-zero");
   }

   var titleOutline = this.document.getElementById('title-outline')

   if (window.pageYOffset > 384) {
      titleOutline.classList.add('camera-cursor');
   } else {
      titleOutline.classList.remove('camera-cursor');
   }

   var navTitle = document.getElementById('nav-title')

   if (window.pageYOffset > 489) {
      navTitle.classList.add("opacity-zero");
   } else {
      navTitle.classList.remove("opacity-zero");
   }

   this.console.log(window.pageYOffset)
}

// ScrollReveal({ reset: true })
// ScrollReveal().reveal('img', { delay: 0, duration: 300, easing: 'ease-in-out', reset: true })
ScrollReveal().reveal('footer', { delay: 400, duration: 1000, easing: 'ease-in-out', reset: true })

