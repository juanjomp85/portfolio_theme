$(document).ready(function() {
  $('nav a').on('click', function(event) {
      if (this.hash !== '') {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
      $('.portfolio-item').each(function(i) {
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > bottom_of_object) {
              $(this).animate({'opacity': '1'}, 1000);
          }
      });
  });
});

$(document).ready(function() {
  $('#show-about').on('click', function() {
      $('#about').fadeIn(1000);
  });
});

$(document).ready(function() {
  $('video').each(function() {
      var video = this;
      video.oncanplay = function() {
          $(video).addClass('fade-in');
      };
  });
});

// Animación de desplazamiento
document.addEventListener("DOMContentLoaded", function() {
const services = document.querySelectorAll('.service');
services.forEach((service, index) => {
  setTimeout(() => {
    service.style.opacity = '1';
    service.style.transform = 'translateY(0)';
  }, index * 300);
});
});
