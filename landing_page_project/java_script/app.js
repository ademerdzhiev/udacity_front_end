const navbarButton = document.querySelector(".navbar-button");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarButton.addEventListener("click", navbarButtonClick);

function navbarButtonClick() {
  navbarButton.classList.toggle("open-navbar-button");
  navbarMenu.classList.toggle("open");
}

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
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
