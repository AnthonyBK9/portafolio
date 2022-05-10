const btnMenu = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    // if ( navMenu.classList.contains('nav_menu-visible') ) {
    //     navMenu.classList.remove('nav_menu-visible');
    // } else {
    //     navMenu.classList.add('nav_menu-visible');
    // }

    navMenu.classList.toggle('nav_menu-visible');
}

