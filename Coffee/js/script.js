$('.polygon').click( function() {
    $('.play-modal, .overlay').fadeIn('slow');
    $('.video').append("src=https://www.youtube.com/embed/e4VXSgza_Fc");
});

$('.play-close').click(function() {
    $('.play-modal, .overlay').fadeOut('slow');
    $('#video').remove();
});
$(document).ready(function(){
    $('.testimonial__wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg"></button>'
    });

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            date: {
                required: true
            },
            time: {
                required: true
            }
        },
        messages: {
            name: "Please specify your name",
            date: "Specify the date",
            time: "Specify the time for booking"
        },
    });
});

$("input[name=date]").mask("99.99.9999"),
$("input[name=time]").mask("99:99");

