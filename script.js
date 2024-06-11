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
  // Función para animar elementos
  function animateElements() {
      $('.portfolio-item').each(function(i) {
          var top_of_object = $(this).position().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > top_of_object) {
              $(this).animate({'opacity': '1'}, 500);
          }
      });
  }

  // Verificar si la página necesita scroll
  if ($(document).height() <= $(window).height()) {
      // Si no hay scroll necesario, animar elementos inmediatamente
      animateElements();
  } else {
      // Si hay scroll necesario, animar elementos al hacer scroll
      $(window).scroll(function() {
          animateElements();
      });
  }
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

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  
  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          document.getElementById('form-response').innerHTML = '<p class="text-success">¡Mensaje enviado con éxito!</p>';
          form.reset();
      } else {
          response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  document.getElementById('form-response').innerHTML = '<p class="text-danger">Ocurrió un error al enviar el mensaje.</p>';
              }
          });
      }
  }).catch(error => {
      document.getElementById('form-response').innerHTML = '<p class="text-danger">Ocurrió un error al enviar el mensaje.</p>';
  });
});