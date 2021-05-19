import { Router, Response, Request } from "express";

import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";
import emailClass from '../class/email'
const servicioRoutes = Router();




servicioRoutes.post("/create", verificarToken, async (req: any, res: Response) => {
    try {
       
       // se replicaran los mismo horarios en las 4 semanas
        // hi= hora inicio  hf= hora fin
        const body = req.body;


        const id_usr = body.id_usr;
        const id_cliente = body.id_cliente;

        const hiLunes = body.hiLunes;
        const hfLunes = body.hfLunes;

        const hiMartes = body.hiMartes;
        const hfMartes = body.hfMartes;

        const hiMiercoles = body.hiMiercoles;
        const hfMiercoles = body.hfMiercoles;

        const hiJueves = body.hiJueves;
        const hfJueves = body.hfJueves;

        const hiViernes = body.hiViernes;
        const hfViernes = body.hfViernes;

        const hiSabado = body.hiSabado;
        const hfSabado = body.hfSabado;

        const hiDomingo = body.hiDomingo;
        const hfDomingo = body.hfDomingo;



        const result: any =
            await query("INSERT INTO `frecuencia_horaria` ("+
            " `hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`,`hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1`"+
            ", `hora_ingreso_lunes_semana_2`, `hora_egreso_lunes_semana_2`,`hora_ingreso_martes_semana_2`, `hora_egreso_martes_semana_2`, `hora_ingreso_miercoles_semana_2`, `hora_egreso_miercoles_semana_2`, `hora_ingreso_jueves_semana_2`, `hora_egreso_jueves_semana_2`, `hora_ingreso_viernes_semana_2`, `hora_egreso_viernes_semana_2`, `hora_ingreso_sabado_semana_2`, `hora_egreso_sabado_semana_2`, `hora_ingreso_domingo_semana_2`, `hora_egreso_domingo_semana_2`"+
            ", `hora_ingreso_lunes_semana_3`, `hora_egreso_lunes_semana_3`,`hora_ingreso_martes_semana_3`, `hora_egreso_martes_semana_3`, `hora_ingreso_miercoles_semana_3`, `hora_egreso_miercoles_semana_3`, `hora_ingreso_jueves_semana_3`, `hora_egreso_jueves_semana_3`, `hora_ingreso_viernes_semana_3`, `hora_egreso_viernes_semana_3`, `hora_ingreso_sabado_semana_3`, `hora_egreso_sabado_semana_3`, `hora_ingreso_domingo_semana_3`, `hora_egreso_domingo_semana_3`"+
            ", `hora_ingreso_lunes_semana_4`, `hora_egreso_lunes_semana_4`,`hora_ingreso_martes_semana_4`, `hora_egreso_martes_semana_4`, `hora_ingreso_miercoles_semana_4`, `hora_egreso_miercoles_semana_4`, `hora_ingreso_jueves_semana_4`, `hora_egreso_jueves_semana_4`, `hora_ingreso_viernes_semana_4`, `hora_egreso_viernes_semana_4`, `hora_ingreso_sabado_semana_4`, `hora_egreso_sabado_semana_4`, `hora_ingreso_domingo_semana_4`, `hora_egreso_domingo_semana_4`,`id_cliente`,`id_usr` )"


                + " VALUES (?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?, ?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?,? )", [
                hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
                hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
                hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
                hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
                id_cliente, id_usr
            ]);

        res.json({
            estado: "succes",
            mensaje: "Registro almacenado con exito",
            data: result,

        });


    } catch (error) {

        res.json({ estado: "error", data: error });
    }
});

