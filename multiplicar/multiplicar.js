const fs = require('fs');
const colors = require('colors');


let data = '';

let listarTabla = ( base, limite = 10 ) => {

    console.log(`=====================`);
    console.log(`Tabla de ${base}`);
    console.log(`=====================`);

    for( let i = 1; i <= limite; i++) {
        let res = base * i
        console.log(`${ base } * ${ i } = ${ res }\n`);
    };

}

let crearArchivo = ( base, limite = 10 ) => {
    
    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introductido ${base} no es un numero`);
            return;
        }

        for( let i = 1; i <= limite; i++) {
            let res = base * i
            data += (`${ base } * ${ i } = ${ res }\n`);
        };
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err) 
            else {
                resolve(`tabla-${base}.txt`.green);
            }
        });
    } )

}

module.exports = {
    crearArchivo, 
    listarTabla
};
