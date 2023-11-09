/*====================MENU HAMBURGUESA OPEN, CLOSE===================*/ 

document.querySelector(".bars__menu").addEventListener("click", animeteBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".menu");


function animeteBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("menu__active");
}

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');


menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        container__menu.classList.remove("menu__active");
        
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
    })

})

/*=========================== ACTIVE SECTION ======================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


/*========================= SCROLL REVELD ============================ */

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.logo',{delay:200, origin:'bottom'});
sr.reveal('.icons',{delay:200, origin:'right'});
sr.reveal('.scroll-down',{delay:200, origin:'right'});
sr.reveal('.darkgraff',{delay:200, origin:'bottom'});

