const argv = require("./config/yargs").argv;
const { crearArchivo, listarTable } = require('./Multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("Listar");
        let base = argv.base;
        let limite = argv.limite;
        console.log(`Base:${base} Limite:${limite}`);
        listarTable(base, limite);
        break;
    case 'crear':
        console.log("Crear");
        console.log(`Base ${argv.base}`);
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo Creado`, colors.green(archivo))).catch(err => { console.log(err); });
        break;
    default:
        console.log("Comando desconocido");
        break;

}