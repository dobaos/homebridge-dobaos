const genericService = require("./00_generic");

function initService(params) {
  let { Service } = params;
  return genericService(params, Service.Switch);
}

module.exports = initService;
