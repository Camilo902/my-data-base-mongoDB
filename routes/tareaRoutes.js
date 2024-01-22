const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

// Definir rutas
router.get('/', tareaController.obtenerTodasTareas);
router.post('/', tareaController.agregarNuevaTarea);
router.put('/:id', tareaController.actualizarTarea);
router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;