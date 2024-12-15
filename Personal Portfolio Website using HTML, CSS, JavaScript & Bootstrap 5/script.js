
// (window).on("scroll",function(){
//     var scrollTop = $(window).scrollTop();
//     if(scrollTop >= 88){
//         $('body').addClass('fixed-header');
//     }else{
//         $('body').removeClass('fixed-header')
//     }
// });

// $(document).ready(function(){

//     new Typed('#type-it', {
//         strings: ['Designer','Developer','Freelancer',''],
//         typeSpeed: 100,
//         loop: true
//       });

// });


// Fixed Header on Scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 88) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// Typed.js Initialization
new Typed('#type-it', {
    strings: ['Designer', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    loop: true
});

// Owl Carousel Initialization
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });
});

