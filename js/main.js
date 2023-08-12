const headerBar=document.querySelector('.header-bar')
const overlay=document.querySelector('.header-overlay')
const buttonHeader = document.querySelector('.button-header')

headerBar.addEventListener('click', ()=>{
    overlay.classList.toggle('show-overlay')
    buttonHeader.classList.toggle('show-menu')

})
overlay.addEventListener('click', ()=>{
    overlay.classList.remove('show-overlay')
    buttonHeader.classList.remove('show-menu')

})

