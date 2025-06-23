
  const modal = document.getElementById("miModal");
  const img = document.getElementById("imagenMini");
  const modalImg = document.getElementById("imagenAmpliada");
  const captionText = document.getElementById("caption");
  const cerrar = document.getElementById("cerrarModal");

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  cerrar.onclick = function() {
    modal.style.display = "none";
  }

  // Cierra si se da clic fuera de la imagen
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }


  //menu responsivo
  //const menuToggle = document.getElementById('menu-toggle');
//const menu = document.getElementById('menu');

//menuToggle.addEventListener('click', () => {
 // menu.classList.toggle('active');
//});



  //carga de pagina
   let progress = 0;
  const progressBar = document.getElementById("progress");
  const loaderText = document.getElementById("loader-text");

  // Simula progreso del 0% al 100%
  
  document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const percentageElement = document.getElementById('loader-porcentage');
    const siteContent = document.getElementById('site-content');
    
    // Configuración del loader
    const duration = 2500; // 2.5 segundos de duración total
    const steps = 25; // Número de pasos de carga
    let progress = 0;
    
    const loadingInterval = setInterval(() => {
        progress += (100 / steps);
        percentageElement.textContent = `${Math.min(Math.round(progress), 100)}%`;
        
        // Cuando la carga llega al 100%
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Animación de desvanecimiento
            loader.style.opacity = '0';
            
            // Ocultar loader y mostrar contenido después de la transición
            setTimeout(() => {
                loader.style.display = 'none';
                siteContent.classList.remove('hidden');
            }, 500); // Coincide con el tiempo de transición CSS
        }
    }, duration / steps);
});


