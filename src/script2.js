$(document).ready(() => {
    // Mostrar/Esconder Navegação
    $('nav ul').hide();
  
    $('.nav-toggle').on('click', () => {
      $('nav ul').slideToggle('medium');
    });
  
    $('nav ul li a, .brand a').on('click', () => {
      $('nav ul').hide();
    });
  
    // Scroll Suave com Offset da Altura da Navegação
    const navHeight = $('nav').outerHeight();
  
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
      const target = $(this.hash);
  
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - navHeight,
          },
          1000
        );
        event.preventDefault();
      }
    });
  
    // Navegação Fixa
    const viewHeight = $(window).height();
    const navigation = $('nav');
  
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > viewHeight - 175) {
        navigation.addClass('sticky');
      } else {
        navigation.removeClass('sticky');
      }
    });
  
    // Centralizar Container de Splash Verticalmente
    const centerSplash = () => {
      const navHeight = $('nav').outerHeight();
      const splashHeight = $('.splash .container').height();
      const remainingHeight = $(window).height() - splashHeight - navHeight;
  
      $('.splash .container').css({
        'padding-top': remainingHeight / 2,
        'padding-bottom': remainingHeight / 2,
      });
    };
  
    centerSplash();
    $(window).on('resize', centerSplash);
  });
  