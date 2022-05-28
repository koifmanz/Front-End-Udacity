/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/

const navBar = document.getElementsByClassName("navbar_menu")[0];
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 */

/**
 * Begin Main Functions
*/

function buildNavBar() {

    // the tree of the navbar: 
    // header (exist) -> nav (exist) -> ul (created) -> li  (created) -> a (created)

    // create the ul element to hold the nav items
    //should be the same as: <ul class="navbar_menu_list navbar__menu"></ul>
    const nav_area_list = document.createElement("ul");
    nav_area_list.classList.add("navbar_menu_list");
    nav_area_list.classList.add("navbar__menu");
    navBar.appendChild(nav_area_list);

    // the nav bar is built from the sections array
    // the array is the sections of the site
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionId = section.getAttribute("id");
        const navItem = document.createElement("li");
        const linkItem = document.createElement('a');

        // update class names for li and a
        linkItem.innerText = sections[i].querySelector('h2').textContent;

        linkItem.setAttribute("href", "#" + sectionId);
        linkItem.setAttribute("class", "menu__link");
        navItem.classList.add("sections[i].id");
        navItem.classList.add("navbar__menu");

        // add the nav item to the nav bar with the title text and attributes to style
        navItem.appendChild(linkItem);
        nav_area_list.appendChild(navItem);
    };
}


// check if section in in viewport
// if it is, add class to section
// if not, remove class from section
function sectionInViewPort() {
    for (const section of sections) {
        let rect = section.getBoundingClientRect();
        const in_viewpiort = rect.top >= 0 && rect.left >= 0
            && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        if (in_viewpiort) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

/**
 * End Main Functions
 */

/**
 * Begin Events
*/

// build the nav bar
buildNavBar();

// update scroll behavior to smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// if section in viewport and update the section class
document.addEventListener('scroll', sectionInViewPort);

/**
 * End Events
*/
