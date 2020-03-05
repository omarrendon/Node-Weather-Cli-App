const axios = require("axios");

const getClima = async ( (lat, long) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&appid=b05ec5739dab6697bef61777023797c0&units=metric`);

    return respuesta.data.main.temp;
}) 

module.exports = {
    getClima
}