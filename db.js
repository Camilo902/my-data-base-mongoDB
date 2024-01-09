const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_TASKSLIST;
const client = new MongoClient(url);


async function connectDB(){
    try{
        await client.connect();
        console.log('Conectado a la base de datos');
        return client.db('task');
        }catch (error){
        console.error('Error al conectar la base de Datos',error);
         };
    };

    module.exports = connectDB;
    
