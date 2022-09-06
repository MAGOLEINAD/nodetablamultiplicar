console.clear()
const colors = require('colors');

const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')


crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'CREADO'))
.catch(err => console.log(err))


// console.log(argv);
// console.log('La base de Yargs es de ' , argv.b);
// console.log(new Intl.NumberFormat().format(leinad.toFixed(2)));