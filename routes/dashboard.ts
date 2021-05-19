import { Router, Response, Request } from "express";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const dashboardRoutes = Router();





dashboardRoutes.get("/getCantidadEmpleadosSinServicios", verificarToken, async (req: any, res: Response) => {
    try {

        const result = await query(   // hacemos 3 controles para saber q no esta asignada
            "*"
        );

        res.json({
            estado: "succes",
            mensaje: "Retornado con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});




///// FUNCIONES


export default dashboardRoutes;

