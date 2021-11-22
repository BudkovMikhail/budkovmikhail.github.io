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

