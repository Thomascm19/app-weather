const getPlace = require('./GetPlace/getPlace')
const getWeather = require('./GetWeather/GetWeather')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad donde de obtiene el clima',
        demand: true
    }
}).argv

//getPlace.getPlace(argv.direccion)
//       .then(console.log);
//
getWeather.getWeather(5.060000,-75.519997)
    .then(console.log)
    .catch(console.log)
    