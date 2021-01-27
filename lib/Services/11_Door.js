const genericService = require("./00_generic");

function initService(params) {
  let { Service } = params;
  return genericService(params, Service.Door);
}

module.exports = initService;
