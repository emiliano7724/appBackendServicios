import express from 'express';
require('dotenv').config();
class Server {

    public app: express.Application;
    public host:string= String(process.env.SERVER_HOST);
    public puerto: number =Number(process.env.SERVER_PORT)
    
    constructor() {
        this.app = express();
    }

    start(callback: any) {
        this.app.listen(this.puerto, this.host, callback);
    }

}

export default Server;

