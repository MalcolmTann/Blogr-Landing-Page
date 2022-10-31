
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



// toggle desktop images
let lightArrow = document.querySelectorAll('.arrow');
let editorDesktop = document.getElementById('editor');
let laptopDesktop = document.getElementById('laptop');

function showDesktopImages() {

    lightArrow.forEach(function (lightArrow) {

        if(window.innerWidth >= 992) {
            lightArrow.src = '../images/icon-arrow-light.svg'
            editorDesktop.src = '../images/illustration-editor-desktop.svg'
            laptopDesktop.src = '../images/illustration-laptop-desktop.svg'
        }
        else {
            lightArrow.src = '../images/icon-arrow-dark.svg'
            editorDesktop.src = '../images/illustration-editor-mobile.svg'
            laptopDesktop.src = '../images/illustration-laptop-mobile.svg'
        }
    });
}
showDesktopImages();
window.addEventListener('resize', showDesktopImages);