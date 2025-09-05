document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar elementos
    const botones = document.querySelectorAll('.filtro-btn');
    const peliculas = document.querySelectorAll('.movie-card');

    // 2. Función para filtrar (¡NUEVA VERSIÓN!)
    function filtrarPeliculas(categoria) {
        peliculas.forEach(pelicula => {
            const categoriasPeli = pelicula.getAttribute('data-categoria').split(' '); // Separa las categorías
            const mostrar = categoria === 'todas' || categoriasPeli.includes(categoria);
            
            pelicula.style.display = mostrar ? 'block' : 'none';
        });
    }

    // 3. Event listeners para botones
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            // Remover clase 'activo' de todos los botones
            botones.forEach(btn => btn.classList.remove('activo'));
                
            // Añadir clase al botón clickeado
            this.classList.add('activo');
            
            // Filtrar
            const categoria = this.getAttribute('data-categoria');
            filtrarPeliculas(categoria);
        });
    });

    // 4. Mostrar todas al cargar la página
    const btnTodas = document.querySelector('.filtro-btn[data-categoria="todas"]');
    if (btnTodas) btnTodas.click();
});


//PRUEBAS
document.addEventListener('DOMContentLoaded', () => {
    // ... tu código actual ...

    // Al cargar la página, activa el filtro "TODAS"
    const btnTodas = document.querySelector('.filtro-btn[data-categoria="todas"]');
    if (btnTodas) btnTodas.click(); // Simula un clic en "TODAS"
});










