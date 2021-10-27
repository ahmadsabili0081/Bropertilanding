var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('slide');
    hamburger.classList.toggle('rotate');
})