const sections = document.querySelectorAll("section");
const navbar = document.querySelector('#navbar-ul');

//function for dynamic building of the navigation menu
function buildNavbar() {
  const elementLi = document.createDocumentFragment();
  for (const section of sections) {
    let navbarItem = document.createElement('li');
    const id = section.getAttribute('id');
    const dataNav = section.getElementsByTagName("h1")[0].innerHTML;
    navbarItem.innerHTML = `<a href="#${id}">${dataNav}</a>`;
    elementLi.appendChild(navbarItem);
  }

  navbar.appendChild(elementLi);
}

buildNavbar();//calling the navigation menu build function

const navbarButton = document.querySelector(".navbar-button");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarButton.addEventListener("click", navbarButtonClick);

function navbarButtonClick() {
  // navbarButton.classList.toggle("open-navbar-button");
  navbarMenu.classList.toggle("open");
}

//CODE FOR SMOOTH SCROLL SECTION
for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

  smoothScroll(event); // Call the "smoothScroll" function

  if(navbarMenu.classList.contains("open")) { //navbar menu closes in smaller screens
    navbarButton.click();
  }
}

function smoothScroll(event) {
  event.preventDefault();

  let targetId = event.currentTarget.getAttribute("href");

  if (targetId === "#" ) {
    targetId = "header";
  } else {
    targetId = event.currentTarget.getAttribute("href");
    console.log(targetId);
  }

  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth"
  });
}

//CODE FOR ACTIVE SCROLL SECTION
//boolean function testing whether an element is in the viewport or not
function isInViewport(element) {
  const position = element.getBoundingClientRect();
  if (position.top <= 100 && position.left >= 0 && position.bottom >= 90 &&
  position.right <= (window.innerWidth ||
    document.documentElement.clientWidth)) {
    return true;
  } else {
    return false;
  }
}

// adding event listener to the scroll into sections
document.addEventListener('scroll', function activeSection() {
  for (const section of sections) {

    if (isInViewport(section)) {

      for (link of navbarLinks) {
        if (link.getAttribute('href') == ('#' + section.getAttribute('id'))) {
          link.classList.add('active');
        }
      }
    } else {
      for (link of navbarLinks) {
        if (link.getAttribute('href') == ('#' + section.getAttribute('id'))) {
            link.classList.remove('active');
        }
      }
    }
  }
});
