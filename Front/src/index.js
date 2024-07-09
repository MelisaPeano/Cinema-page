const axios = require("axios");
const renderMovies = require("./script/renderMovies");

document.addEventListener("DOMContentLoaded", () => {
     getMovies
    });

const getMovies = async () => {
    try {
        const response = await axios.get("http://localhost:8080/movies");
        const movies = response.data;
        renderMovies(movies);
    } catch (error) {
        console.log("error al hacer la peticion GET en getMovies", error);
    }
    
}