$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-fw fa-chevron-left" ></i>',
        '<i class="fa fa-fw fa-chevron-right" ></i>'
    ],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 1
        },
        1020: {
            items: 1
        }
    }


});
/*
$( window ).resize(function() {

    var width = $(window).width();
    if (width <= 991 ) {
        $('.navbar-nav').addClass('custom');
        $('.navbar').addClass('navbar-expand-md');
        $('.navbar').removeClass('navbar-expand');

        $('.collapse-custom').removeClass('custom');

    }
    else if (width > 991 ) {
        $('.navbar').removeClass('navbar-expand-md');
        $('.navbar').addClass('navbar-expand');
        $('.navbar-nav').removeClass('custom'); 
        $('.collapse-custom').addClass('custom');
    }

});*/
let height = $('.navbar-expand-lg').height();
let scrollTop = $(window).scrollTop();

$(document).ready(function () {

    if (scrollTop >= height) {
        $('.navbar').addClass('navbar-dark');
        $('.navbar').addClass('bg-dark');
        
    } else {
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').removeClass('bg-dark');
    
    }

    $(window).scroll(function () {
        let height = $('.navbar-expand-lg').height();
        let scrollTop = $(window).scrollTop();
      
        if (scrollTop >= height  ) {
            $('.navbar').addClass('navbar-dark');
            $('.navbar').addClass('bg-dark');

        } else  {
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').removeClass('bg-dark');
        }
      

    });
});

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

$('#navbarSupportedContent').on('shown.bs.collapse', function () {
    
    $('.navbar').addClass('navbar-dark');
    $('.navbar').addClass('bg-dark');
  })
  
/*
window.onscroll = function() {myFunction()};

function myFunction() {
    var height=document.getElementById("nav-container").offsetHeight;
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    document.getElementById('nav-container').classList.add ( "navbar-dark");
    document.getElementById('nav-container').classList.add ( "bg-dark");


  } else {
    document.getElementById('nav-container').classList.remove ( "navbar-dark");
    document.getElementById('nav-container').classList.remove ( "bg-dark");
}}
*/