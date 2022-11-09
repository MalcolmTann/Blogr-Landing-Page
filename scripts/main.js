
// mobile nav
const burger = document.getElementById('burger-toggle');
const navContainer = document.querySelector('.nav-container');

// Toggle desktop content
const lightArrow = document.querySelectorAll('.arrow-light-js');
const desktopNav = document.querySelector('.header-expand-js');
const editorDesktop = document.getElementById('editor-desktop-js');
const laptopDesktop = document.getElementById('laptop-desktop-js');

// Toggle menu
burger.addEventListener('click', () => {
    navContainer.classList.toggle('active')

    if(navContainer.classList.contains('active')) {

        burger.src = '../images/icon-close.svg'
        document.querySelector('nav').style.display = 'block';

        // Mobile Menu Dropdown
        document.querySelectorAll('.dropdown').forEach(i => {

            i.addEventListener('click', (e) => {
                i.getElementsByTagName('ul')[0].classList.toggle('show');
            })
        });
    }
    else {
        burger.src = '../images/icon-hamburger.svg'
        document.querySelector('nav').style.display = 'none';
    }
});


// Show/Hide content on window resize
function showDesktopContent() {

    if(matchMedia('(min-width: 992px)').matches) {

        desktopNav.style.display = 'block';
        editorDesktop.src = '../images/illustration-editor-desktop.svg'
        laptopDesktop.src = '../images/illustration-laptop-desktop.svg'
    }
    else {
        desktopNav.style.display = 'none';
        burger.src = '../images/icon-hamburger.svg'
        editorDesktop.src = '../images/illustration-editor-mobile.svg'
        laptopDesktop.src = '../images/illustration-laptop-mobile.svg'
    }
}

function showDesktopContentV2(){
    showDesktopContent();

    matchMedia('(min-width: 992px)').addEventListener('change', () => {
        showDesktopContent();
    });
}

showDesktopContentV2();