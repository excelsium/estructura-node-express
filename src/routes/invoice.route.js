'use strict'
const express = require('express');
const InvoiceController = require('../controllers/invoice.controller');

const api = express.Router();

api.get('', InvoiceController.getAllInvoices);
api.get('/:invoiceId', InvoiceController.getInvoice);
api.post('', InvoiceController.createInvoice);
api.put('/:invoiceId', InvoiceController.updateInvoice);
api.delete('/:invoiceId', InvoiceController.deleteInvoice);

module.exports = api;