let handlers  = {
  simple_r: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('get', cb => {
        dobaos.getStored(cparam.status)
          .then(payload => {
            cb(null, payload.value);
          })
          .catch(e => {
            cb(e);
          });
      });
    // register listener for dobaos
    const processDobaosValue = payload => {
      if (Array.isArray(payload)) {
        return payload.forEach(processDobaosValue);
      }
      
      if (payload.id === cparam.status ||
          payload.name === cparam.status) {
        service
          .getCharacteristic(ctype)
          .updateValue(payload.value);
      }
    };
    
    dobaos.on('datapoint value', processDobaosValue);
  },
  simple_w: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('set', (value, cb) => {
        dobaos.setValue({id: cparam.control, value: value})
          .then(_ => {
            cb(null);
          })
          .catch(e => {
            cb(e);
          });
      });
  },
  simple_rw: function(dobaos, service, ctype, cparam) {
    handlers.simple_r(dobaos, service, ctype, cparam);
    handlers.simple_w(dobaos, service, ctype, cparam);
  },

  simpleWithState_r: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('get', cb => {
        dobaos.getStored(cparam.status)
          .then(payload => {
            cb(null, payload.value);
          })
          .catch(e => {
            cb(e);
          });
      });
    // register listener for dobaos
    const processDobaosValue = payload => {
      if (Array.isArray(payload)) {
        return payload.forEach(processDobaosValue);
      }
      
      if (payload.id === cparam.status ||
          payload.name === cparam.status) {
        service
          .getCharacteristic(ctype)
          .updateValue(payload.value);
      }
    };
    
    dobaos.on('datapoint value', processDobaosValue);
  },
  simpleWithState_w: function(dobaos, service, ctype, cparam) {
    let state = null;
    service
      .getCharacteristic(ctype)
      .on('set', (value, cb) => {
        if (state === value) return cb(null);
        dobaos.setValue({id: cparam.control, value: value})
          .then(_ => {
            state = value;
            cb(null);
          })
          .catch(e => {
            cb(e);
          });
      });
  },
  simpleWithState_rw: function(dobaos, service, ctype, cparam) {
    handlers.simpleWithState_r(dobaos, service, ctype, cparam);
    handlers.simpleWithState_w(dobaos, service, ctype, cparam);
  },
  
  scaled255_r: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('get', cb => {
        dobaos.getStored(cparam.status)
          .then(payload => {
            let scaled = Math.floor(payload.value*100/255);
            cb(null, scaled);
          })
          .catch(e => {
            cb(e);
          });
      });
    // register listener for dobaos
    const processDobaosValue = payload => {
      if (Array.isArray(payload)) {
        return payload.forEach(processDobaosValue);
      }
      
      if (payload.id === cparam.status ||
          payload.name === cparam.status) {
        let scaled = Math.floor(payload.value*100/255);
        service
          .getCharacteristic(ctype)
          .updateValue(scaled);
      }
    };
    
    dobaos.on('datapoint value', processDobaosValue);
  },
  scaled255_w: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('set', (value, cb) => {
        let scaled = Math.floor(value*255/100);
        dobaos.setValue({id: cparam.control, value: scaled})
          .then(_ => {
            cb(null);
          })
          .catch(e => {
            cb(e);
          });
      });
  },
  scaled255timeout_w: function(dobaos, service, ctype, cparam, time) {
    service
      .getCharacteristic(ctype)
      .on('set', (value, cb) => {
        let scaled = Math.floor(value*255/100);
        setTimeout(_ => {
          dobaos.setValue({id: cparam.control, value: scaled})
            .then(_ => {
              cb(null);
            })
            .catch(e => {
              console.log(e);
              cb(e);
            });
        }, time);
      });
  },
  scaled255_rw: function(dobaos, service, ctype, cparam) {
    handlers.scaled255_r(dobaos, service, ctype, cparam);
    handlers.scaled255_w(dobaos, service, ctype, cparam);
  },
  scaled255timeout_rw: function(dobaos, service, ctype, cparam, time=300) {
    handlers.scaled255_r(dobaos, service, ctype, cparam);
    handlers.scaled255timeout_w(dobaos, service, ctype, cparam, time);
  },
  
  
  boolDigit_r: function(dobaos, service, ctype, cparam) {
    // to convert bool values true/false to 1/0
    // some characteristics has uint type but accept only 0 and 1
    // so, in order to control them by DPT1 this handler exists
    service
      .getCharacteristic(ctype)
      .on('get', cb => {
        dobaos.getStored(cparam.status)
          .then(payload => {
            let value = payload.value? 1: 0;
            cb(null, value);
          })
          .catch(e => {
            cb(e);
          });
      });
    // register listener for dobaos
    const processDobaosValue = payload => {
      if (Array.isArray(payload)) {
        return payload.forEach(processDobaosValue);
      }
      
      if (payload.id === cparam.status ||
          payload.name === cparam.status) {
        let value = payload.value? 1: 0;
        service
          .getCharacteristic(ctype)
          .updateValue(value);
      }
    };
    
    dobaos.on('datapoint value', processDobaosValue);
  },
  boolDigit_w: function(dobaos, service, ctype, cparam) {
    service
      .getCharacteristic(ctype)
      .on('set', (value, cb) => {
        value = value? 1: 0;
        dobaos.setValue({id: cparam.control, value: value})
          .then(_ => {
            cb(null);
          })
          .catch(e => {
			console.log(e);
            cb(e);
          });
      })
  },
  boolDigit_rw: function(dobaos, service, ctype, cparam) {
    handlers.boolDigit_r(dobaos, service, ctype, cparam);
    handlers.boolDigit_w(dobaos, service, ctype, cparam);
  },
  
};


module.exports = handlers;
