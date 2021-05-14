import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bdappservicios",
    port: 3306
})



export default connection;
