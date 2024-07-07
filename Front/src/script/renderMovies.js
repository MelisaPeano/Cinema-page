
function renderMovies(data) {
    const moviesContainer = document.querySelector(".carousel-inner");
    const nuevoContenedor = document.createElement("div");
    nuevoContenedor.classList.add("carousel-item");
    if( nuevoContenedor.length === 0){
        nuevoContenedor.classList.add("active");
    }
    nuevoContenedor.innerHTML = `
    <div class="carousel-item">
    <img src="${data.image}" class="d-block w-100" alt="Movie Poster">
    <p>${data.title}</p>
    <p>${data.year}</p>
    <p>${data.rate}</p>
    </div>
    
    `
    moviesContainer.forEach(movie => {
        movie.appendChild(nuevoContenedor);
    });
    

}