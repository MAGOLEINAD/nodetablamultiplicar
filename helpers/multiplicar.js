const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base = 5,listar = false,hasta=10) => {
    try {
    
    let salida = ''
    for (let i = 1; i <=hasta; i++) {
    
         salida += (`${base} ${'x'.red} ${i} ${'='.brightRed} ${base*i}\n`);
    }
    if (listar === true) {
    console.log('======================'.green);
    console.log('Tabla del'.green, colors.blue(base) );
    console.log('======================'.green);
    
    console.log (salida);
    }
   
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
       
    return `tabla-${base}`
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}