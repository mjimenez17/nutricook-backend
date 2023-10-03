const { insert } = require('../services/user');

exports.createUser = async function (request, response) {
	const {age, firstName, lastName, gender, email, username, password, } = request.body;
	const user = await insert({age, firstName, lastName, gender, email, username, password });
	response.status(201).json(user);
};