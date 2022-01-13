'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    observation: String,
    totalItems: { type: Number, default: 0},
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);