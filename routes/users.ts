import { Router, Response, Request } from "express";
import { Token } from "../class/token";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";
import bcrypt from "bcryptjs";

const userRoutes = Router();




userRoutes.post("/login", async (req: any, res: Response) => {
    try {
        const body = req.body;
        const name = body.name;
        const password = body.password;
        let passEnc: string = "";
        const result: any = await query("SELECT * FROM `usuario` WHERE name = ?", [
            name,
        ]);
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            passEnc = row.password;
        });
        if (result.length > 0) {
            if (compararPassword(password, passEnc)) {
                const tokenJwt = Token.getToken({
                    id: result.id_user,
                    name: result.name,
                    email: result.email,
                    id_rol: result.id_rol,
                });

                res.json({
                    estado: "succes",
                    mensaje: "Login exitoso",
                    data: result,
                    token: tokenJwt,
                });
            } else {
                mensajeLoginFailed(res);
            }
        } else {
            mensajeLoginFailed(res);
        }
    } catch (error) {
        //const rollback = await query("rollback");
        // res.json({ estado: "error", data: error, rollabck: rollback });
    }
});

userRoutes.get("/index", verificarToken, async (req: any, res: Response) => {    
    try {
      
        const result = await query(
            "SELECT * FROM `usuario` WHERE ISNULL(`deleted_at`)"
        );

        res.json({
            estado: "succes",
            mensaje: "Usuarios retornados con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

userRoutes.post("/create", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;
        const name = body.name;
        const email = body.email;
        const id_empresa = 2; //   A LA EMPRESA LA HARDCODEAMOS EN ESTA VERSION DEMO
        const id_rol = 2; //       AL ROL LA HARDCODEAMOS EN ESTA VERSION DEMO
        const password = bcrypt.hashSync(body.password, 10);

        const result = await query(
            "INSERT INTO `usuario` (`name`, `password`, `email`, `id_empresa`, `id_rol`)VALUES(?,?,?,?,?)",
            [name, password, email, id_empresa, id_rol]
        );

        res.json({
            estado: "succes",
            mensaje: "Usuario creado con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

userRoutes.put("/update", verificarToken, async (req: any, res: Response) => {
    try {
        const body = req.body;
        const name = body.name;
        const email = body.email;
        const updated_at = new Date();
        const id_user = body.id_user;
        const result = await query(
            "UPDATE `usuario` SET `name` = ?, `email` = ?, `updated_at` = ? WHERE `usuario`.`id_user` = ?",
            [name, email, updated_at, id_user]
        );


        res.json({
            estado: "succes",
            mensaje: "Usuario actualizado con exito",
            data: result,

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

userRoutes.put("/updatePassword", verificarToken, async (req: any, res: Response) => {
    try {


        const body = req.body;
        const id_user = body.id_user;
        const passwordActual = body.passwordActual;// aca viene plana
        const passwordNueva = body.passwordNueva; // aca viene plana
        let passEnc: string = "";
        const updated_at = new Date();
        const result: any = await query("SELECT * FROM `usuario` WHERE id_user=?", [id_user]);
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            passEnc = row.password;
        });
        if (compararPassword(passwordActual, passEnc)) { // si coincide la password pasada por la vista con la de la bd encriptamos la nueva password
            const passwordNuevaEnc = bcrypt.hashSync(passwordNueva, 10); // encriptamos la nueva password 
            const result = await query(
                "UPDATE `usuario` SET `password` = ? , `updated_at` = ? WHERE `usuario`.`id_user` = ?",
                [passwordNuevaEnc, updated_at, id_user]
            );
            res.json({
                estado: "succes",
                mensaje: "Usuario actualizado con exito",
                data: result,

            });
        }
        else {
            res.json({
                estado: "error",
                mensaje: "La contraseña actual no coincide con la ingresada",
                data: "",

            });
        }
      
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

///// FUNCIONES

function mensajeLoginFailed(res: Response) {
    res.json({
        estado: "error",
        mensaje: "Usuario o contraseña incorrecta",
        data: "",
    });
}
function compararPassword(password: string, passwordEnc: string): boolean {
    if (bcrypt.compareSync(password, passwordEnc)) {
        return true;
    } else {
        return false;
    }
}
export default userRoutes;

