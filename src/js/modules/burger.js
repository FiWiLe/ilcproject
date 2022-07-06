// Burger menu

const menuIcon = document.querySelector('.menu__icon');

if (menuIcon) {
    const menuBody = document.querySelector('.menu__body');

    menuIcon.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    });

    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach((link) => {
        link.addEventListener('click', function () {
            document.body.classList.toggle('_lock');
            menuIcon.classList.toggle('menu__icon_active');
            menuBody.classList.toggle('menu__body_active');
        });
    });
}