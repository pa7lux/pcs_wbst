$(document).ready(function(){
  $('.mobileMenu').click(function(){
    $('.mainMobileMenu').animate({'right':'0vw'},'slow');
  });
  $('.close').click(function(){
    $('.mainMobileMenu').animate({'right':'-100vw'},'slow');
  });
  $('.html').on('click', function(){
    document.location.href = 'html.html';
  });
  $('.js').on('click', function(){
    document.location.href = 'js.html';
  });
  $('.hosting').on('click', function(){
    document.location.href = 'host.html';
  });
});
