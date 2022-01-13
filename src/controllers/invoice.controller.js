'use strict'
const Invoice = require('../models/invoice.model');

function getAllInvoices(req, res) {
    //
    res.status(200).send('InvoiceController:: getAllInvoices');
}

function getInvoice(req, res) {
    //
    res.status(200).send('InvoiceController:: getInvoice');
}

function createInvoice(req, res) {
    //
    res.status(200).send('InvoiceController:: createInvoice');
}

function updateInvoice(req, res) {
    //
    res.status(200).send('InvoiceController:: updateInvoice');
}

function deleteInvoice(req, res) {
    //
    res.status(200).send('InvoiceController:: deleteInvoice');
}

module.exports = {
    getAllInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
}