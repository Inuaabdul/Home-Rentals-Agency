const hamburger = document.querySelector('.ham')
const nav = document.querySelector('nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})
