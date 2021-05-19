import { Router, Response, Request } from "express";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const empleadoRoutes = Router();





empleadoRoutes.get("/index", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "SELECT * FROM `empleado` WHERE ISNULL(`deleted_at`)"
        );

        res.json({
            estado: "succes",
            mensaje: "Empleados retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

empleadoRoutes.post("/create", verificarToken, async (req: any, res: Response) => {
    try {
       
    
        const body = req.body;

        const id_tipo_empleado = body.id_tipo_empleado;
        const nombre= body.nombre;
        const dni= body.dni;
        const cuit= body.cuit;
        const email= body.email;
        const foto= body.foto;
        const precio_hora= body.precio_hora;
        const id_user = body.id_user;
        const id_localidad = body.id_localidad;
        const direccion= body.direccion;
    
        const result: any =await query("INSERT INTO `empleado` (`id_tipo_empleado`, `nombre`, `dni`, `cuit`, `email`, `foto`, `precio_hora`, `id_user`, `id_localidad`, `direccion`) "
         +" VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[id_tipo_empleado,nombre,dni,cuit,email,foto,precio_hora,id_user,id_localidad,direccion]);

        res.json({
            estado: "succes",
            mensaje: "Registro Empleado almacenado con exito",
            data: result,

        });

    } catch (error) {

        res.json({ estado: "error", data: error });
    }
});

empleadoRoutes.put("/update", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;
        const id_empleado = body.id_empleado;
        const id_tipo_empleado = body.id_tipo_empleado;
        const nombre= body.nombre;
        const dni= body.dni;
        const cuit= body.cuit;
        const email= body.email;
        const foto= body.foto;
        const precio_hora= body.precio_hora;
        const id_user = body.id_user;
        const eliminado:boolean= body.eliminado;  //  viene desde el front a traves de un checkbox
        const updated_at = new Date();
        let deleted_at;
        const id_localidad = body.id_localidad;
        const direccion= body.direccion;
       
        if (eliminado) {              /// VER ESTO Q NO DA BOLA
            console.log(eliminado);
            deleted_at = new Date();
        }else{
            deleted_at = "NULL";
        }
    
        const result = await query("UPDATE `empleado` SET "+
        " `id_tipo_empleado` = ?, `nombre` = ?, `dni` = ?, `cuit` = ?,"+
        " `email` = ?, `foto` = ?, `precio_hora` = ?, `id_user` = ?, `updated_at` = ?, `deleted_at` = ? , `id_localidad` = ?, `direccion` = ? "+
        " WHERE `empleado`.`id_empleado` = ?",[id_tipo_empleado,nombre,dni,cuit,email,foto,precio_hora,id_user,updated_at,deleted_at, id_empleado,id_localidad,direccion]
        );

        res.json({
            estado: "succes",
            mensaje: "Actualizacion realizada con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});



///// FUNCIONES


export default empleadoRoutes;

