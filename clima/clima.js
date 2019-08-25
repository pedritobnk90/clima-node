const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ebb2ddb8a72eed6752a8e202339a29b5&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}