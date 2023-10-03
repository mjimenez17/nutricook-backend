const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");
const validator = require('../middlewares/validator');
const createUserSchema = require('../validations/user')

router.post("/users", validator.body(createUserSchema), createUser);

module.exports = router;