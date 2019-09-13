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

   if (window.pageYOffset < 466) {
      navTitle.classList.add('opacity-zero')
      console.log("Hiding nav title above first img")
   }
   else if (window.pageYOffset > 466 && window.pageYOffset < 1362) {
      navTitle.classList.remove('opacity-zero')
      navTitle.innerHTML = "Keeping Direction by Good Method"
      console.log("Showing Keeping Direction by Good Method")
   }
   else if (window.pageYOffset > 1362 && window.pageYOffset < 1472) {
      navTitle.classList.add('opacity-zero')
      navTitle.innerHTML = "..."
      console.log("Hiding nav title")
   }
   else if (window.pageYOffset > 1472 && window.pageYOffset < 2211) {
      navTitle.classList.remove('opacity-zero')
      navTitle.innerHTML = "The Montreal Metro Project"
      console.log("Showing The Montreal Metro Project")
   }
   else {
      navTitle.classList.add('opacity-zero')
      console.log("Hiding nav title")
   }

   this.console.log(window.pageYOffset)
}

const revealDetailsView = () => {

   hideHomepage()
   lockScrolling()

   window.scrollTo(0, 0)

   const detailView = document.querySelector(".detail-view")

   setTimeout(() => {
      detailView.classList.add("fade-in-up")
      console.log("Details view sliding in!")
   }, 700)

}

// SCROLL EFFECT REVEAL COLLECTION TITLE IN NAV DO IT !!!

const hideDetailView = () => {
   const detailView = document.querySelector(".detail-view")
   detailView.classList.remove("fade-in-up")
   console.log("Detail view hidden!")

   setTimeout(() => {
      unlockScrolling()
      showHomepage()
   }, 500)
}

const hideHomepage = () => {
   let title = document.getElementById('title')
   title.classList.add('hidden')

   let img1 = document.getElementById("img1")
   let img2 = document.getElementById("img2")
   let img3 = document.getElementById("img3")
   let img4 = document.getElementById("img4")
   setTimeout(() => {
      img1.classList.add('hidden')
      img2.classList.add('hidden')
      img3.classList.add('hidden')
      img4.classList.add('hidden')
      console.log("Homepage hidden!")
   }, 300)

}

const showHomepage = () => {
   let title = document.getElementById('title')
   title.classList.remove('hidden')
   let img1 = document.getElementById("img1")
   let img2 = document.getElementById("img2")
   let img3 = document.getElementById("img3")
   let img4 = document.getElementById("img4")
   img1.classList.remove('hidden')
   img2.classList.remove('hidden')
   img3.classList.remove('hidden')
   img4.classList.remove('hidden')

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

