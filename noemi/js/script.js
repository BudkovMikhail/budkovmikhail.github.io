$(document).ready(function(){
    $('.reviews__wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        dots: false,
        responsive: [
            {
              breakpoint: 786,
              settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('.popular__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        dots: false,
        responsive: [
            {
              breakpoint: 786,
              settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('.btn_promo, .btn_promo-mobile, .btn_services, .btn_sales, .btn_recording').on('click', function() {
        $('.overlay, #recording').fadeIn('slow');
    });

    $('.modal__close').on('click' , function() {
        $('.overlay, #order, #thanks, #recording').fadeOut('slow');
    });

    $('.btn_popular').each(function(i) 
    {
        $(this).on('click', function() {
            $('#order .modal__name').text($('.popular__descr').eq(i).text());
            $('#order .modal__img img').attr("src", $('.popular__img img').eq(i).attr("src"));
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
                phone: {
                    required: true,
                },
                checkbox: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Имя должно содержать как минимум {0} символа!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                },
                checkbox: {
                    required: "Установите флажок"
                }
            }
        });
    };
    valideForm("#order form");
    valideForm("#recording form");

    $('.modal__form').submit(function(e) {
        e.preventDefault();
 
        if (!$(this).valid()) {
            return;
        }   
 
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#recording, #order').fadeOut('fast');
            $('#thanks').fadeIn('fast');

            $('form').trigger('reset');
        });
        return false;
    });
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

      hamburger.addEventListener('click', () => {
        menu.classList.add('active');
      });

      closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
      });