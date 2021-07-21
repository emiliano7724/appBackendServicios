import path from 'path';
import fs from 'fs';
import unidid from 'uniqid';
import { IfileUpload } from '../interfaces/file-upload';
import query from '../utils/promesas';


export default class FileSystem{
    
    constructor(){}

    private crearCarpetaUsuario(userId:string){
        
       try {
       
        const pathUser = path.resolve(__dirname, '../uploads', String(userId));
        console.log(pathUser)
        const pathUserTemp = pathUser+"/temp";
    

        const existe:boolean = fs.existsSync(pathUser);

        if(!existe){
            fs.mkdirSync(pathUser);
            fs.mkdirSync(pathUserTemp);
        }

        return pathUserTemp 
       } catch (error) {
          console.log("ERROR IMAGEN  ",error) 
       }
    
    }

    private generarNombreUnico(nombreOriginal:string):string{
        
        const nombreArr = nombreOriginal.split('.');  //[1,2,8]
        const extension = nombreArr[nombreArr.length-1];
        const idUnico = unidid();

        return `${idUnico}.${extension}`;

    }

    guardarImagenTemporal(id:string, file:IfileUpload):Promise<any>{

        return new Promise((resolve,reject)=>{
            const path = this.crearCarpetaUsuario(id);//donde la voy a guardar

            const nombreArchivo:string = this.generarNombreUnico(file.name); //con que nombre la voy a guardar
    
            file.mv(`${path}/${nombreArchivo}`, (error:any)=>{
                if(error){
                    return reject(error)
                }
                else{
           console.log("nombre a guardar en bd",nombreArchivo)
          query("UPDATE `usuario` SET `foto` =? WHERE `usuario`.`id_user` =?",[nombreArchivo,id]);
                    return resolve(true)
                }
            })
        })
    }

    private obtenerImagenesTemp(userId:string):Array<string>{

        const pathTemp = path.resolve(__dirname, '../uploads', userId, "temp");
        return fs.readdirSync(pathTemp);

    }

    imagenesDeTempHaciaPost(userId:string):Array<string>{
        const pathUserTemp = path.resolve(__dirname, '../uploads', String(userId), "temp");//De donde voy a mover la imagen -- origen
        const pathUserPost = path.resolve(__dirname, '../uploads', String(userId), "post")// Hacia donde lo voy a mover -- destino
        console.log("hello",pathUserTemp,pathUserPost)
        if(!fs.existsSync(pathUserTemp)){
            return []
        }

        if(!fs.existsSync(pathUserPost)){
            fs.mkdirSync(pathUserPost)
        }

        const imagenesTemp:Array<string> = this.obtenerImagenesTemp(String(userId));
 
        imagenesTemp.forEach(imagenes=>{
            fs.renameSync(`${pathUserTemp}/${imagenes}` , `${pathUserPost}/${imagenes}`);
        })
        
        return imagenesTemp;
    }

    getFotoUrl(userId:string, img:string):string{
      
        const pathFoto:string = path.resolve(__dirname, '../uploads',String(userId),'post', img);
console.log(pathFoto)
        if(fs.existsSync(pathFoto)){
            return pathFoto
        }
        else{
            return path.resolve(__dirname, '../assets/avatar-defecto.png')
        }
    }

    createCarpetaUploads():void{
        const pathUploads = path.resolve(__dirname, 'uploads');

        if(!fs.existsSync(pathUploads)){
            fs.mkdirSync(pathUploads);
        }
    }

}