
let menuToggle = document.getElementById('menu-toggle');
let navContainer = document.querySelector('.nav-container');
let dropDown = document.querySelectorAll('.dropdown');

menuToggle.addEventListener("click", () => {
    navContainer.classList.toggle('active')

    if(navContainer.classList.contains('active')) {

        menuToggle.src = '../images/icon-close.svg'
        document.querySelector('nav').style.display = "block";
    }
    else {

        menuToggle.src = '../images/icon-hamburger.svg'
        document.querySelector('nav').style.display = "none"

    }
});

