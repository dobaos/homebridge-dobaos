let Service, Characteristic;
let Dobaos;
let log;

const dobaosHandlers = require("../handlers");

function initService(params) {
  Service = params.Service;
  Characteristic = params.Characteristic;
  Dobaos = params.Dobaos;
  let s = params.config;
  log = params.log;
  let newService = new Service.WindowCovering(s.name);
  let Angle_1, TgtPos, CurrPos, PosState, DirState, MoveState;
  // inverted?
  // in homekit position 0 means closed state and 100 - opened
  // but some knx devices may accept 0 as open state and 100 as closed
  let sInverted = false;
  if (Object.prototype.hasOwnProperty.call(s, "inverted")) {
    sInverted = s.inverted;
  }
  s.characteristics.forEach(c => {

    switch (c.type) {
      case "CurrentPosition":
        newService
          .getCharacteristic(Characteristic.CurrentPosition)
          .on("get", cb => {
            Dobaos.getValue(c.status)
              .then(payload => {
                CurrPos = Math.round((payload.value / 255) * 100);
                if (sInverted) {
                  CurrPos = 100 - CurrPos;
                }
                cb(null, CurrPos);
              })
              .catch(e => {
                cb(e);
              });
        });
        // register listener for dobaos
        Dobaos.on("datapoint value", payload => {
          const processSingleValue = payload => {
            if (payload.id === c.status) {
              CurrPos = Math.round((payload.value / 255) * 100);
              if (sInverted) {
                CurrPos = 100 - CurrPos;
              }
              newService
                .getCharacteristic(Characteristic.CurrentPosition)
                .updateValue(CurrPos);
            }
          };
          if (Array.isArray(payload)) {
            return payload.forEach(processSingleValue);
          }
          if (typeof payload === "object") {
            return processSingleValue(payload);
          }
        });
        break;
      case "TargetPosition":
        newService
          .getCharacteristic(Characteristic.TargetPosition)
          .on("set", (value, cb) => {
            TgtPos = Math.round((value / 100) * 255);
            if (sInverted) {
              TgtPos = 255 - TgtPos;
            }
            Dobaos.setValue({ id: c.control, value: TgtPos })
              .then(_ => {
                cb(null);
              })
              .catch(e => {
                cb(e);
              });
          })
          .on("get", cb => {
            Dobaos.getValue(c.status)
              .then(payload => {
                TgtPos = Math.round((payload.value / 255) * 100);
                if (sInverted) {
                  TgtPos = 100 - TgtPos;
                }
                cb(null, TgtPos);
              })
              .catch(e => {
                cb(e);
              });
          });
        // register listener for dobaos
        Dobaos.on("datapoint value", payload => {
          const processSingleValue = payload => {
            let {id, value} = payload;
            if (id === c.status) {
              TgtPos = Math.round((value / 255) * 100);
              if (sInverted) {
                TgtPos = 100 - TgtPos;
              }
              newService
                .getCharacteristic(Characteristic.TargetPosition)
                .updateValue(TgtPos);
            }
          };
          if (Array.isArray(payload)) {
            return payload.forEach(processSingleValue);
          }
          if (typeof payload === "object") {
            return processSingleValue(payload);
          }
        });
        break;
      case "PositionState":
        DirState = 0;
        PosState = 0;
        MoveState = 0;

        let cHasDir = Object.prototype.hasOwnProperty.call(c, "direction");
        let cHasPos = Object.prototype.hasOwnProperty.call(c, "position");

        // movement if value is 1, 
        let cHasMove = Object.prototype.hasOwnProperty.call(c, "movement");
        newService
          .getCharacteristic(Characteristic.PositionState)
          .on("get", cb => {
          // if blinds has two feedbacks:
          if (cHasDir && cHasPos) {
            // didn't tested!
            Dobaos.getValue([c.direction, c.position])
              .then(payload => {
                if (!Array.isArray(payload)) {
                  return cb(new Error("wrong values"));
                }

                payload.forEach(p => {
                  let {id, value} = p;
                  if (id === c.direction) {
                    DirState = payload.value;
                  } else if (id === c.position) {
                    PosState = payload.value;
                  }
                });

                if (DirState === 0) {
                  cb(null, DirState);
                } else {
                  cb(null, 1 + PosState);
                }
              })
              .catch(e => {
                cb(e);
              });
            // register listener for dobaos
          } else if (cHasMove) {
            // for example, JUNG 2316REGHE has "Movement feedback" object
            // so, knx value is 0 for stopped, 1 for moving
            // if moving, then update position based on target and current
            Dobaos.getValue([c.movement])
              .then(payload => {
                if (!Array.isArray(payload)) {
                  return cb(new Error("wrong values"));
                }

                payload.forEach(p => {
                  let {id, value} = p;
                  if (id === c.movement) {
                    MoveState = value;
                  }
                });

                let result = 0;
                if (!MoveState) {
                  // stopped
                  result = 2;
                } else {
                  // moving
                  // depending on target and current position
                  // CurrPos and TgtPos
                  if (CurrPos < TgtPos) {
                    // going to maximum
                    result = 1
                  } else if (CurrPos > TgtPos) {
                    // going to minimum
                    result = 0;
                  } else if (CurrPos === TgtPos) {
                    result = 2;
                  }

                }

                return cb(null, result);
              })
              .catch(e => {
                return cb(e);
              });
            // register listener for dobaos
          }
        });
        if (cHasDir && cHasPos) {
          // not tested
          Dobaos.on("datapoint value", payload => {
            const processSingleValue = payload => {
              let {id, value} = payload;
              if (id === c.position) {
                if (value === 0) {
                  PosState = 0;
                  newService
                    .getCharacteristic(Characteristic.PositionState)
                    .updateValue(0);
                } else {
                  PosState = 1;
                  newService
                    .getCharacteristic(Characteristic.PositionState)
                    .updateValue(PosState + DirState);
                }
              } else if (id === c.direction) {
                DirState = paload.value;
                if (PosState === 1) {
                  newService.
                    getCharacteristic(Characteristic.PositionState)
                    .updateValue(1 + DirState);
                }
              }
            };
            if (Array.isArray(payload)) {
              return payload.forEach(processSingleValue);
            }
            if (typeof payload === "object") {
              return processSingleValue(payload);
            }
          });
        } else if (cHasMove) {
          Dobaos.on("datapoint value", payload => {
            const processSingleValue = payload => {
              let {id, value} = payload;
              if (id === c.movement) {
                MoveState = value;
                let result = 0;
                if (!MoveState) {
                  // stopped
                  result = 2;
                } else {
                  // moving
                  // depending on target and current position
                  // CurrPos and TgtPos
                  if (CurrPos < TgtPos) {
                    result = 1
                  } else if (CurrPos > TgtPos) {
                    result = 0;
                  } else if (CurrPos === TgtPos) {
                    result = 2;
                  }
                }

                newService
                  .getCharacteristic(Characteristic.PositionState)
                  .updateValue(result);
              }
            };
            if (Array.isArray(payload)) {
              return payload.forEach(processSingleValue);
            }
            if (typeof payload === "object") {
              return processSingleValue(payload);
            }
          });
        }
        break;
      case "TargetHorizontalTiltAngle":
        newService
          .getCharacteristic(Characteristic.TargetHorizontalTiltAngle)
          .on("set", (value, cb) => {
            Angle_1 = Math.round(((value + 90) / 180) * 255);
            Dobaos.setValue({ id: c.control, value: Angle_1 })
              .then(_ => {
                cb(null);
              })
              .catch(e => {
                cb(e);
              });
          })
          .on("get", cb => {
            Dobaos.getValue(c.status)
              .then(payload => {
                Angle_1 = Math.round(payload.value / 255 - 90);
                cb(null, Angle_1);
              })
              .catch(e => {
                cb(e);
              });
          });
        // register listener for dobaos
        Dobaos.on("datapoint value", payload => {
          const processSingleValue = payload => {
            if (payload.id === c.status) {
              Angle_1 = Math.round(((payload.value + 90) / 180) * 255);
              newService
                .getCharacteristic(Characteristic.TargetHorizontalTiltAngle)
                .updateValue(Angle_1);
            }
          };
          if (Array.isArray(payload)) {
            return payload.forEach(processSingleValue);
          }
          if (typeof payload === "object") {
            return processSingleValue(payload);
          }
        });
        break;

      case "CurrentHorizontalTiltAngle":
        newService
          .getCharacteristic(Characteristic.CurrentHorizontalTiltAngle)
          .on("get", cb => {
            Dobaos.getValue(c.status)
              .then(payload => {
                Angle_1 = Math.round(payload.value / 255 - 90);
                cb(null, Angle_1);
              })
              .catch(e => {
                cb(e);
              });
        });
        // register listener for dobaos
        Dobaos.on("datapoint value", payload => {
          const processSingleValue = payload => {
            if (payload.id === c.status) {
              Angle_1 = Math.round(((payload.value + 90) / 180) * 255);
              newService
                .getCharacteristic(Characteristic.CurrentHorizontalTiltAngle)
                .updateValue(Angle_1);
            }
          };
          if (Array.isArray(payload)) {
            return payload.forEach(processSingleValue);
          }
          if (typeof payload === "object") {
            return processSingleValue(payload);
          }
        });
        break;
      case "HoldPosition":
        dobaosHandlers.simple_w(Dobaos, newService,
            Characteristic.HoldPosition, c);
        break;
      case "ObstructionDetected":
        dobaosHandlers.simple_r(Dobaos, newService,
            Characteristic.ObstructionDetected, c);
        break;
      default:
        break;
    }
  });

  return newService;
}

module.exports = initService;
