$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<i class="fa fa-fw fa-chevron-left" ></i>',
        '<i class="fa fa-fw fa-chevron-right" ></i>'
    ],
dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1020:{
            items:1
        }
    }

  
});
/*
$(document).ready(function() {

    $(window).scroll(function() {

       var height = $('.navbar').height();
     
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height ) {
            $('.navbar').addClass('navbar-dark');
            $('.navbar').addClass('bg-dark');

        } else {
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').removeClass('bg-dark');

        }

    });
});*/
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
