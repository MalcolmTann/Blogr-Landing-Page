// Set variables
// mobile nav
const burger = document.getElementById('burger-toggle');
const navContainer = document.querySelector('.nav-container');

// Toggle desktop content
const desktopNav = document.querySelector('.header-expand-js');
const editorDesktop = document.getElementById('editor-desktop-js');
const laptopDesktop = document.getElementById('laptop-desktop-js');

// Toggle menu on event (Mobile only)
burger.addEventListener('click', () => {
    navContainer.classList.toggle('active')

    // if the burger menu contains the class of 'active'
    if(navContainer.classList.contains('active')) {

        // do this...
        // show the navbar and change the burger into an X
        burger.src = './images/icon-close.svg'
        document.querySelector('nav').style.display = 'block';

        // Toggle the secondary menu dropdown
        document.querySelectorAll('.dropdown').forEach(i => {

            // show the secondary menu on event click
            i.addEventListener('click', (e) => {
                i.getElementsByTagName('ul')[0].classList.toggle('show');
            })
        });
    }
    // if the burger doesn't contain the class of active, keep it as default
    else {
        burger.src = './images/icon-hamburger.svg'
        document.querySelector('nav').style.display = 'none';
    }
});


// change content based on viewport width
function changeContent() {

    // use these assets when the viewport is/matches 992px or >
    if(matchMedia('(min-width: 992px)').matches) {

        desktopNav.style.display = 'block';
        editorDesktop.src = 'images/illustration-editor-desktop.svg'
        laptopDesktop.src = 'images/illustration-laptop-desktop.svg'
    }
    // if not 992px or <, use these assets instead
    else {
        desktopNav.style.display = 'none';
        burger.src = 'images/icon-hamburger.svg'
        editorDesktop.src = 'images/illustration-editor-mobile.svg'
        laptopDesktop.src = 'images/illustration-laptop-mobile.svg'
    }
}

// change the content when viewport is 992px above
function showDesktopContent(){
    changeContent();

    // when the viewport hits 992px, eventListener will call changeContent()
    matchMedia('(min-width: 992px)').addEventListener('change', () => {
        changeContent();
    });
}

// call the function 
showDesktopContent();