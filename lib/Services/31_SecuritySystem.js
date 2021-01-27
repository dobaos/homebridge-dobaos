const genericService = require("./00_generic");

function initService(params) {
  let { Service } = params;
  return genericService(params, Service.SecuritySystem);
}

module.exports = initService;
