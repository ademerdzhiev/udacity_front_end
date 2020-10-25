function scroll(element, duration) {
  let elementQ = document.querySelector(element);
  let elementPosition = elementQ.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  // let distance = elementPositionTop - startPosition;
  let navbarQ = document.querySelector('#header-h');
  let navbarH = navbarQ.offsetHeight;
  let startTime =  null;

  let targetPosition = elementPosition - navbarH;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    let elapsedTime = currentTime - startTime;
    let run = easeFunc(elapsedTime, startPosition, targetPosition, duration);
    window.scrollTo(0, run);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeFunc(elapsedTime, startPosition, elementPosition, duration) {
	   elapsedTime /= duration;
	   return elementPosition*elapsedTime*elapsedTime + startPosition;
  }

  requestAnimationFrame(animation);
}


//SCROLL TO THE ABOUT SECTION
let aboutSection = document.querySelector('#about');
aboutSection.addEventListener('click', function() {
  scroll('.about', 300);
});

//SCROLL TO THE WORK SECTION
let workSection = document.querySelector('#work');
workSection.addEventListener('click', function() {
  scroll('.work', 300);
});

//SCROLL TO THE INSPIRATIONS SECTION
let inspirationsSection = document.querySelector('#inspirations');
inspirationsSection.addEventListener('click', function() {
  scroll('.inspirations', 300);
});

//SCROLL TO THE CONTACTS SECTION
let contactsSection = document.querySelector('#contacts');
contactsSection.addEventListener('click', function() {
  scroll('.contacts', 300);
});

//STICKY NAVBAR
// let navbar = document.getElementById('navbar');
// let sticky = navbar.offsetTop;
//
// function stickyNavBar() {
//   navbar.classList.add("sticky")
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
//
// window.onscroll = function() {
//   stickyNavBar();
// }
