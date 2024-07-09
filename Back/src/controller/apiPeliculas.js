const { peliculasRecibidas } = require("../server/index");

module.exports = {
    moviesControler: async (req, res) => {
        try {
            const { title, year, director, duration , genre , rate, poster } = req.body;
            const response = await peliculasRecibidas({ title, year, director, duration, genre, rate , poster});
            res.status(201).json(response)
        } catch (error) {
            console.log("error al hacer la peticion GET en moviesGet", error);
        }
    }
}