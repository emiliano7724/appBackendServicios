import nodemailer from 'nodemailer';
import path from 'path'

export default class email {

    host:string = "smtp.gmail.com"
    port:number = 587
    secure:boolean = false
    tsl:boolean = false
    auth = {
        user: "appmynnoreply@gmail.com",
        pass: "apmynnoreply123456"
    }
    constructor(){

    }
    // private consultarDatos(){
    //    const datosEmail = await query("select host, post, secure, lts, user,pass from cuentas_correo ")
    //    return datosEmail //[{host: smtp.gmail.com, port: 587}]
    // }

    enviarEmail(cuentaCorreoDestino:string, asunto:string, cuerpoEmail:string ="", html:string = ""){

        return new Promise((resolve,reject)=>{
            const transporter = nodemailer.createTransport({
                host: this.host,
                port: this.port,
                secure: this.secure,
                auth:{
                    user: this.auth.user,
                    pass: this.auth.pass
                },
                tls:{
                    rejectUnauthorized: this.tsl
                }
            })
    
            const mailOptions = {
                from: this.auth.user,
                to: cuentaCorreoDestino,
                subject: asunto,
                text: cuerpoEmail,
                html: html,
               /*  attachments:[
                    {
                        path: path.resolve(__dirname, '../assets', 'imagen_default.jpg')
                    }
                ] */
            }
    
            nodemailer.createTestAccount((error)=>{
              console.log(mailOptions)
                transporter.sendMail(mailOptions,(error, info)=>{
                    if(error){
                        reject("Soy el error "+ error)
                    }
                    else{
                        return resolve(info)
                        console.log(info)
                    }
                })
            })
        })

    }
}