import { Router, Response, Request } from "express";

import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";
import emailClass from '../class/email'
const servicioRoutes = Router();

servicioRoutes.put("/updateByIdySemana", verificarToken, async (req: any, res: Response) => {
    try {
       // SET `asignado` = 1 
//
        const body = req.body;
        const id = body.id;
        const semana = body.semana;

     
   
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
            await query("update  frecuencia_horaria SET" +
                " hora_ingreso_lunes_semana_" + semana + " ='" +hiLunes+"',"+
                " hora_egreso_lunes_semana_" + semana + " ='" +hfLunes+"',"+
                " hora_ingreso_martes_semana_" + semana+ " ='" +hiMartes+"',"+
                " hora_egreso_martes_semana_" + semana+ " ='" +hfMartes+"',"+
                " hora_ingreso_miercoles_semana_" + semana + " ='" + hiMiercoles+"',"+
                " hora_egreso_miercoles_semana_" + semana + " ='" +hfMiercoles+"',"+
                " hora_ingreso_jueves_semana_" + semana + " ='" +hiJueves+"',"+
                " hora_egreso_jueves_semana_" + semana+ " ='" +hfJueves+"',"+
                " hora_ingreso_viernes_semana_" + semana + " ='" +hiViernes+"',"+
                " hora_egreso_viernes_semana_" + semana + " ='" +hfViernes+"',"+
                " hora_ingreso_sabado_semana_" + semana + " ='" +hiSabado+"',"+
                " hora_egreso_sabado_semana_" + semana + " ='" + hfSabado+"',"+
                " hora_ingreso_domingo_semana_" + semana+ " ='" +hiDomingo+"',"+
                " hora_egreso_domingo_semana_" + semana + " ='" + hfDomingo+"'"+
                " where id_frecuencia_horaria=" + id);

        res.json({
            estado: "succes",
            mensaje: "Registros actualizados con exito",
            data: result,

        });


    } catch (error) {
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});

servicioRoutes.post("/getFrecuenciaByIdySemana", verificarToken, async (req: any, res: Response) => {
    try {


        const body = req.body;
        const id = body.id;
        const semana = body.semana;


        const result: any =
            await query("select " +
                " hora_ingreso_lunes_semana_" + semana + " as hiLunes," +
                " hora_egreso_lunes_semana_" + semana + " as hfLunes," +
                " hora_ingreso_martes_semana_" + semana + " as hiMartes," +
                " hora_egreso_martes_semana_" + semana + " as hfMartes," +
                " hora_ingreso_miercoles_semana_" + semana + " as hiMiercoles," +
                " hora_egreso_miercoles_semana_" + semana + " as hfMiercoles," +
                " hora_ingreso_jueves_semana_" + semana + " as hiJueves," +
                " hora_egreso_jueves_semana_" + semana + " as hfJueves," +
                " hora_ingreso_viernes_semana_" + semana + " as hiViernes," +
                " hora_egreso_viernes_semana_" + semana + " as hfViernes," +
                " hora_ingreso_sabado_semana_" + semana + " as hiSabado," +
                " hora_egreso_sabado_semana_" + semana + " as hfSabado," +
                " hora_ingreso_domingo_semana_" + semana + " as hiDomingo," +
                " hora_egreso_domingo_semana_" + semana + " as hfDomingo" +
                " from frecuencia_horaria where id_frecuencia_horaria=" + id);

        res.json({
            estado: "succes",
            mensaje: "Registros retornados con exito",
            data: result[0],

        });


    } catch (error) {
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});


servicioRoutes.post("/getHorariosServiciosCliente", verificarToken, async (req: any, res: Response) => {
    try {


        const body = req.body;
        const id = body.id;



        const result: any =
            await query("select * from horario_cliente_view where id_cliente=" + id);

        res.json({
            estado: "succes",
            mensaje: "Registros retornados con exito",
            data: result,

        });
        console.log(result)

    } catch (error) {
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});
servicioRoutes.post("/createHorarioCliente", verificarToken, async (req: any, res: Response) => {
    try {

        const body = req.body;

        const id_usr = body.id_user;
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
        
        await query("start transaction")
        const result: any =
        
        await query("INSERT INTO `horario_cliente`" +

                " (`hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`,`hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1` ,`id_cliente`,`id_usr`)"
                + " VALUES (?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?, ?, ?  )", [
                hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
                id_cliente, id_usr
            ]);

        
        const result2: any =
        await query("INSERT INTO `frecuencia_horaria` (" +
            " `hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`,`hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1`" +
            ", `hora_ingreso_lunes_semana_2`, `hora_egreso_lunes_semana_2`,`hora_ingreso_martes_semana_2`, `hora_egreso_martes_semana_2`, `hora_ingreso_miercoles_semana_2`, `hora_egreso_miercoles_semana_2`, `hora_ingreso_jueves_semana_2`, `hora_egreso_jueves_semana_2`, `hora_ingreso_viernes_semana_2`, `hora_egreso_viernes_semana_2`, `hora_ingreso_sabado_semana_2`, `hora_egreso_sabado_semana_2`, `hora_ingreso_domingo_semana_2`, `hora_egreso_domingo_semana_2`" +
            ", `hora_ingreso_lunes_semana_3`, `hora_egreso_lunes_semana_3`,`hora_ingreso_martes_semana_3`, `hora_egreso_martes_semana_3`, `hora_ingreso_miercoles_semana_3`, `hora_egreso_miercoles_semana_3`, `hora_ingreso_jueves_semana_3`, `hora_egreso_jueves_semana_3`, `hora_ingreso_viernes_semana_3`, `hora_egreso_viernes_semana_3`, `hora_ingreso_sabado_semana_3`, `hora_egreso_sabado_semana_3`, `hora_ingreso_domingo_semana_3`, `hora_egreso_domingo_semana_3`" +
            ", `hora_ingreso_lunes_semana_4`, `hora_egreso_lunes_semana_4`,`hora_ingreso_martes_semana_4`, `hora_egreso_martes_semana_4`, `hora_ingreso_miercoles_semana_4`, `hora_egreso_miercoles_semana_4`, `hora_ingreso_jueves_semana_4`, `hora_egreso_jueves_semana_4`, `hora_ingreso_viernes_semana_4`, `hora_egreso_viernes_semana_4`, `hora_ingreso_sabado_semana_4`, `hora_egreso_sabado_semana_4`, `hora_ingreso_domingo_semana_4`, `hora_egreso_domingo_semana_4`,`id_cliente`,`id_usr` ,`id_horario_cliente`)"


            + " VALUES (?, ?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?, ?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?, ?, ?, ?, ?,?, ?, ?,?,?,?,?, ?,?,?,? )", [
            hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
            hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
            hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
            hiLunes, hfLunes, hiMartes, hfMartes, hiMiercoles, hfMiercoles, hiJueves, hfJueves, hiViernes, hfViernes, hiSabado, hfSabado, hiDomingo, hfDomingo,
            id_cliente, id_usr,result.insertId
        ]);
        await query("commit")
 
        res.json({
            estado: "succes",
            mensaje: "Registro almacenado con exito",
            data: result,

        });


    } catch (error) {
        await query("rollback")
 
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});
servicioRoutes.post("/create", verificarToken, async (req: any, res: Response) => {  // deprecado
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
            await query("INSERT INTO `frecuencia_horaria` (" +
                " `hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`,`hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1`" +
                ", `hora_ingreso_lunes_semana_2`, `hora_egreso_lunes_semana_2`,`hora_ingreso_martes_semana_2`, `hora_egreso_martes_semana_2`, `hora_ingreso_miercoles_semana_2`, `hora_egreso_miercoles_semana_2`, `hora_ingreso_jueves_semana_2`, `hora_egreso_jueves_semana_2`, `hora_ingreso_viernes_semana_2`, `hora_egreso_viernes_semana_2`, `hora_ingreso_sabado_semana_2`, `hora_egreso_sabado_semana_2`, `hora_ingreso_domingo_semana_2`, `hora_egreso_domingo_semana_2`" +
                ", `hora_ingreso_lunes_semana_3`, `hora_egreso_lunes_semana_3`,`hora_ingreso_martes_semana_3`, `hora_egreso_martes_semana_3`, `hora_ingreso_miercoles_semana_3`, `hora_egreso_miercoles_semana_3`, `hora_ingreso_jueves_semana_3`, `hora_egreso_jueves_semana_3`, `hora_ingreso_viernes_semana_3`, `hora_egreso_viernes_semana_3`, `hora_ingreso_sabado_semana_3`, `hora_egreso_sabado_semana_3`, `hora_ingreso_domingo_semana_3`, `hora_egreso_domingo_semana_3`" +
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
        console.log(error)
        res.json({ estado: "error", data: error });
    }
});

servicioRoutes.get("/verServiciosAsignables", verificarToken, async (req: any, res: Response) => {
    try {

        const result: any =
        await query("select * from horario_cliente_view where asignado=0");

        res.json({
            estado: "succes",
            mensaje: "Servicios asignables retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});


/* servicioRoutes.post('/enviarMailTest', async (req:Request, res:Response)=>{
    const emailEnvio = new emailClass()

    //  console.log(email);
      try {
          const envio = await emailEnvio.enviarEmail("marquezemiliano1988@gmail.com", "Asignacion servicio", "Nuevo servicio asignado y creado con exito", "");
          res.json({
              estado:"success",
              mensaje: "Servicio asignado con exito", 
              emailResult: envio
          })
      } catch (error) {
          res.json({
              estado:"error",
              mensaje: "No se pudo enviar el correo", 
              emailResult: error
          })
      }
}); */

servicioRoutes.put("/asignarServicioAempleado", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;
        const id=body.id_horario_cliente;
        const id_empleado = body.id_empleado; 
        const id_user = body.id_user;
    await query("start transaction");
        const result: any = await query(   // hacemos 3 controles para saber q no esta asignada
            "UPDATE `horario_cliente` SET `asignado` = 1 WHERE `horario_cliente`.`id_horario_cliente` = ?", [id]
        );

   
        const result2: any = await query(   // hacemos 3 controles para saber q no esta asignada
            "UPDATE `frecuencia_horaria` SET `asignado` = 1 ,  `id_empleado` = ?, `id_usr` = ? WHERE `frecuencia_horaria`.`id_horario_cliente` = ?", [id_empleado,id_user,id]
        );

 await query("commit");
        if (result.affectedRows == 0) {
            res.json({
                estado: "succes",
                mensaje: "No se realizo ningun cambio",
                data: result,

            });
        } else {
           
          enviarCorreoACliente(id, id_empleado);
            res.json({
                estado: "succes",
                mensaje: "Servicio asignado con exito",
                data: result,

            });


        }


    } catch (error) {
        
 await query("rollback");
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
            "WHERE ((`empleado`.`id_empleado` =?) AND ISNULL(`empleado`.`deleted_at_emp`) AND (`frecuencia_horaria`.`asignado` =?))",
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
            " WHERE `frecuencia_horaria`.`id_frecuencia_horaria` = ?", [deleted_at, id_usr, id_frecuencia_horaria]
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

servicioRoutes.get("/getMesCalendarioTodosLosServcios", verificarToken, async (req: any, res: Response) => {


    try {


        const body = req.body;
      

        let acumuladorSemana1 = 0;
        let acumuladorSemana2 = 0;
        let acumuladorSemana3 = 0;
        let acumuladorSemana4 = 0;

        const resultSemana1: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana1` where ISNULL(`deleted_at`) and `asignado`=1"
        );

        Object.keys(resultSemana1).forEach(function (key) {
            var row = resultSemana1[key];
            acumuladorSemana1 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });

        const resultSemana2: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana2` where ISNULL(`deleted_at`) and `asignado`=1"
        );
        Object.keys(resultSemana2).forEach(function (key) {
            var row = resultSemana2[key];
            acumuladorSemana2 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const resultSemana3: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana3` where ISNULL(`deleted_at`) and `asignado`=1"
        );
        Object.keys(resultSemana3).forEach(function (key) {
            var row = resultSemana3[key];
            acumuladorSemana3 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const resultSemana4: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana4` where ISNULL(`deleted_at`) and `asignado`=1"
        );
        Object.keys(resultSemana4).forEach(function (key) {
            var row = resultSemana4[key];
            acumuladorSemana4 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const totalCargaHorario = acumuladorSemana1 + acumuladorSemana2 + acumuladorSemana3 + acumuladorSemana4;
       
        console.log(resultSemana1)
       if(resultSemana1.length === 0 && resultSemana2.length === 0 && resultSemana3.length === 0 && resultSemana4.length === 0) {
        res.json({
            estado: "succes",
            mensaje: "No se encontraron registros",
          
        });
       }else{
        res.json({
            estado: "succes",
            mensaje: "Servicio Mensuales retornados con exito",
            data: {
                mes: {
                    s1: resultSemana1,
                    s2: resultSemana2,
                    s3: resultSemana3,
                    s4: resultSemana4,
                },
                totalCargaHorario: totalCargaHorario
            }
        });
       }
    


    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

servicioRoutes.post("/getMesCalendario", verificarToken, async (req: any, res: Response) => {


    try {


        const body = req.body;
        const id_empleado = body.id;

        let acumuladorSemana1 = 0;
        let acumuladorSemana2 = 0;
        let acumuladorSemana3 = 0;
        let acumuladorSemana4 = 0;

        const resultSemana1: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana1` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1", [id_empleado]
        );

        Object.keys(resultSemana1).forEach(function (key) {
            var row = resultSemana1[key];
            acumuladorSemana1 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });

        const resultSemana2: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana2` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1", [id_empleado]
        );
        Object.keys(resultSemana2).forEach(function (key) {
            var row = resultSemana2[key];
            acumuladorSemana2 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const resultSemana3: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana3` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1", [id_empleado]
        );
        Object.keys(resultSemana3).forEach(function (key) {
            var row = resultSemana3[key];
            acumuladorSemana3 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const resultSemana4: any = await query(   // 
            "SELECT * FROM `mes_calendario_x_empleado_semana4` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1", [id_empleado]
        );
        Object.keys(resultSemana4).forEach(function (key) {
            var row = resultSemana4[key];
            acumuladorSemana4 += row.lunes_carga + row.martes_carga + row.miercoles_carga + row.jueves_carga + row.viernes_carga + row.sabado_carga + row.domingo_carga;
        });
        const totalCargaHorario = acumuladorSemana1 + acumuladorSemana2 + acumuladorSemana3 + acumuladorSemana4;
       
        console.log(resultSemana1)
       if(resultSemana1.length === 0 && resultSemana2.length === 0 && resultSemana3.length === 0 && resultSemana4.length === 0) {
        res.json({
            estado: "succes",
            mensaje: "No se encontraron registros",
          
        });
       }else{
        res.json({
            estado: "succes",
            mensaje: "Servicio Mensuales retornados con exito",
            data: {
                mes: {
                    s1: resultSemana1,
                    s2: resultSemana2,
                    s3: resultSemana3,
                    s4: resultSemana4,
                },
                totalCargaHorario: totalCargaHorario
            }
        });
       }
    


    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

///// FUNCIONES



export default servicioRoutes;

async function enviarCorreoACliente(id_horario_cliente: number, id_empleado: number) {


    let emailCliente: string = "";
    let nombreCliente: string = "";

    let nombreEmpleado: string = "";
    let dniEmpleado: number = 0;


    const resultCliente: any = await query("SELECT * FROM `cliente` INNER join frecuencia_horaria on frecuencia_horaria.id_cliente=cliente.id_cliente WHERE id_horario_cliente=?", [id_horario_cliente]);
   console.log(resultCliente)
    Object.keys(resultCliente).forEach(function (key) {
        var row = resultCliente[key];
        console.log(row)
        emailCliente = row.email_cliente;
        nombreCliente = row.nombre;
    });

    const resultEmpleado: any = await query("SELECT * FROM `empleado` WHERE id_empleado=?", [id_empleado]);
    Object.keys(resultEmpleado).forEach(function (key) {
        var row = resultEmpleado[key];
        nombreEmpleado = row.nombre;
        dniEmpleado = row.dni;
    });

    ///////////////////////////ENVIAMOS MAIL
    try {
        const emailEnvio = new emailClass();
        const asunto = "Asignacion servicio";
        const cuerpoTexto = "Estimado " + nombreCliente + " le informamos que ha sido asignado el Empleado Nombre: " + nombreEmpleado + " y DNI: " + dniEmpleado + " para realizar el servico de limpieza";
        const envio =  emailEnvio.enviarEmail(emailCliente, asunto, cuerpoTexto, "");


        console.log(envio)
        /*   res.json({
              estado:"success",
              mensaje: "Email con exito", 
              emailResult: envio
          }) */
    } catch (error) {
        /*  res.json({
             estado:"error",
             mensaje: "No se pudo enviar el correo", 
             emailResult: error
         }) */
    }
    /////////////////////////// FIN ENVIAMOS MAIL

}

