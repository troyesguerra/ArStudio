const hamburger = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container')

hamburger.addEventListener('click', () => {
    container.classList.toggle('change')
})

// Scroll Buton Functionality

const scrollButton = document.querySelector('.scroll-btn');
scrollButton.addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
    }, 1000)
})