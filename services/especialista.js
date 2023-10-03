const Especialista = require("../models/especialista");

exports.insert = function (data) {
	return Especialista.create(data);
};

exports.findByCedula = function (username) {
	return Especialista.findOne({
		where: {
			cedula,
		},
	});
};

exports.findById = function (id) {
	return Especialista.findByPk(id);
}

exports.findAll = function () {
	return Especialista.findAll();
};