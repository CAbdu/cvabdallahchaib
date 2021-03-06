$(document).ready(function(){
    var $nav = $('.navbar');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});

$(function(){
  $(".navbar a, footer a").on("click", function(event){
    event.preventDefault();
    var hash = this.hash;
    $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
  });
})
