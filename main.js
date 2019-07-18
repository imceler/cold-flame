const button = document.getElementById('menu') 
const menu = document.querySelector('.toggle-menu')
const instagram = document.querySelector('.contact-link.instagram')
const twitter = document.querySelector('.contact-link.twitter')
const facebook = document.querySelector('.contact-link.facebook')
const youtube = document.querySelector('.contact-link.youtube')

button.addEventListener("click", () => {
    menu.classList.toggle("is-active"), 
    instagram.classList.toggle("is-active"),
    twitter.classList.toggle("is-active"),
    facebook.classList.toggle("is-active"),
    youtube.classList.toggle("is-active")
})
