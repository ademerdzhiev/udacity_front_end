const navbarButton = document.querySelector(".navbar-button");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
const navbarActiveMenu = document.querySelector(".navbar ul li a")
navbarButton.addEventListener("click", navbarButtonClick);

function navbarButtonClick() {
  navbarButton.classList.toggle("open-navbar-button");
  navbarMenu.classList.toggle("open");
}

function activeSectionScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetPostion = document.querySelector(targetId).offsetTop;
  let scrollPostion = body.scrollTop;
  console.log(scrollPosition)
  if (scrollPostion >= targetPostion) {
    activeSection;
  }
}
navbarActiveMenu('scroll', activeSectionScroll);

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
  navbarLinks[i].addEventListener("scroll", activeSectionScroll);
}

function navbarLinkClick(event) {

  smoothScroll(event); // Call the "smoothScroll" function

  if(navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
    navbarButton.click();
  }

}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  });
}

function activeSection () {
  navbarActiveMenu.classList.toggle("active");
}


// if (position >= target) {
//          $('#navigation > ul > li > a').removeClass('active');
//          $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
//      }
