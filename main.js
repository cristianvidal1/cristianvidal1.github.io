'use strict'

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.trabajos-cards', { delay: 500});
ScrollReveal().reveal('.trabajos-cards-banner', { delay: 500});
ScrollReveal().reveal('.ultimo-banner', { delay: 500});

document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});

//JS DEL GO UP
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}
document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});