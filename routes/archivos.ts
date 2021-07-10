import { Router, Response, Request } from "express";
import FileSystem from "../class/file-system";
import { IfileUpload } from "../interfaces/file-upload";
import { verificarToken } from "../middlewares/authentication";
import query from "../utils/promesas";


const archivosRoutes = Router();


const fileSystem = new FileSystem();


archivosRoutes.post("/upload", verificarToken, async (req: any, res: Response) => {
    const imag:IfileUpload = req.files.imag
    console.log("req0",req.body)
    if(!req.files){
        return res.status(400).json({
            estado:"error",
            mensaje: "no se subio archivo"
        })
    }
 try {
    const validacionTipoImagen = imag.mimetype.includes('image');
    if(!validacionTipoImagen){
        return res.status(400).json({
            estado:"error",
            mensaje: "formato incorrecto"
        })
    }
 } catch (error) {
    console.log("hola mundo" ,error)
 }
  

   
console.log(req.body.id)
    await fileSystem.guardarImagenTemporal(req.body.id, imag)

   
    res.json({
        estado:"success",
        data: imag
    })
});




///// FUNCIONES


export default archivosRoutes;

