const axios = require('axios');


const getPlace = async(dir) =>{

    const encodeUrl = encodeURI(dir)

    //Se crea la conexion a la API
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,    
        headers: {'X-RapidAPI-Key': '0b8aa442bemshaeb796b34599e44p1f296bjsnc54798115fd5'}
      });
    
    
      //Se realiza la peticion a la API para obtener unicamente la ciudad seleccionada
      const resp = await instance.get();

      if(resp.data.Results.length === 0){
          throw new Error(`No hay resultados para ${dir}`)
      }

      const data = resp.data.Results[0];
      const direccion = data.name
      const lat = data.lat
      const long = data.lon

        return {
            direccion,
            lat,
            long
        }
}

module.exports = {
    getPlace
}