servicioRoutes.get("/verServiciosAsignables", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "SELECT * FROM `frecuencia_horaria` WHERE ISNULL(`id_empleado`) and ISNULL(`deleted_at`) and `asignado`=0"
        );

        res.json({
            estado: "succes",
            mensaje: "Servicios asignables retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

servicioRoutes.put("/asignarServicioAempleado", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;

        const id_empleado = body.id_empleado;
        const id_usr = body.id_usr;
        const id_frecuencia_horaria = body.id_frecuencia_horaria;
        const updated_at = new Date();
        let email:string="";
        const asignado = 1; // harcodeamos en true para asignar el servicio

        const result:any = await query(   // hacemos 3 controles para saber q no esta asignada
            "UPDATE `frecuencia_horaria` SET `id_empleado` = ?, `updated_at` = ?, `id_usr` = ?, `asignado` = ?" +
            " WHERE `frecuencia_horaria`.`id_frecuencia_horaria` = ?", [id_empleado, updated_at, id_usr, asignado, id_frecuencia_horaria]
        );
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            email = row.email;
        });


        res.json({
            estado: "succes",
            mensaje: "Servicio asignado con exito",
            data: result,

        });
        

        const emailEnvio = new emailClass()


    const envio = await emailEnvio.enviarEmail(email, "Asignacion servicio", "Nuevo servicio asignado y creado con exito", "");

    res.json({
        estado:"success",
        mensaje: "Servicio asignado con exito", 
        emailResult: envio
    })
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});


servicioRoutes.put("/desasignarServicioAempleado", verificarToken, async (req: any, res: Response) => {
    try {                           /// SE ACCCEDE A ESTE SERVICIO LUEGO DE CONSUMIR EL SERVICO GET DE ESTA RUTA, QUE RETORNA LOS SERVICIOS ASIGNADOS
        const body = req.body;


        const id_usr = body.id_usr;
        const id_frecuencia_horaria = body.id_frecuencia_horaria;
        const updated_at = new Date();

        const asignado = 0; // harcodeamos en false para desasignar el servicio
        const id_empleado = null;
        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "UPDATE `frecuencia_horaria` SET `id_empleado` = ?, `updated_at` = ?, `id_usr` = ?, `asignado` = ?" +
            " WHERE `frecuencia_horaria`.`id_frecuencia_horaria` = ?", [id_empleado, updated_at, id_usr, asignado, id_frecuencia_horaria]
        );

        res.json({
            estado: "succes",
            mensaje: "Servicio desasignado con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});
servicioRoutes.get("/serviciosDelEmpleado", verificarToken, async (req: any, res: Response) => {
    try {

        const body = req.body;



        const asignado = 1; // harcodeamos en true para buscar los asignados
        const id_empleado = body.id_empleado;

        const result = await query(   // 
            "SELECT `frecuencia_horaria`.* FROM `empleado` left join frecuencia_horaria on empleado.id_empleado=frecuencia_horaria.id_empleado " +
            "WHERE ((`empleado`.`id_empleado` =?) AND ISNULL(`empleado`.`deleted_at`) AND (`frecuencia_horaria`.`asignado` =?))",
            [id_empleado, asignado]
        )

        res.json({
            estado: "succes",
            mensaje: "Servicios del Empleado retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});


servicioRoutes.put("/delete", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;

 
        const id_usr = body.id_usr;
        const id_frecuencia_horaria = body.id_frecuencia_horaria;
        const deleted_at = new Date();

        const asignado = 1; // harcodeamos en true para asignar el servicio

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "UPDATE `frecuencia_horaria` SET `deleted_at` = ?, `id_usr` = ?" +
            " WHERE `frecuencia_horaria`.`id_frecuencia_horaria` = ?", [ deleted_at, id_usr,id_frecuencia_horaria]
        );

        res.json({
            estado: "succes",
            mensaje: "Servicio dado de baja con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});


servicioRoutes.get("/getMesCalendario", verificarToken, async (req: any, res: Response) => {
    try {

        const body = req.body;

 
        const id_empleado = body.id_empleado;
        const resultSemana1 = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana1` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",[id_empleado]
        );

        const resultSemana2 = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana2` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",[id_empleado]
        );
        const resultSemana3 = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana3` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",[id_empleado]
        );
        const resultSemana4 = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana4` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",[id_empleado]
        );
        res.json({
            estado: "succes",
            mensaje: "Servicio Mensuales retornados con exito",
            data: {mes:{
                s1:resultSemana1,
                s2:resultSemana2,
                s3:resultSemana3,
                s4:resultSemana4,
            }
        }
        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

///// FUNCIONES


export default servicioRoutes;

