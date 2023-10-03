const express = require("express");
const router = express.Router();
const { createUser, getUsers} = require("../controllers/user");
const validator = require('../middlewares/validator');
const {createUserSchema, paramsSchema} = require('../validations/user')


router.get("/users", validator.body(createUserSchema), createUser);
router.get("/users/:id", validator.params(paramsSchema), validator.body(createUserSchema), getUsers);

module.exports = router;