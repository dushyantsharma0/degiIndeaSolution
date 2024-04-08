

 

$(document).ready(function(){
    $(window).scroll(function(){
        if(window.scrollY > 0){
            $('.fixeddiv').addClass('white').css('transition', '1s');
        } else {
            $('.fixeddiv').removeClass('white').css('transition', '1s');
        }
    });
});

$('.twod').on('mouseenter touchstart', function() {
    $('.hide').hide(500);
    $('.show').fadeIn(500);
    $('.twod').addClass('addboderight').css('transition', '1s');
    $('.twod').removeClass('b1').css('transition', '1s');
});
$('.twod').on('mouseleave touchend', function() {
    $('.show').fadeOut(-100);
    $('.hide').show(-100);
    $('.twod').addClass('b1').css('transition', '1s');
    $('.twod').removeClass('addboderight');
   
});
$('.threed').on('mouseenter touchstart', function() {
    $('.hide2').hide(500);
    $('.show2').fadeIn(500);
    $('.threed').addClass('addboderight').css('transition', '1s');
    $('.threed').removeClass('b2');
});
$('.threed').on('mouseleave touchend', function() {
    $('.show2').fadeOut(-100);
    $('.hide2').show(-100);
    $('.threed').addClass('b2').css('transition', '1s');
    $('.threed').removeClass('addboderight');
   
});


// slider 
$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false, // Remove the dots
        controls: false, // Remove the side navigation
        minSlides: 5, // Set the minimum number of slides to display
        maxSlides: 5, // Set the maximum number of slides to display
        slideWidth: 520, // Set the width of each slide
        slideMargin: 10, // Set the margin between slides
        auto: true, // Enable auto slide
        pause: 3000 // Set the auto slide interval to 10 seconds (in milliseconds)
    });
});