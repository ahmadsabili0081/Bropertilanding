window.addEventListener('scroll', function(){
    const btns = document.querySelector('.btn-angle');
    btns.classList.toggle('btnsh', window.scrollY > 400);
});

function up(){
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = "0";
}
