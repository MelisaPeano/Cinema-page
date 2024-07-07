const Movie = require("../../model/Movie");

module.exports = {
    mostrarPeliculas: async (req, res) => {
        try {
            const nuevaPeli = await Movie.find();
            return nuevaPeli;
    
        } catch (error) {
            console.log("error en mostrarPeliculas/server", error);
            res.status(500).json(error, "ocurrio un error")
        }
    },
    peliculasRecibidas: async (movieData) => {
        const nuevaMovie = await Movie.create(movieData);
        return nuevaMovie;
    }
}