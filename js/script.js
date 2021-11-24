$(document).ready(function() {
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 800) {
          $('.arrow-top').fadeIn(); 
        } else {
          $('.arrow-top').fadeOut();
        }
    });
    $('.arrow-top').on('click', function() {
        $('html, body').stop().animate({scrollTop : 0}, 700);
    });

    $(".contacts__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required:"Пожалуйста, введите своё имя!",
                minlength: jQuery.validator.format("Имя не может содержать менее {0} символов!")
            },
            email: {
                required:"Мне нужен ваш адрес электронной почты!",
                email: "Пожалуйста, введите корректный адрес!"
            },
            checkbox: {
                required: "Вы должны принять политику конфеденциальности"
            }
        },
    });

    $(".contacts__form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize() 
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger("reset");
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

const counters = document.querySelectorAll('.rating__counter'),
      lines = document.querySelectorAll('.rating__line');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

