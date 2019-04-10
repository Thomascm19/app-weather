const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad donde de obtiene el clima',
        demand: true
    }
}).argv

console.log(argv.direccion);