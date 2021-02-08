
//Make slider vh resize to fit the screen
// $(function (){
//     'use strict';
//     // Adjust Silder Height
//     var winH   = $(window).height(),
//         upperH = $('.upperBar').innerHeight(),
//         navH   = $('.navbar').innerHeight();
//     $('.silder').height(winH - (upperH + navH));
//   });
 /*
 const fitSlider = ()=> {
     let winH = window.outerHeight,
         upperH = document.querySelector('.upperBar').clientHeight,
         navH = document.querySelector('.navbar').clientHeight,
         sliderH = document.querySelector('.slider').clientHeight;

         console.log(sliderH);
console.log(navH);
console.log(upperH);
console.log(winH);
sliderH= winH-(upperH+navH);
return;
 };
 fitSlider();*/

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const isElementInViewPort= (element, className)=> $(window).scroll(function() {
    let topElement = $(element).offset().top,
        bottomElement = $(element).offset().top + $(element).outerHeight(),
        bottomScreen = $(window).scrollTop() + $(window).innerHeight(),
        topScreen = $(window).scrollTop();

    if ((bottomScreen > topElement) && (topScreen < bottomElement)){
        $(element).addClass('animate__animated '+ className);
    } 
});

isElementInViewPort('.menCard', 'animate__fadeInLeft');
isElementInViewPort('.womenCard', 'animate__fadeInRight');
isElementInViewPort('#sec5Text', 'animate__fadeInLeft');


/******** DEV FUNCTIONS TO REUSE ********/
/*
1- Function to check if the element appears on the view port when scroll or not

$(window).scroll(function() {
    var topElement = $("#element").offset().top;
    var bottomElement = $("#element").offset().top + $("#element").outerHeight();
    var bottomScreen = $(window).scrollTop() + $(window).innerHeight();
    var topScreen = $(window).scrollTop();

    if ((bottomScreen > topElement) && (topScreen < bottomElement)){
        //do something
    } else {
        //do something
    }
});

*/