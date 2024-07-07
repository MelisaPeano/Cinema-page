const { mostrarPeliculas } = require("../server");

const moviesGet = async (req, res) => {
    try {
        const { title, year, director, duration , genre , rate, poster } = req.body;
        const response = await mostrarPeliculas({ title, year, director, duration, gnre, rate , poster});
        res.status(201).json(response)
    } catch (error) {
        console.log("error al hacer la peticion GET en moviesGet", error);
    }
}