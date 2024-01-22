const Tarea = require("../models/tareaModel");

const obtenerTodasTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const agregarNuevaTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    const tareaGuardada = await nuevaTarea.save();
    res.json(tareaGuardada);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const actualizarTarea = async (req, res) => {
  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tareaActualizada);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const eliminarTarea = async (req, res) => {
  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
    res.json(tareaEliminada);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  obtenerTodasTareas,
  agregarNuevaTarea,
  actualizarTarea,
  eliminarTarea,
};