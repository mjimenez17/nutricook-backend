/**
 * Carga la configuración del proyecto.
 */
require("dotenv").config();

/**
 * Inicializa la base de datos.
 */
const { inicializaLaBaseDeDatos } = require("./db");
inicializaLaBaseDeDatos();

/**
 * Inicializa el servidor.
 */
const express = require("express");
const app = express();

/**
 * Incluye los agentes intermedios.
 */
const cors = require("cors");

app.use(cors());
app.use(express.json());

/**
 * Especifica las rutas.
 */
const sesionRouter = require("./routers/auth");
const usuarioRouter = require("./routers/usuario");
const recetasFavoritasRouter = require("./routers/receta-favorita");

app.use(sesionRouter);
app.use(usuarioRouter);
app.use(recetasFavoritasRouter);

/**
 * Proporciona los agentes para mostrar los errores.
 */
const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

app.use(validationError);
app.use(unknownError);

/**
 * Arranca la aplicación. :)
 */
app.listen(process.env.SERVER_PORT, function () {
  console.log(
    `> La aplicación fue inicializada en el puerto ${process.env.SERVER_PORT}.`
  );
});
