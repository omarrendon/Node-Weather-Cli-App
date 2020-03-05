const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
// const clima = require('./clima/clima');

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para la información del clima",
    demand: true
  }
}).argv;

// console.log("Direccion: ", argv.direccion);
// lugar.getLugarLatting(argv.direccion)
//     .then(console.log)

// clima.getClima( 40.750000, -74.000000 )
//         .then( console.log )
//         .catch( console.log );

// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log)

const getInfo = async direccion => {
  try {
    const coordenadas = await lugar.getLugarLatting(direccion);
    const lugarClima = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

    return `El clima en la ciduad de ${direccion} es de ${lugarClima} centigrados`;
  }catch (err){
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log)