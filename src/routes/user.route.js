'use strict'
const express = require('express');
const UserController = require("../controllers/user.controller");

var api = express.Router();

api.get('', UserController.getAllUsers);
api.get('/:userId', UserController.getUser);
api.post('', UserController.createUser);
api.put('/:userId', UserController.updateUser);
api.delete('/:userId', UserController.deleteUser);
api.post('/login', UserController.signInUser);

module.exports = api;