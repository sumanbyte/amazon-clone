var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide')

const totalSlides = slides.length-1;

var index =0;
var interval;

nextSlide.onclick = function(){
    
    next('next');
}

prevSlide.onclick = function(){
    
    next('prev');
}

let images = ['banner-img-1.jpg', 'banner-img-2.jpg', 'banner-img-3.jpg', 'banner-img-4.jpg', 'banner-img-5.jpg'];
let image = document.querySelector('.slider-item img');




let idx = 0;
function changeSlide(){
    if(idx == 5){
        idx=0;
    }else{
        image.src = `./assets/img/${images[idx]}`;
        idx++;
    }
}

setInterval(changeSlide, 5000)




function next(direction){
    if(direction == 'next'){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }else{
        if(index==0){
            index = totalSlides -1;
        }else{
            index--;
        }
    }
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active')
}