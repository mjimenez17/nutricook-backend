const { insert, findAll, findById } = require('../services/user');

exports.createUser = async function (request, response) {
	const {age, firstName, lastName, gender, email, username, password, } = request.body;
	const user = await insert({age, firstName, lastName, gender, email, username, password });
	response.status(201).json(user);
};

exports.getUsers = async function (request, response) {
	const Usuarios = await findAll();
	response.status(200).json(posts);
};

exports.getUserbyId = async function (request, response) {
	const { id } = request.params;
	const Especialista = await findById(id);
	response.status(200).json(post);
};
