import { Router, Response, Request } from "express";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const clientesRoutes = Router();





clientesRoutes.get("/index", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "SELECT * FROM `cliente` WHERE ISNULL(`deleted_at`)"
        );

        res.json({
            estado: "succes",
            mensaje: "Clientes retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

clientesRoutes.post("/create", verificarToken, async (req: any, res: Response) => {
    try {


        const body = req.body;


        const nombre = body.nombre;
        const telefono = body.telefono;
        const cuit = body.cuit;
        const email = body.email;
        const id_localidad = body.id_localidad;
        const id_categoria_iva = body.id_categoria_iva;
        const direccion = body.direccion;
        const id_user = body.id_user;


        const result: any = await query("INSERT INTO `cliente` (`nombre`, `telefono`,`cuit`, `email`, `id_localidad`, `id_categoria_iva`, `direccion`, `id_user`)"
            + " VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [nombre, telefono, cuit, email, id_localidad, id_categoria_iva, direccion, id_user]);

        res.json({
            estado: "succes",
            mensaje: "Registro cliente almacenado con exito",
            data: result,

        });

    } catch (error) {

        res.json({ estado: "error", data: error });
    }
});

clientesRoutes.put("/update", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;
       
        const id_cliente = body.id_cliente;
        const nombre = body.nombre;
        const telefono = body.telefono;
        const cuit = body.cuit;
        const email = body.email;
        const id_categoria_iva = body.id_categoria_iva;
        const direccion = body.direccion;
        const id_user = body.id_user;
        const id_localidad = body.id_localidad;
        const eliminado: boolean = body.eliminado;  //  viene desde el front a traves de un checkbox
        const updated_at = new Date();
        let deleted_at;

        if (eliminado) {                   /// VER ESTO Q NO DA BOLA
         
            deleted_at = new Date();
        }else{
            deleted_at = "NULL";
        }

        const result = await query("UPDATE `cliente` SET " +
            " `id_cliente` = ?, `nombre` = ?, `cuit` = ?, `telefono` = ?," +
            " `email` = ?, `id_localidad` = ?, `id_categoria_iva` = ?,`direccion` = ?, `id_user` = ?, `updated_at` = ?, `deleted_at` = ? " +
            " WHERE `cliente`.`id_cliente` = ?", [id_cliente, nombre, cuit, telefono, email, id_localidad, id_categoria_iva, direccion, id_user, updated_at, deleted_at, id_cliente]
        );

        res.json({
            estado: "succes",
            mensaje: "Actualización realizada con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});



///// FUNCIONES


export default clientesRoutes;

