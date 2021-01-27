function genericService(params, stype) {
    Service = params.Service;
    Characteristic = params.Characteristic;
    Dobaos = params.Dobaos;
    let s = params.config;
    log = params.log;
    let newService = new stype(s.name);
    let echars = params.ECharacteristic;
    s.characteristics.forEach(c => {
        const findByName = t => t.name === c.type;
        let found = echars.find(findByName);
        if (found) {
            found.handler(Dobaos, newService, found.char, c);
        }
    });
    return newService;
}

module.exports = genericService;
