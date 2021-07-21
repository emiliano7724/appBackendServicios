import { Router, Response, Request } from "express";
import { Token } from "../class/token";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";
import bcrypt from "bcryptjs";

const userRoutes = Router();


userRoutes.get("/getUser", verificarToken, async (req: any, res: Response) => {    
    try {
      
        const usuario = req.usuario; // esto surge del decoded en verificar token 
 
        const result:any = await query(
            "SELECT * FROM `usuario` inner join rol on rol.id_rol=usuario.id_rol inner join empresa on empresa.id_empresa = usuario.id_empresa WHERE `id_user`="+usuario.id +" and ISNULL (deleted_at)"
          
        );

        res.json({
            estado: "succes",
            mensaje: "Usuario retornado con exito",
            data: result[0],

        });
    } catch (error) {
        res.json({ estado: "error", data: error });
    }
});

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
            
             const user={ 
                id: result[0].id_user,
                name: result[0].name,
                email: result[0].email,
                id_rol: result[0].id_rol}

              const tokenJwt = Token.getToken(
                   user
                );

                res.json({
                    estado: "succes",
                    mensaje: "Login exitoso",
                    data: result,
                    token: tokenJwt,
                });
            } else {
                
              // console.log("contraseña incorrecta")
                mensajeLoginFailed(res);
            }
        } else {
          // console.log("no existe el usuario")
            mensajeLoginFailed(res); 
        }
    } catch (error) {
        //const rollback = await query("rollback");
        res.json({ estado: "error", data: error });
    }
});

userRoutes.get("/index", verificarToken, async (req: any, res: Response) => {    
    try {
      
        const result = await query(
            "SELECT * FROM `usuario` inner join empresa on empresa.id_empresa=usuario.id_empresa inner join rol on rol.id_rol=usuario.id_rol WHERE ISNULL(`deleted_at`)"
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
     
        const id_user = body.id_user;

        const telefono = body.telefono;
        const result = await query(
            "UPDATE `usuario` SET `name` = ?, `telefono` = ?, `email` = ? WHERE `usuario`.`id_user` = ?",
            [name,telefono, email,  id_user]
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
        const usuario = req.usuario // surge del decoded del token
      
        const passwordActual = body.passwordActual;// aca viene plana
        const passwordNuevo = body.passwordNuevo; // aca viene plana


        let passEnc: string = "";
        
        const result: any = await query("SELECT * FROM `usuario` WHERE id_user=?", [usuario.id]);
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            passEnc = row.password;
        });
        if (compararPassword(passwordActual, passEnc)) { // si coincide la password pasada por la vista con la de la bd encriptamos la nueva password
            console.log(passwordNuevo)
            const passwordNuevaEnc = bcrypt.hashSync(passwordNuevo, 10); // encriptamos la nueva password 
            const result = await query(
                "UPDATE `usuario` SET `password` = ?  WHERE `usuario`.`id_user` = ?",
                [passwordNuevaEnc, usuario.id]
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
       console.log(error)
        res.json({ estado: "error", data: error });
    }
});

///// FUNCIONES

function mensajeLoginFailed(res: Response) {
    res.json({
        estado: "invalidLogin",
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

