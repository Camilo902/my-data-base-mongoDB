
const express = require('express');
const connectDB = require('../my-data-base-mongoDB/config/db');
require('dotenv').config();
const PORT = process.env.PORT || 3092;

const app = express();

app.use(express.json());

// Conectar a la base de datos
connectDB();

const tareaRoutes = require('./routes/tareaRoutes');
app.use('/tareas', tareaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
