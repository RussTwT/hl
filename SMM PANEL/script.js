// Mostrar un mensaje de bienvenida al cargar la página
window.onload = function () {
    console.log("Bienvenido a SMM Panel");
  
    // Ocultar el enlace "Inicio" en la página principal
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual
    const inicioLink = document.querySelector('a[href="index.html"]'); // Selecciona el enlace de "Inicio"
  
    if (currentPage === "index.html" || currentPage === "") {
      inicioLink.style.display = "none"; // Oculta el enlace de "Inicio"
    }
  };
  