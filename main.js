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

   let title = document.getElementById('title');

   if (window.pageYOffset > 500) {
      title.classList.add("opacity-zero");
   } else {
      title.classList.remove("opacity-zero");
   }

   let titleOutline = this.document.getElementById('title-outline')

   if (window.pageYOffset > 384) {
      titleOutline.classList.add('camera-cursor');
   } else {
      titleOutline.classList.remove('camera-cursor');
   }

   let navTitle = document.querySelector('.nav-title')

   // if (window.pageYOffset < 466) {
   //    navTitle.classList.add('opacity-zero')
   //    // console.log("Hiding nav title above first img")
   // }
   if (window.pageYOffset > 466 && window.pageYOffset < 1362) {
      navTitle.classList.remove('opacity-zero')
      navTitle.innerHTML = "Keeping Direction by Good Method"
      // console.log("Showing Keeping Direction by Good Method")
   }
   else if (window.pageYOffset > 1362 && window.pageYOffset < 1472) {
      navTitle.classList.add('opacity-zero')
      navTitle.innerHTML = "..."
      // console.log("Hiding nav title")
   }
   else if (window.pageYOffset > 1472 && window.pageYOffset < 2211) {
      navTitle.classList.remove('opacity-zero')
      navTitle.innerHTML = "The Montreal Metro Project"
      // console.log("Showing The Montreal Metro Project")
   }
   // else {
   //    navTitle.classList.add('opacity-zero')
   //    // console.log("Hiding nav title")
   // }

   console.log("Y: " + window.pageYOffset)

}

let imgContainer = document.querySelector(".detail-img-container")

let i = 1

imgContainer.addEventListener('scroll', (e) => {

   let offsetX = imgContainer.scrollLeft;

   console.log("X: " + offsetX)

   let imgOverlay = document.querySelector(".img-overlay")

   // if (i % 2 == 0) 
   imgOverlay.style.left = (offsetX * 1.7) + 340 + "px";

   i++
}, true)

const revealDetailsView = (imgNumber) => {

   hideHomepage(imgNumber)
   lockScrolling()
   setNavbarTitle(imgNumber)

   setTimeout(() => {
      window.scrollTo(0, 0)
   }, 900)

   const detailView = document.querySelector(".detail-view")

   setTimeout(() => {
      detailView.classList.add("fade-in-up")
      console.log("Details view sliding in!")
   }, 700)

}

const setNavbarTitle = imgNumber => {
   let navbarTitle = document.querySelector(".nav-title")

   if (imgNumber == 1) {
      navbarTitle.innerHTML = "Keeping Direction by Good Method"
   }
   else if (imgNumber == 2) {
      navbarTitle.innerHTML = "The Montreal Metro Project"
   }

   navbarTitle.classList.remove("white-text")
   navbarTitle.classList.remove("opacity-zero")
   navbarTitle.classList.add("black-text")
}

const clearNavbarTitle = () => {
   let navbarTitle = document.querySelector(".nav-title")
   navbarTitle.classList.remove("black-text")
   navbarTitle.innerHTML = "..."
}

const hideDetailView = (hiddenImg) => {
   const detailView = document.querySelector(".detail-view")
   detailView.classList.remove("fade-in-up")
   console.log("Detail view hidden!")

   setTimeout(() => {
      unlockScrolling()
      showHomepage(hiddenImg)
   }, 500)
}

let hiddenImg = 0

const hideHomepage = (imgNumber) => {
   let title = document.getElementById('title')
   title.classList.add('hidden')

   let img = document.getElementById(`img${imgNumber}`)

   hiddenImg = imgNumber

   setTimeout(() => {
      img.classList.add('hidden')
      console.log("Homepage hidden!")
   }, 200)

}

const showHomepage = (hiddenImg) => {
   let title = document.getElementById('title')
   title.classList.remove('hidden')
   console.log(hiddenImg)
   let img = document.getElementById(`img${hiddenImg}`)
   img.classList.remove('hidden')

   clearNavbarTitle()

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

