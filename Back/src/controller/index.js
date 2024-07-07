
const moviesGet = async (req, res) => {
    try {
        const response = await axios.get("http://localhost:8080/movie");
        const movies = response.data;
        res.json(movies);
    } catch (error) {
        console.log("error al hacer la peticion GET en moviesGet", error);
    }
}