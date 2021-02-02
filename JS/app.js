
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