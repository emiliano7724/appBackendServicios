import Server from './class/server';
import connection from './bin/connection';
import bodyPaser from 'body-parser';
import userRoutes from './routes/users';
import servicioRoutes from './routes/servicios';
import empleadoRoutes from './routes/empleados';
import clienteRoutes from './routes/clientes';
/*import dashboardRoutes from './routes/dashboard'; */
import fileUpload from 'express-fileupload';


//Creando servidor web
const server = new Server();

server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.puerto} y en host ${server.host}`);
});

// body parser
server.app.use(bodyPaser.urlencoded({ extended: true }));
server.app.use(bodyPaser.json());

//upload
server.app.use(fileUpload());

//Rutas aplicacion
server.app.use('/users', userRoutes);
server.app.use('/servicios', servicioRoutes);
server.app.use('/empleados', empleadoRoutes);
server.app.use('/clientes', clienteRoutes);
/*server.app.use('/dashboard', dashboardRoutes); */

//Conexión dataBase MySQL
connection.connect((error) => {
    if (error) {
        throw error
    }
    else {
        console.log("Aplicacion conectada a base de datos MySql")
    }
})




