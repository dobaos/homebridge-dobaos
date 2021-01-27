const Dobaos = require("dobaos.js");
const DobaosAccessory = require("./lib/accessory");

let Service, Characteristic;
let dob;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerPlatform("homebridge-dobaos", "Dobaos", DobaosPlatform);
};

function DobaosPlatform(log, config) {
  this._config = {};
  this.log = log;
  if (Object.prototype.hasOwnProperty.call(config, "redis")) {
    dob = Dobaos(config["redis"]);
  } else {
    dob = Dobaos();
  }
  dob.setMaxListeners(0);
  dob.on("error", e => {
    console.log(`Dobaos error: ${e.message}`);
  });
  dob.init();
  if (Object.prototype.hasOwnProperty.call(config, "accessories")) {
    this._config.accessories = config["accessories"].slice();
  }
}

DobaosPlatform.prototype = {
  accessories: function(cb) {
    let foundAccessories = [];
    let params = {
      Service: Service,
      Characteristic: Characteristic,
      Dobaos: dob,
      log: this.log
    };
    this._config.accessories.forEach(a => {
      let newAccessory = new DobaosAccessory(Object.assign({ accessory: a }, params));
      foundAccessories.push(newAccessory);
    });
    cb(foundAccessories);
  }
};
