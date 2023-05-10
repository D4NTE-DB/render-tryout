const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const db = require("./utils/database")


const app = express();

const PORT = process.DB_PORT || 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada")
    })
    .catch((error) => console.log(error));



db.sync({ alter: true })
    .then(() => console.log("Synced database"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.send("Welcome to API")
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


console.log(process.env)