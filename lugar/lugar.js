const axios = require("axios");

const getLugarLatting = async direccion => {
  const encodedUrl = encodeURI(direccion);
  console.log(encodedUrl);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 1000,
    headers: {
      "x-rapidapi-key": "b1bd70c7d8msh972269c0b596fd5p122f8ejsncc4de47f2687"
    }
  });

  const respuesta = await instance.get();

  if (respuesta.data.Results.length === 0) {
    throw new Error(`No se encontro la hubicacion de ${direccion}`);
  }

  const data = respuesta.data.Results[0];
  const locacion = data.name;
  const latitud = data.lat;
  const longitud = data.lon;

  //   instance.get()
  //     .then(res => {
  //       console.log(res.data.Results[0]);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  return {
    locacion,
    latitud,
    longitud
  };
};

module.exports = {
  getLugarLatting
};
