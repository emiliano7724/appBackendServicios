import { Router, Response, Request } from "express";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const empleadoRoutes = Router();





empleadoRoutes.get("/index", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "SELECT * FROM `empleado` inner join tipo_empleado on tipo_empleado.id_tipo_empleado = empleado.id_tipo_empleado inner join usuario on usuario.id_user=empleado.id_user inner join localidad on localidad.id_localidad =empleado.id_localidad  WHERE ISNULL(empleado.`deleted_at_emp`)"
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
        const telefono= body.telefono;

    
        const result: any =await query("INSERT INTO `empleado` (`id_tipo_empleado`, `nombre`, `dni`, `cuit`, `email_empleado`, `foto`, `precio_hora`, `id_user`, `id_localidad`, `direccion`,`telefono`) "
         +" VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[id_tipo_empleado,nombre,dni,cuit,email,foto,precio_hora,id_user,id_localidad,direccion, telefono]);

        res.json({
            estado: "succes",
            mensaje: "Registro Empleado almacenado con exito",
            data: result,

        });

    } catch (error) {
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});
empleadoRoutes.post("/edit", verificarToken, async (req: any, res: Response) => {
    try {

        const body = req.body;
        const id = body.id;
        const result:any = await query(  
            "SELECT * FROM `empleado` inner join localidad on localidad.id_localidad=empleado.id_localidad  inner join tipo_empleado on tipo_empleado.id_tipo_empleado=empleado.id_tipo_empleado inner join usuario on usuario.id_user=empleado.id_user where id_empleado=? order by id_empleado desc limit 0,1", [id]
        );
 //console.log(result[0])
        res.json({
            estado: "succes",
            mensaje: "Empleado retornado con exito",
            data: result[0], // mandamos solo el primer elemento del array ya q el resultado siempre es 1 

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
        const telefono= body.telefono;
        const cuit= body.cuit;
        const email= body.email;
        const foto= body.foto;
        const precio_hora= body.precio_hora;
        const id_user = body.id_user;
        const eliminado:boolean= body.estado;  //  viene desde el front a traves de un checkbox
        const updated_at = new Date();
        let deleted_at;
        const id_localidad = body.id_localidad;
        const direccion= body.direccion;
       
    
        if (!eliminado) {                   
         
            deleted_at = new Date();
        }else{
            deleted_at=null
        }
        const result = await query("UPDATE `empleado` SET "+
        " `id_tipo_empleado` = ?, `nombre` = ?, `dni` = ?, `cuit` = ?, `telefono` = ?,"+
        " `email_empleado` = ?, `foto` = ?, `precio_hora` = ?, `id_user` = ?, `updated_at` = ?, `deleted_at_emp` = ? , `id_localidad` = ?, `direccion` = ? "+
        " WHERE `empleado`.`id_empleado` = ?",[id_tipo_empleado,nombre,dni,cuit, telefono,email,foto,precio_hora,id_user,updated_at,deleted_at,id_localidad,direccion,id_empleado]
        );

        res.json({
            estado: "succes",
            mensaje: "Actualizacion realizada con exito",
            data: result,

        });
    } catch (error) {
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});



///// FUNCIONES


export default empleadoRoutes;

