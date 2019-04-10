const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad donde de obtiene el clima',
        demand: true
    }
}).argv


const encodeUrl = encodeURI(argv.direccion)


//Se crea la conexion a la API
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,    
    headers: {'X-RapidAPI-Key': '0b8aa442bemshaeb796b34599e44p1f296bjsnc54798115fd5'}
  });


  //Se realiza la peticion a la API para obtener unicamente la ciudad seleccionada
  instance.get()
    .then(res => {
        console.log(res.data.Results[0]);
    })
    .catch(err => {
        console.log('Error!!',err)
    })