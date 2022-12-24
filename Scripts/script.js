let hamburgerElement = document.querySelector('.hamburger');
hamburgerElement.addEventListener('click', menuItems);

let navBar = document.getElementById('nav-menu');

function menuItems() {
    hamburgerElement.classList.toggle('is-active');
    // document.body.style.display = 'none';
    navBar.classList.toggle('is-clicked');
    document.body.classList.toggle('is-scroll');
}


let clickAboutMe = document.getElementById('About-me-link');
clickAboutMe.addEventListener('click', () => {
    navBar.classList.remove('is-clicked');
    hamburgerElement.classList.remove('is-active');
    document.body.classList.remove('is-scroll');
})


let clickContactMe = document.getElementById('contact-me-link');
clickContactMe.addEventListener('click', () => {
    navBar.classList.remove('is-clicked');
    hamburgerElement.classList.remove('is-active');
    document.body.classList.remove('is-scroll');
})



// var nameInput = document.getElementById('name');
// var emailInput = document.getElementById('mailme');
// var messageBox = document.getElementById('Message');
// var formElement = document.querySelector('form');

// formElement.addEventListener('submit', (event) => {
//     formElement.reset();
// })