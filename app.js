const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv;

const colors = require('colors')
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch( comando ) {
    case 'listar': 
        listarTabla( argv.base, argv.limite );
    break;
    case 'crear': 
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo creado: ${ archivo }`)
        }).catch((err) => {
            console.log(err, argv.base);
        });
    break;
    default: 
        console.log('Comando no reconocido');

}





