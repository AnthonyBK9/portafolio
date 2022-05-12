const btnMenu = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.nav_menu-link');

btnMenu.addEventListener('click', toggleMenu);
function toggleMenu() {
    // if ( navMenu.classList.contains('nav_menu-visible') ) {
    //     navMenu.classList.remove('nav_menu-visible');
    // } else {
    //     navMenu.classList.add('nav_menu-visible');
    // }
    navMenu.classList.toggle('nav_menu-visible');
}

const functionObserver = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const itemActive = Array.from(menuItems).find(item => item.dataset.url === entry.target.id);
            itemActive.classList.add('nav_menu-link_active');
            for (const item of menuItems) {
                if(item != itemActive) {
                    item.classList.remove('nav_menu-link_active');
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
})

sections.forEach(seccion => {
    observer.observe(seccion);
});

