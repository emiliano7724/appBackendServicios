import { Router, Response, Request } from "express";
import connection from "../bin/connection";
import { IEmpleado } from "../interfaces/empleado";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";

const dashboardRoutes = Router();

let empleados: IEmpleado[] = [];
let empleado: IEmpleado;

dashboardRoutes.get("/getTopEmpleadosConMenosHorasDeServicios", verificarToken, async (req: any, res: Response) => {
    try {




        const resultEmpleados: any = await query(
            /// Almacenamos primero cada empleoado
            "SELECT * FROM empleado where isnull(deleted_at)"
        );



       

        Object.keys(resultEmpleados).forEach( function (key) {    /// EN ESTE ASYNC CREO Q ESTA EL TEMA



            /// por cada empleado encontrado debemos buscar la totalidad de horas que trabaja
            const row = resultEmpleados[key];
            const nombre_empleado = row.nombre;
            const id_empleado = row.id_empleado;
            let acumuladorSemana1 = 0;
            let acumuladorSemana2 = 0;
            let acumuladorSemana3 = 0;
            let acumuladorSemana4 = 0;


            const resultSemana1: any =calcularSemana1(row.id_empleado);
        console.log("Semana 1:",resultSemana1)
          acumuladorSemana1=  acumulaSemana1(acumuladorSemana1,resultSemana1);
            //console.log"(" Hello wordl", acumuladorSemana1);


            const resultSemana2: any =  query(
                //
                "SELECT * FROM `mes_calendario_x_empleado_semana2` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",
                [row.id_empleado]
            );
            Object.keys(resultSemana2).forEach(function (key) {
                var row = resultSemana2[key];
                acumuladorSemana2 +=
                    row.lunes_carga +
                    row.martes_carga +
                    row.miercoles_carga +
                    row.jueves_carga +
                    row.viernes_carga +
                    row.sabado_carga +
                    row.domingo_carga;
            });


            const resultSemana3: any =  query(
                //
                "SELECT * FROM `mes_calendario_x_empleado_semana3` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",
                [row.id_empleado]
            );
            Object.keys(resultSemana3).forEach(function (key) {
                var row = resultSemana3[key];
                acumuladorSemana3 +=
                    row.lunes_carga +
                    row.martes_carga +
                    row.miercoles_carga +
                    row.jueves_carga +
                    row.viernes_carga +
                    row.sabado_carga +
                    row.domingo_carga;
            });


            const resultSemana4: any =  query(
                //
                "SELECT * FROM `mes_calendario_x_empleado_semana4` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",
                [row.id_empleado]
            );
            Object.keys(resultSemana4).forEach(function (key) {
                var row = resultSemana4[key];
                acumuladorSemana4 +=
                    row.lunes_carga +
                    row.martes_carga +
                    row.miercoles_carga +
                    row.jueves_carga +
                    row.viernes_carga +
                    row.sabado_carga +
                    row.domingo_carga;
            });


            const totalCargaHorario =
                acumuladorSemana1 +
                acumuladorSemana2 +
                acumuladorSemana3 +
                acumuladorSemana4;


            empleado = {
                id_empleado: id_empleado,
                nombre_empleado: nombre_empleado,
                totalCargaHorario: totalCargaHorario
            }
            // console.log(totalCargaHorario)

            empleados.push(empleado);
            //console.log(empleados)


        });  /// FIN REPETITIVA EMPLEADOS

      //  console.log(empleados)
        res.json({
            estado: "succes",
            mensaje: "Retornado con exito",
            data: empleados
        });

    } catch (error) {
        console.log(error)
    }
}
);

///// FUNCIONES,
function acumulaSemana1(acumuladorSemana1: number,resultSemana1: { [x: string]: any; }):number {

    Object.keys(resultSemana1).forEach(function (key) {

        var row = resultSemana1[key];

        acumuladorSemana1 +=
            row.lunes_carga +
            row.martes_carga +
            row.miercoles_carga +
            row.jueves_carga +
            row.viernes_carga +
            row.sabado_carga +
            row.domingo_carga;
    });

    console.log(acumuladorSemana1)
    return acumuladorSemana1;
}
  function calcularSemana1(id_empleado: any) {

     let resultado:any;
  connection.query(
                //
                "SELECT * FROM `mes_calendario_x_empleado_semana1` where id_empleado=? and ISNULL(`deleted_at`) and `asignado`=1",
                [id_empleado],(error,result)=>{
  
                    if(result){
                    resultado=result;
                    }
                }
            ); 

           return resultado;
          
}
export default dashboardRoutes;


