const themeBtn = document.getElementById('themes')
const themeMenu = document.querySelector('.themes-menu')
const cssSheet = document.getElementById('css')
const menuLink = document.querySelectorAll('.menu-link')


const themeOptionDark = document.querySelector('#dark')
const themeOptionLight = document.querySelector('#light')
const themeOptionNeon = document.querySelector('#neon')
const themeOptionConfetti = document.querySelector('#confetti')

const userTheme = localStorage.getItem('user_theme') || './darktheme.css'

cssSheet.href = userTheme

themeBtn.addEventListener('click', () => {
    themeMenu.classList.toggle('open')
})

themeOptionDark.addEventListener('click', () => {
    cssSheet.href = "./darktheme.css"
    themeMenu.classList.toggle('open')
    localStorage.setItem('user_theme', './darktheme.css')
})

themeOptionLight.addEventListener('click', () => {
    cssSheet.href = "./lighttheme.css"
    themeMenu.classList.remove('open')
    localStorage.setItem('user_theme', './lighttheme.css')
})

themeOptionNeon.addEventListener('click', () => {
    cssSheet.href = "./neontheme.css"
    themeMenu.classList.remove('open')
    localStorage.setItem('user_theme', './neontheme.css')
})

themeOptionConfetti.addEventListener('click', () => {
    cssSheet.href = "./confettitheme.css"
    themeMenu.classList.remove('open')
    localStorage.setItem('user_theme', './confettitheme.css')
})

// alert('This page is still under construction and does not represent a finished product.')
