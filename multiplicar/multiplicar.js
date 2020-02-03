const fs = require('fs');
const colors = require('colors');

let txt = '';
let casa = 'casaarbol';

let listarTabla = (base, limite) => {

    console.log(`================`.green);
    console.log(`================`.green);
    console.log(`================`.green);


    for (let i = 0; i < limite; i++) {
        console.log(`${base}*${i+1}=${base*(i+1)}\n`);
    }

    return;

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
        } else {
            for (let i = 0; i < limite; i++) {
                txt += `${base}*${i+1}=${base*(i+1)}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-Hasta el ${limite}.txt`, txt, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}. Hasta el ${limite}.txt`);
            })
        };
    })

}

module.exports = {
    crearArchivo,
    casa,
    listarTabla
}