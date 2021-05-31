const nav = document.querySelector('.menu-hamburguer button');
const open = document.querySelector('.main-container');
const modal = document.querySelector('.menu-mobile');
const close = document.querySelector('.main-container');

nav.addEventListener("click", e =>{
    nav.classList.toggle('open');
});

open.addEventListener("click", () =>{
    modal.classList.toggle('modal-navbar');
});