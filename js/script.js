'use strict';

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

document
    .querySelector('.main-nav-list')
    .addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('main-nav-link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
    });

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
document.querySelector('.smooth').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('smooth')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});


//menu animation
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click',()=>{

    let menu = document.querySelector('#menu-mobile');
    let main = document.querySelector('main')

    if (menu.classList.contains('hiden')){
        menu.classList.add('show');
        menu.classList.remove('hiden');
        main.classList.add('menu-ativado')
        main.classList.remove('menu-desativado')
    } else {
        menu.classList.add('hiden');
        menu.classList.remove('show');
        menu.classList.remove('menu-ativado')
        main.classList.add('menu-desativado')
    }
})