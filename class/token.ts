import jwt from 'jsonwebtoken';

class Token {
    private static seed: string = "estaEsMiSemilla";
    private static caducidad: string = "30d";

    constructor() { }

    static getToken(payload: any): string {
      
        const token = jwt.sign(
            {
                usuario: payload
            },
            this.seed,
            { expiresIn: this.caducidad }
        )

        return token;
    }

    static checkToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.seed, (error, decode) => {
                if (error) {
                    return reject(error)
                }
                else {
                    return resolve(decode)
                }
            })
        })
    }
}


export { Token };