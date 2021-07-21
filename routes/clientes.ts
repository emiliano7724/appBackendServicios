import { Router, Response, Request } from "express";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const clientesRoutes = Router();





clientesRoutes.get("/index", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "SELECT * FROM `cliente` inner join localidad on localidad.id_localidad=cliente.id_localidad  inner join iva_categoria on iva_categoria.id_categoria_iva=cliente.id_categoria_iva inner join usuario on usuario.id_user=cliente.id_user WHERE ISNULL(cliente.`deleted_at_cli`)  order by id_cliente desc"
        );
       // WHERE ISNULL(cliente.deleted_at)
        res.json({
            estado: "succes",
            mensaje: "Clientes retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

clientesRoutes.post("/edit", verificarToken, async (req: any, res: Response) => {
    try {

        const body = req.body;
        const id = body.id;
        const result:any = await query(  
            "SELECT * FROM `cliente` inner join localidad on localidad.id_localidad=cliente.id_localidad  inner join iva_categoria on iva_categoria.id_categoria_iva=cliente.id_categoria_iva inner join usuario on usuario.id_user=cliente.id_user where id_cliente=? order by id_cliente desc limit 0,1", [id]
        );
 //console.log(result[0])
        res.json({
            estado: "succes",
            mensaje: "Cliente retornado con exito",
            data: result[0], // mandamos solo el primer elemento del array ya q el resultado siempre es 1 

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
        const email_cliente = body.email_cliente;
        const id_localidad = body.id_localidad;
        const id_categoria_iva = body.id_categoria_iva;
        const direccion = body.direccion;
        const id_user = body.id_user;


        const result: any = await query("INSERT INTO `cliente` (`nombre`, `telefono`,`cuit`, `email_cliente`, `id_localidad`, `id_categoria_iva`, `direccion`, `id_user`)"
            + " VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [nombre, telefono, cuit, email_cliente, id_localidad, id_categoria_iva, direccion, id_user]);

        res.json({
            estado: "succes",
            mensaje: "Registro cliente almacenado con éxito",
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
        const email_cliente = body.email_cliente;
        const id_categoria_iva = body.id_categoria_iva;
        const direccion = body.direccion;
        const id_user = body.id_user;
        const id_localidad = body.id_localidad;
        const eliminado: boolean = body.estado;  //  viene desde el front a traves de un checkbox, si viene true es habilitado
        const updated_at = new Date();
        let deleted_at;

       if (!eliminado) {                   
         
            deleted_at = new Date();
        }else{
            deleted_at=null
        }
      
        const result = await query("UPDATE `cliente` SET " +
            " `id_cliente` = ?, `nombre` = ?, `cuit` = ?, `telefono` = ?," +
            " `email_cliente` = ?, `id_localidad` = ?, `id_categoria_iva` = ?,`direccion` = ?, `id_user` = ?, `updated_at` = ?, `deleted_at_cli` = ? " +
            " WHERE `cliente`.`id_cliente` = ?", [id_cliente, nombre, cuit, telefono, email_cliente, id_localidad, id_categoria_iva, direccion, id_user, updated_at, deleted_at, id_cliente]
        );

        res.json({
            estado: "succes",
            mensaje: "Actualización realizada con exito",
            data: result,

        });
        console.log(result)
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});



///// FUNCIONES


export default clientesRoutes;

