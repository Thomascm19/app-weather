const axios = require('axios');

const getWeather = async(lat,lon) =>{


const res = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6907d289e10d714a6e88b30761fae22`)

return res.data.main.temp;
}
module.exports= {
getWeather
}