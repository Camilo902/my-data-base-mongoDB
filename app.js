
const express = require('express');
const connectDB = require('./db');
const { ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3071;

app.use(express.json()); 

// Obtener todas las tareas
app.get('/tasks', async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('list');
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Agregar una nueva tarea
app.post('/tasks', async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('list');
    const newTask = req.body;
    await collection.insertOne(newTask);
    res.json(newTask);
  } catch (error) {
    console.error('Error al agregar tarea:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Actualizar una tarea existente
app.put('/tasks/:id', async (req, res) => {
    try {
      const db = await connectDB();
      const collection = db.collection('list');
      const taskId = req.params.id;
      const updatedTask = req.body;
      const objectId = new ObjectId(taskId);
      
      await collection.updateOne({ _id: objectId }, { $set: updatedTask });
      
      res.json(updatedTask);
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

app.delete('/tasks/:id', async (req, res) => {
    try {
      const db = await connectDB();
      const collection = db.collection('list');
      const taskId = req.params.id;
      const objectId = new ObjectId(taskId);
      await collection.deleteOne({ _id: objectId });
      
      res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
