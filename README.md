# Guía para Configurar y Ejecutar la Aplicación en el Entorno Local

1.	### Clonar el Repositorio:
**git clone <URL_DEL_REPOSITORIO>**

2.	### Instalar las Dependencias:
**npm install**

3.	### Configurar el archivo. Env:
Crea un archivo **.env** en el directorio del proyecto y configura las variables de entorno necesarias: **MONGODB_URI=mongodb://localhost:27017/tasks**
**PORT=3000**

4.	### Ejecutar la Aplicación con Nodemon:
En lugar de node app.js, utiliza Nodemon para iniciar la aplicación y realizar reinicios automáticos al detectar cambios:
**nodemon app.js**

5.	### Probar las Rutas de la API: 
Utiliza **Postman** para probar las rutas de la API:

•	Obtener todas las tareas: GET **http://localhost:3000/tasks**
•	Agregar una nueva tarea: POST **http://localhost:3000/tasks** con el cuerpo JSON de la tarea
•	Actualizar una tarea existente: PUT **http://localhost:3000/tasks/:id** con el cuerpo JSON actualizado
•	Eliminar una tarea: DELETE **http://localhost:3000/tasks/:id**





