const hamburger = document.querySelector('.hamburger');
const search = document.querySelector('.search');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    search.classList.toggle('active');
})