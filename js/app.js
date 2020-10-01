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
 * 
 */
const navbar = document.getElementById("navbar__list");

//select all sections
const sections = document.querySelectorAll('section');
const button = document.getElementById("button");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNavBar() {
    let sectioninfo = '';

    //add each section to the navigation bar
    sections.forEach(section => {
        let sectionId = section.id;
        let sectionData = section.dataset.nav;
        sectioninfo += `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionData}</a></li>`;
    });
    navbar.innerHTML = sectioninfo;
}
buildNavBar();


// Add class 'active' to section when near top of viewport
function active() {
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        } else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");

        }
    });
}
document.addEventListener('scroll', function() {
    active();
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
 */

function scroll() {

    window.onscroll = function() {
        if (window.scrollTop() <= 20) {
            if (button.css("display") != "none") {
                button.slideUp("normal");
            }
        } else {
            if (button.css("display") == "none") {
                button.slideDown("normal");
            }
        }
    }
}
button.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});