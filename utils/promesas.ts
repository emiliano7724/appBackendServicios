import connection from "../bin/connection";

const query = (query: string, variables: Array<any> = []) => {
    return new Promise((resolve, reject) => {
try {
    connection.query(query, variables, (error, result) => {
          
        if (error) {
            return reject(error);
 
        } else {
            return resolve(result);
         
        }
    });
} catch (error) {
    console.log(error)
}
        
    });
};

export default query;
