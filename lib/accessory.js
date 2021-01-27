let Service, Characteristic;
let Dobaos;

const EServices = require('./Services/00_index');
const ECharacteristic = require("./Services/00_chars");

function DobaosAccessory(params) {
  Service = params.Service;
  Characteristic = params.Characteristic;
  Dobaos = params.Dobaos;
  this.log = params.log;
  this.name = params.accessory.name;
  this._services = params.accessory.services.slice();
  this.services = [];

  // Create information service for accessory.
  let informationService = new Service.AccessoryInformation();
  informationService
    .setCharacteristic(Characteristic.Manufacturer, "Dobaos")
    .setCharacteristic(Characteristic.Model, "<unknown>")
    .setCharacteristic(Characteristic.SerialNumber, "<unknown>");
  this.services.push(informationService);

  let echars = ECharacteristic(Characteristic);

  // Now parse _services, create service for each of them.
  this._services.forEach(s => {
    // Now get characteristics from config.
    let newService;
    let params = {
      Service: Service,
      Characteristic: Characteristic,
      ECharacteristic: echars,
      Dobaos: Dobaos,
      log: this.log,
      config: s
    };
    const findByServiceType = t => {
      return t.type === s.type
    };
    const serviceFound = EServices.find(findByServiceType);
    if (serviceFound) {
      newService = serviceFound.init(params);
    } else {
      throw new Error('Cannot find service: ' + s.type);
    }
    this.services.push(newService);
  })
}

DobaosAccessory.prototype.getServices = function () {
  return this.services;
};

module.exports = DobaosAccessory;
