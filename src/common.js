const closebar = document.querySelector(".burger-swg");
const burger = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".navbar-collapse");
const main = document.querySelector("main");


// Scroll

const headerH = document.querySelector('.header').getBoundingClientRect().height;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let currentHref = this.getAttribute('href'),
            currentAnchor = document.getElementById(currentHref.substring(1)),
            currentAnchorT = currentAnchor.getBoundingClientRect().top;
        window.scrollTo({
            top: currentAnchorT - headerH + window.scrollY,
            behavior: 'smooth'
        });
        closebar.classList.remove("close"); // close nav-bar
        nav.classList.remove("show");
    });
});

// button "Close"

burger.addEventListener("click", () => { //  burger  =>  close-icon
    closebar.classList.toggle("close");
});

main.addEventListener("touchstart", () => {
    closebar.classList.remove("close"); // touch or click => close nav-bar
    nav.classList.remove("show");
});

// Validate

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()