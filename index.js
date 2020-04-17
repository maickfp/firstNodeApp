// modulos propios
const {iva, ivaCanastaFamiliar, ivaVehiculos} = require("./modules/iva");
const log = require("./modules/logs");
// modulos terceros
const faker = require("faker")

log.info(`El valor del IVA es: ${iva}%`);
log.info(`El valor del IVA Vehiculos es: ${ivaVehiculos}%`);
log.info(`El valor del IVA Canasta Familiar es: ${ivaCanastaFamiliar}%`);

console.log("\n\n");

log.info(faker.name.findName());
log.info(faker.lorem.words(10));