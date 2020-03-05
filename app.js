const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
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

clima.getClima( 40.750000, -74.000000 )
        .then( console.log )
        .catch( console.log );

// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log)

// const getInfo = async (direccion) => {
//     const coordenadas = await lugar.getLugarLatting(argv.direccion);
// }