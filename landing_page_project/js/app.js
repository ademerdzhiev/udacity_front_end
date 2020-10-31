const sections = document.querySelectorAll("section");
const navbar = document.querySelector('#navbar-ul');

//function for dynamic building of the navigation menu
function buildNavbar() {
  const elementLi = document.createDocumentFragment();
  for (const section of sections) {
    let navbarItem = document.createElement('li');
    const id = section.getAttribute('id');
    const dataNav = section.getElementsByTagName("h1")[0].innerHTML;
    navbarItem.innerHTML = `<a class="nav-item" href="#${id}">${dataNav}</a>`;
    elementLi.appendChild(navbarItem);
  }
  navbar.appendChild(elementLi);

  for (navbarLink of document.querySelectorAll(".navbar a")) {
    navbarLink.addEventListener("click", navbarLinkClick);
  }
}

buildNavbar();//calling the navigation menu build function

const navbarLinks = document.querySelectorAll(".navbar a");
const sectionClasses = document.querySelectorAll('.container h2');
console.log(sectionClasses);
//CODE FOR SMOOTH SCROLL SECTION
function navbarLinkClick(event) {
  smoothScroll(event);
}


function smoothScroll(event) {
  event.preventDefault();

  let targetId = event.currentTarget.getAttribute("href");
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
      section.querySelector('.container h2').classList.add('active');
      for (link of navbarLinks) {
        if (link.getAttribute('href') == ('#' + section.getAttribute('id'))) {
          link.classList.add('active');
        }
      }
    } else {
      section.querySelector('.container h2').classList.remove('active');
      for (link of navbarLinks) {
        if (link.getAttribute('href') == ('#' + section.getAttribute('id'))) {
            link.classList.remove('active');
        }
      }
    }
  }
});
