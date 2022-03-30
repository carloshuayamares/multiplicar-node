//hay tres tipos de requireds
//const fs = require('fs');  paquetes nativos de node
//const fs = require('express') ; no nativos
//const fs = require('./fs') ; archivos creados 
const { crearArchivo } = require('./multiplicar/multiplicar')
const colors = require('colors');
//const { casa } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;

let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado', archivo.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(casa);
//console.log(parametro);

//console.log(argv);
//console.log(argv2);