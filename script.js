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

document.querySelector('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
    }).then(response => {
        if (response.ok) {
            document.getElementById('form-response').innerHTML = '<p class="text-success">¡Mensaje enviado con éxito!</p>';
            form.reset();
        } else {
            response.json().then(data => {
                document.getElementById('form-response').innerHTML = '<p class="text-danger">Ocurrió un error al enviar el mensaje.</p>';
            });
        }
    }).catch(error => {
        document.getElementById('form-response').innerHTML = '<p class="text-danger">Ocurrió un error al enviar el mensaje.</p>';
    });
});

/* document.addEventListener('DOMContentLoaded', function () {
    // Reemplaza 'YOUR_API_KEY' con tu clave de API de OpenWeatherMap
    const apiKey = 'd818be6dc772f3d4daa0db19f2287bff';
    //moment.defineLocale(localeName, config)
    const city = 'Murcia'; // Puedes cambiar la ciudad por la que prefieras
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    fetch(geoApiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          // Ahora usamos lat y lon para obtener el clima
          const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

          return fetch(weatherApiUrl);
        } else {
          throw new Error('No se encontraron datos de geolocalización para la ciudad especificada.');
        }
      })
      .then(response => response.json())
      .then(weatherData => {
        document.getElementById('location').innerHTML = `<p class="text-danger">Location: ${weatherData.name}</p>`;
        document.getElementById('temperature').innerHTML = `<p class="text-danger">Temperature: ${weatherData.main.temp} °C</p>`;
        document.getElementById('description').innerHTML = `<p class="text-danger">Weather: ${weatherData.weather[0].description}</p>`;
      })
      .catch(error => console.error('Error fetching the weather data:', error));
  }); */

  document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd818be6dc772f3d4daa0db19f2287bff';
    const city = 'Murcia';
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    fetch(geoApiUrl)
      .then(response => {
        console.log('Geo API Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Geo Data:', data);
        if (data.length > 0) {
          const { lat, lon } = data[0];
          const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

          return fetch(weatherApiUrl);
        } else {
          throw new Error('No se encontraron datos de geolocalización para la ciudad especificada.');
        }
      })
      .then(response => {
        console.log('Weather API Response:', response);
        return response.json();
      })
      .then(weatherData => {
        console.log('Weather Data:', weatherData);
        document.getElementById('location').innerHTML = `<p class="text-danger">Location: ${weatherData.name}</p>`;
        document.getElementById('temperature').innerHTML = `<p class="text-danger">Temperature: ${weatherData.main.temp} °C</p>`;
        document.getElementById('description').innerHTML = `<p class="text-danger">Weather: ${weatherData.weather[0].description}</p>`;
      })
      .catch(error => console.error('Error fetching the weather data:', error));
});

