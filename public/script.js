const toggler = document.querySelector('#nav-toggle');
const nav = document.querySelector('nav ul');
const body = document.querySelector('body');
toggler.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    toggler.classList.toggle('show');
    body.classList.toggle('show');
})