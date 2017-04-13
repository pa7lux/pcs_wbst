$(document).ready(function(){
  $('.mobileMenu').click(function(){
    $('.mainMobileMenu').animate({'right':'0vw'},'slow');
  });
  $('.close').click(function(){
    $('.mainMobileMenu').animate({'right':'-100vw'},'slow');
  });
});
