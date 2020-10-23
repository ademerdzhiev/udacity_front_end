function scroll(element, duration) {
  let elementQ = document.querySelector(element);
  let elementPositionTop = elementQ.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = elementPositionTop - startPosition;
  let startTime =  null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    let elapsedTime = currentTime - startTime;
    let run = easeFunc(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, run - 100);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeFunc(t, b, c, d) {
	   t /= d;
	   return c*t*t + b;
  }

  requestAnimationFrame(animation);
}

let workButton = document.querySelector('#work-button')
// let workSection = document.querySelector('#work-section');

workButton.addEventListener('click', function() {
  scroll('.work', 1000);
});
