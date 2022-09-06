const argv = require('yargs')
.options('b',{
    alias: 'base',
    type: 'number',
    demandOption:'true',
    describe: 'Setea la base por la cual se multiplica'
})
.options('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption:'false',
    default:'false',
    describe: 'Lista las operaciones de Tabla de Multiplicar'
})
.options('h',{
        alias: 'hasta',
        type: 'number',
        demandOption:'false',
        default:'10',
        describe: 'Hasta donde quiero multiplicar'
    })
.check((argv,options)=> {
    if (isNaN(argv.b)) {
        throw 'La base debe ser un numero'
    }
    return true
})
.argv

module.exports = argv