const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Simulando una base de datos en memoria
let recetas = [];

// Middleware personalizado para registrar las solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Método: ${req.method}, Ruta: ${req.url}`);
  next(); // Continúa con el siguiente middleware o ruta
});

// Endpoint para listar todas las recetas (GET)
app.get('/recetas', (req, res) => {
  res.json(recetas); // Devuelve la lista de recetas en formato JSON
});

// Endpoint para crear una nueva receta (POST)
app.post('/recetas', (req, res) => {
  const nuevaReceta = {
    id: recetas.length + 1,
    nombre: req.body.nombre,
    ingredientes: req.body.ingredientes,
    instrucciones: req.body.instrucciones,
    categoria: req.body.categoria,
    duracion: req.body.duracion,
    dificultad: req.body.dificultad
  };

  recetas.push(nuevaReceta); // Agrega la receta a la lista

  res.status(201).json({ mensaje: 'Receta creada con éxito', receta: nuevaReceta });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
