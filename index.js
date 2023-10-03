require("dotenv").config();

const { connect } = require('./models/sequelize');
connect();

const { initDatabase } = require('./db');
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const pesoEntriesRouter = require("./routers/pesoEntries");

const authRouter = require("./routers/auth")

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutas
app.use(pesoEntriesRouter);
app.use(userRouter);

app.use(authRouter);
app.use(validationError);
app.use(unknownError);

app.listen(process.env.PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});

