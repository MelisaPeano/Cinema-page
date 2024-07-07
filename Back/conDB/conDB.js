const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


conDB = async () => {
    try {
   await mongoose.connect(process.env.URI);
    console.log("conexión exitosa")
    }
    catch (error){console.log("error de conexion BD", error)
        process.exit(1);
    }
}

module.exports = conDB;