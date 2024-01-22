const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri, {

      dbName: 'TaskList', // Nombre de la base de datos
    });
    console.log('Conexión a la base de datos establecida correctamente');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos de MongoDB Atlas', error.message);
    process.exit(1); // Detener la aplicación en caso de error de conexión
  }
};

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Conexión a la base de datos cerrada');
    process.exit(0);
  });
});

module.exports = connectDB;