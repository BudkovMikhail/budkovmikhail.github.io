$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>'
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_catalog').each(function(i) 
    {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });
    function valideForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                } 
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя!",
                    minlength: jQuery.validator.format("Имя должно содержать минимум {0} симлова!")
                },
                phone: "Пожалуйста, введите свой номер телефона!",
                email: {
                  required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться!",
                  email: "Пожалуйста, введите корректный адрес!"
                }
            },
        });
    };
    valideForm("#consultation-form");
    valideForm("#consultation form");
    valideForm("#order form");

    $("input[name=phone]").mask("+38 (999) 999-99-99");
});                                      