const {iva, ivaCanastaFamiliar, ivaVehiculos} = require("./modules/iva");
const log = require("./modules/logs");

log.info(`El valor del IVA es: ${iva}%`);
log.info(`El valor del IVA Vehiculos es: ${ivaVehiculos}%`);
log.info(`El valor del IVA Canasta Familiar es: ${ivaCanastaFamiliar}%`);
log.error();