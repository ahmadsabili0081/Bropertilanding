var prevscroll = window.pageYOffset;
window.onscroll = function(){
    var scrollsaatini = window.pageYOffset;
    if(prevscroll > scrollsaatini){
        document.getElementById('header').style.top="0";
        document.getElementById('header').style.backgroundColor="#0F1837";
        document.getElementById('header').style.padding="2px 0%";
        document.getElementById('hamburger').style.display="flex";
    }else{
        document.getElementById('header').style.top="-100px";
    }
    prevscroll = scrollsaatini;
}