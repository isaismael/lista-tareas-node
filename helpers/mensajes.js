const { rejects } = require('assert');
const { resolve } = require('path');

require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('============================'.green);
        console.log('   Seleccione una opción'.green);
        console.log('============================\n'.green);
    
        console.log(`${'1'.green}. Crear tarea`);
        console.log(`${'2'.green}. Listar tarea`);
        console.log(`${'3'.green}. Lista tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir \n`);
    
        //preparamos la interface para el usuario, redline ya es porpio de node, no hay que instalarlo
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
        //question si necesitamos el stdout va el question
        //opt es opcion seleccionada
        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    });
}


const pausa = () => {

    return new Promise (resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
        //question si necesitamos el stdout va el question
        //esto hace que se pausa el programa y cuando el usuario presione enter avanza
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}