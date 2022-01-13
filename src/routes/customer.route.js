'use strict'
const express = require('express');
const CustomerController = require('../controllers/customer.controller');

const api = express.Router();

api.get('', CustomerController.getAllCustomers);
api.get('/:customerId', CustomerController.getCustomer);
api.post('', CustomerController.createCustomer);
api.put('/:customerId', CustomerController.updateCustomer);
api.delete('/:customerId', CustomerController.deleteCustomer);

module.exports = api;