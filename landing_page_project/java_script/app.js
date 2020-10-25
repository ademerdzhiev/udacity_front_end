function scroll(element) {
  let elementQ = document.querySelector(element);
  let elementPosition = elementQ.getBoundingClientRect().top;
  window.scrollTo({
  top: elementPosition,
  left: 0,
  behavior: 'smooth'
  });
}

//SCROLL TO THE ABOUT SECTION
let aboutSection = document.querySelector('#about');
aboutSection.addEventListener('click', function() {
  scroll('.about');
});

//SCROLL TO THE WORK SECTION
let workSection = document.querySelector('#work');
workSection.addEventListener('click', function() {
  scroll('.work');
});

//SCROLL TO THE INSPIRATIONS SECTION
let inspirationsSection = document.querySelector('#inspirations');
inspirationsSection.addEventListener('click', function() {
  scroll('.inspirations')
});


//SCROLL TO THE CONTACTS SECTION
let contactsSection = document.querySelector('#contacts');
contactsSection.addEventListener('click', function() {
  scroll('.contacts');
});

// function scroll(element, duration) {
//   let elementQ = document.querySelector(element);
//   let elementPosition = elementQ.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset;
//   // let distance = elementPositionTop - startPosition;
//   let navbarQ = document.querySelector('#header-h');
//   let navbarH = navbarQ.offsetHeight;
//   let startTime =  null;
//
//   let targetPosition = elementPosition - 2*navbarH;
//
//   function animation(currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }
//
//     let elapsedTime = currentTime - startTime;
//     let run = easeFunc(elapsedTime, startPosition, targetPosition, duration);
//     window.scrollTo(0, run);
//
//     if (elapsedTime < duration) {
//       requestAnimationFrame(animation);
//     }
//   }
//
//   function easeFunc(elapsedTime, startPosition, targetPosition, duration) {
// 	   elapsedTime /= duration;
// 	   return elementPosition*elapsedTime*elapsedTime + startPosition;
//   }
//
//   requestAnimationFrame(animation);
// }
//
