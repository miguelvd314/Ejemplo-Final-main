const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Empresa = require('./models/auto');
const Estudiante = require('./models/cliente');
const Transaccion = require('./models/transaccion');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.dbwsjso.mongodb.net/Final', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Configuración de vistas y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para renderizar el index.ejs
app.get('/', async (req, res) => {
  try {
    const empresas = await Empresa.find({}, 'nombre');
    const estudiantes = await Estudiante.find({}, 'nombre');

    res.render('index', { empresas, estudiantes });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).send({ mensaje: 'Error al obtener datos.', error: error.message });
  }
});

// Ruta para guardar transacción
// Ruta para guardar transacción
app.post('/guardarTransaccion', async (req, res) => {
    try {
      const { empresaSeleccionada, estudianteSeleccionado, tipoVenta } = req.body;
  
      const transaccion = new Transaccion({
        empresaSeleccionada,
        estudianteSeleccionado,
        tipoVenta,
      });
  
      await transaccion.save();
  
      res.status(200).send({ mensaje: 'Transacción guardada exitosamente.' });
    } catch (error) {
      console.error('Error al guardar transacción:', error);
      res.status(500).send({ mensaje: 'Error al guardar transacción.', error: error.message });
    }
  });
  

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
