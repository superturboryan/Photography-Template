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

const revealDetailsView = () => {

   hideHomepage()
   lockScrolling()

   window.scrollTo(0, 0)

   const detailView = document.querySelector(".detail-view")

   setTimeout(() => {
      detailView.classList.add("left-zero")
      console.log("Details view sliding in!")
   }, 700)

}

const hideDetailView = () => {
   const detailView = document.querySelector(".detail-view")
   detailView.classList.remove("left-zero")
   console.log("Detail view hidden!")

   setTimeout(() => {
      unlockScrolling()
      showHomepage()
   }, 500)
}

const hideHomepage = () => {
   let homepage = document.getElementById("homepage")
   homepage.classList.add('hidden')
   console.log("Homepage hidden!")
}

const showHomepage = () => {
   let homepage = document.getElementById("homepage")
   homepage.classList.remove('hidden')
   console.log("Showing homepage!")
}

const lockScrolling = () => {
   const body = document.getElementById('body')
   body.classList.add("overflow-hidden")
}

const unlockScrolling = () => {
   const body = document.getElementById('body')
   body.classList.remove("overflow-hidden")
}

// ScrollReveal({ reset: true })
// ScrollReveal().reveal('img', { delay: 0, duration: 300, easing: 'ease-in-out', reset: true })
ScrollReveal().reveal('footer', { delay: 400, duration: 1000, easing: 'ease-in-out', reset: true })

