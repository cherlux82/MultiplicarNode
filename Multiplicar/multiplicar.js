const colors = require('colors');
const fs = require('fs');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es numerico`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla_del_${base}_al_${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tablas/tabla_del_${base}_al_${limite}.txt`);
        });
    });

}

let listarTable = (base, limite) => {

    console.log("====================================================================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("====================================================================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

};
module.exports = {
    crearArchivo,
    listarTable
};