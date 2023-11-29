const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nombre: String, //modelo
  sector: String, //marca
  empleados: Number,//año
  ubicacion: String,
  vacantes: Number,
});

// Si tu colección en MongoDB se llama 'empresa' (en minúsculas)
const Empresa = mongoose.model('empresa', empresaSchema, 'empresa');

module.exports = Empresa;
