const { connect, sync } = require('./models/sequelize');

const User = require('./models/user');                   //Usuario
const PesoEntries = require('./models/pesoEntries');             //Actualizaciones sobre su peso

//Un usuario crea muchas actualizaciones sobre su peso
User.hasMany(PesoEntries);
PesoEntries.belongsTo(User);

exports.initDatabase = async function () {
    await connect();
    await sync(); // <---Peligrosa
};