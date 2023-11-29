// models/transaccion.js
const mongoose = require('mongoose');

const transaccionSchema = new mongoose.Schema({
  empresaSeleccionada: String,
  estudianteSeleccionado: String,
  tipoVenta: String,
  // Otros campos de la transacción, si es necesario
});

const Transaccion = mongoose.model('transaccion', transaccionSchema, 'transaccion');

module.exports = Transaccion;
