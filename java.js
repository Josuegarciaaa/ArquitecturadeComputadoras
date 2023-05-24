function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
  var fecha = new Date();
  var hora = fecha.getHours();
  
  if (hora >= 6 && hora < 12) {
    document.body.style.backgroundColor = "#F9DC5C"; // Colores para la mañana
  } else if (hora >= 12 && hora < 18) {
    document.body.style.backgroundColor = "#FFA07A"; // Colores para la tarde
  } else {
    document.body.style.backgroundColor = "#2C3E50"; // Colores para la noche
  }
  window.onload = function() {
    var fecha = new Date();
    var hora = fecha.getHours();
  
    if (hora >= 6 && hora < 12) {
      document.body.style.backgroundColor = "#F9DC5C"; // Colores para la mañana
    } else if (hora >= 12 && hora < 18) {
      document.body.style.backgroundColor = "#FFA07A"; // Colores para la tarde
    } else {
      document.body.style.backgroundColor = "#2C3E50"; // Colores para la noche
    }
  }
  function aumentarFuente() {
    var p = document.getElementsByTagName("p");
    for (var i = 0; i < p.length; i++) {
      p[i].style.fontSize = "1.2em";
    }
  }
  
  function disminuirFuente() {
    var p = document.getElementsByTagName("p");
    for (var i = 0; i < p.length; i++) {
      p[i].style.fontSize = "0.8em";
    }
  }
  var botonInicio = document.createElement("button");
  botonInicio.textContent = "Ir al inicio";
  botonInicio.setAttribute("id", "boton-inicio");
  botonInicio.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });
  
  document.body.appendChild(botonInicio);
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  });