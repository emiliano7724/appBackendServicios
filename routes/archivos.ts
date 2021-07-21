import { Router, Response, Request } from "express";
import FileSystem from "../class/file-system";
import { IfileUpload } from "../interfaces/file-upload";
import { verificarToken } from "../middlewares/authentication";



const archivosRoutes = Router();


const fileSystem = new FileSystem();


archivosRoutes.post("/upload", verificarToken, async (req: any, res: Response) => {
    const imag:IfileUpload = req.files.imag
   
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
    console.log("A ocurrido un error" ,error)
 }
  
    await fileSystem.guardarImagenTemporal(req.usuario.id, imag)
    await fileSystem.imagenesDeTempHaciaPost(req.usuario.id) // aca mismo ya la confirmamos
   
    res.json({
        estado:"success",
        data: imag
    })
});

archivosRoutes.post('/getImg', verificarToken, (req:any, res:Response)=>{
   
    let body = req.body;

    body.usuario = req.usuario.id;
   
  
     const img = req.body.foto;
     try {
    const foto = fileSystem.getFotoUrl(body.usuario, img);
   
   res.sendFile(foto);
  /*  res.json({
    estado:"success",
    data: imagen
}) */

   
 
    } catch (error) {
        console.log(error)
    }
   

    
});




///// FUNCIONES


export default archivosRoutes;

