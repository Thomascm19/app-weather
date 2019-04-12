const getPlace = require('./GetPlace/getPlace')
const getWeather = require('./GetWeather/GetWeather')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad donde de obtiene el clima',
        demand: true
    }
}).argv

/*
getPlace.getPlace(argv.direccion)
       .then(console.log);

getWeather.getWeather(5.060000,-75.519997)
    .then(console.log)
    .catch(console.log)
*/

const getInfo = async(direccion) => {

    try {
        const coord = await getPlace.getPlace(direccion);
        const temp = await getWeather.getWeather(coord.lat, coord.long);
        return `La temperatura de ${direccion} es de ${temp}`    
    } catch (e) {
        return `No se pudo obtener la informacion del clima de ${direccion}.`;
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)