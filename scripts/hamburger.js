const hamburger = document.getElementsByClassName('hamburger--icon')[0]
const navLinks = document.getElementsByClassName('nav__links')[0]
console.log(navLinks)
hamburger.onclick = (() => {
    navLinks.classList.toggle('nav__links--visible');  
})