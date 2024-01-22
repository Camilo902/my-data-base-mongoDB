# Guía para Configurar y Ejecutar la Aplicación en el Entorno Local

1. ### Crear una cuenta en MongoDB Atlas
- Visita MongoDB Atlas.
- Haz clic en "Try Free" o "Start Free" para crear una cuenta.
- Completa el formulario de registro con la información requerida.

2. ### Iniciar Sesión en MongoDB Atlas.
- Después de crear la cuenta, inicia sesión en MongoDB Atlas.

3. ### Crear un Nuevo Proyecto
- En el panel izquierdo, haz clic en "Build a Cluster" o "Create a New Cluster" para comenzar a configurar tu clúster.
- Si aún no tienes un proyecto, MongoDB Atlas te pedirá que crees uno. Haz clic en "Create Project", proporciona un nombre para el proyecto y haz clic en "Next".

4. ### Configurar el Clúster

**Elegir un Proveedor de Nube:**
- Selecciona el proveedor de nube que prefieras (AWS, Azure, Google Cloud Platform).

**Elegir una Región:**
- lige la región geográfica donde se ubicará tu clúster. Selecciona la región más cercana o adecuada para tus necesidades.

**Configurar Opciones Adicionales:**
- Puedes ajustar opciones adicionales como la versión de MongoDB, la configuración del clúster, la cantidad de nodos, etc.

5. ### Configurar Acceso a la Base de Datos
**Configurar IP Whitelist:**
- Agrega direcciones IP que tendrán acceso a tu clúster. Puedes permitir el acceso desde cualquier dirección IP (0.0.0.0/0) o especificar direcciones IP específicas.

**Configurar Usuario y Contraseña:**
- Crea un usuario y establece una contraseña segura. Este será el usuario que utilizarás para conectarte a la base de datos.

 6. ### Crear el Clúster
 -Revisa la configuración y haz clic en "Create Cluster".
 -MongoDB Atlas comenzará a crear tu clúster. Esto puede llevar algún tiempo.

 7. ### Conectar a tu Clúster
 - Una vez que el clúster esté listo, haz clic en "Connect" en el panel del clúster.
 - Selecciona "Connect your application" para obtener la URI de conexión que necesitarás en tu aplicación Node.js.

8.	### Clonar el Repositorio:
**git clone <URL_DEL_REPOSITORIO>**

9.	### Instalar las Dependencias:
**npm install**

10.	### Configurar el archivo. Env:
Crea un archivo **.env** en el directorio del proyecto y configura las variables de entorno necesarias:
 **MONGODB_URI="mongodb+srv://user:<password>@cluster0.ozcwemy.mongodb.net/?retryWrites=true&w=majority";**
**PORT=3000**

11.	### Ejecutar la Aplicación con Nodemon:
En lugar de node app.js, utiliza Nodemon para iniciar la aplicación y realizar reinicios automáticos al detectar cambios:
**nodemon app.js**

12.	### Probar las Rutas de la API: 
Utiliza **Postman** para probar las rutas de la API:

•	Obtener todas las tareas: GET **http://localhost:3090/tasks**
•	Agregar una nueva tarea: POST **http://localhost:3090/tasks** con el cuerpo JSON de la tarea
•	Actualizar una tarea existente: PUT **http://localhost:3090/tasks/:id** con el cuerpo JSON actualizado
•	Eliminar una tarea: DELETE **http://localhost:3090/tasks/:id**





