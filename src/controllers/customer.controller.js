'use strict'
const Customer = require('../models/customer.model');

function getAllCustomers(req, res) {
    //
    res.status(200).send('CustomerController:: getAllCustomers');
}

function getCustomer(req, res) {
    //
    res.status(200).send('CustomerController:: getCustomer');
}

function createCustomer(req, res) {
    //
    res.status(200).send('CustomerController:: createCustomer');
}

function updateCustomer(req, res) {
    //
    res.status(200).send('CustomerController:: updateCustomer');
}

function deleteCustomer(req, res) {
    //
    res.status(200).send('CustomerController:: deleteCustomer');
}

module.exports = {
    getAllCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}