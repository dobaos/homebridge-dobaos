let writeln = console.log;
const ec = require("./00_chars")();

const es = [
  {
    type: "AirPurifier",
    descr1: "Air purifier",
    descr2: "Очиститель воздуха",
    req: ["Active", "CurrentAirPurifierState", "TargetAirPurifierState"],
    opt: ["RotationSpeed", "SwingMode", "LockPhysicalControls"]
  },
  {
    type: "AirQualitySensor",
    descr1: "Air quality sensor",
    descr2: "Датчик качества воздуха",
    req: ["AirQuality"],
    opt: ["OzoneDensity", "NitrogenDioxideDensity",
      "SulphurDioxideDensity", "PM2_5Density",
      "PM10Density", "VOCDensity", "StatusActive",
      "StatusFault", "StatusTampered", "StatusLowBattery"]
  },

  {
    type: "BatteryService",
    decsr1: "Battery Service",
    descr2: "Аккумуляторная батарея",
    req: ["BatteryLevel", "ChargingState", "StatusLowBattery"]
  },
  {
    type: "CarbonDioxideSensor",
    descr1: "Carbon Dioxide Sensor",
    descr2: "Датчик углекислого газа",
    req: ["CarbonDioxideDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery", 
      "CarbonDioxideLevel", "CarbonDioxidePeakLevel"]
  },
  {
    type: "CarbonMonoxideSensor",
    descr1: "Carbon Monoxide Sensor",
    descr2: "Датчик угарного газа",
    req: ["CarbonMonoxideDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery", 
      "CarbonMonoxideLevel", "CarbonMonoxidePeakLevel"]

  },
  {
    type: "ContactSensor",
    descr1: "Contact sensor",
    descr2: "Датчик сухого контакта",
    req: ["ContactSensorState"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "Door",
    descr1: "Door",
    descr2: "Дверь",
    req: ["CurrentPosition", "TargetPosition", "PositionState"],
    opt: ["HoldPosition", "ObstructionDetected"]
  },
  {
    type: "Doorbell",
    descr1: "Doorbell",
    descr2: "Дверной звонок",
    req: ["ProgrammableSwitchEvent"],
    opt: ["Volume", "Brightness"]
  },
  {
    type: "Fan",
    descr1: "Fan",
    descr2: "Вентилятор",
    req: ["Active"],
    opt: ["CurrentFanState", "TargetFanState", "RotationDirection",
      "RotationSpeed", "SwingMode", "LockPhysicalControls"]
  },
  {
    type: "GarageDoorOpener",
    descr1: "Garage gate",
    descr2: "Ворота гаража",
    req: ["CurrentDoorState", "TargetDoorState", "ObstructionDetected"],
    opt: ["LockCurrentState", "LockTargetState"]
  },
  {
    type: "HeaterCooler",
    descr1: "Heater or/and cooler",
    desct2: "Охладитель и/или обогреватель",
    req: ["Active", "CurrentTemperature", "CurrentHeaterCoolerState", "TargetHeaterCoolerState"],
    opt: ["RotationSpeed", "TemperatureDisplayUnits", "SwingMode", "CoolingThresholdTemperature", 
      "HeatingThresholdTemperature", "LockPhysicalControls"]
  },
  {
    type: "HumidifierDehumidifier",
    descr1: "Humidifier or Dehumidifier",
    descr2: "Увлажнитель и/или осушитель",
    req: ["Active", "CurrentRelativeHumidity", 
      "CurrentHumidifierDehumidifierState", "TargetHumidifierDehumidifierState"],
    opt: ["RelativeHumidityDehumidifierThreshold", "RelativeHumidityHumidifierThreshold",
      "RotationSpeed", "SwingMode", "WaterLevel", "LockPhysicalControls"]
  },
  {
    type: "HumiditySensor",
    descr1: "Humidity sensor",
    descr2: "Датчик влажности",
    req: ["CurrentRelativeHumidity"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "LeakSensor",
    descr1: "Leak",
    descr2: "Датчик утечки",
    req: ["LeakDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "Lightbulb",
    descr1: "Light bulb",
    descr2: "Лампа Ильича",
    req: ["On"],
    opt: ["Brightness", "Hue", "Saturation", "ColorTemperature"]
  },
  {
    type: "RGB",
    descr1: "RGB",
    descr2: "RGB"
  },
  {
    type: "LightSensor",
    descr1: "Light sensor",
    descr2: "Датчик освещенности",
    req: ["CurrentAmbientLightLevel"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "LockMechanism",
    descr1: "Lock mechanism",
    descr2: "Механизм блокировки - замок",
    req: ["LockCurrentState", "LockTargetState"],
  },
  {
    type: "MotionSensor",
    descr1: "Motion sensor",
    descr2: "Датчик движение",
    req: ["MotionDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "OccupancySensor",
    descr1: "Occupancy detector",
    descr2: "Датчик присутствия",
    req: ["OccupancyDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "Outlet",
    descr1: "Outlet",
    descr2: "Розетка",
    req: ["On", "OutletInUse"],
  },
  {
    type: "SecuritySystem",
    descr1: "Security system",
    descr2: "Система охранной сигнализации",
    req: ["SecuritySystemCurrentState", "SecuritySystemTargetState"],
    opt: ["SecuritySystemAlarmType", "StatusFault", "StatusTampered"]
  },
  {
    type: "Slat",
    descr1: "Slat",
    descr2: "Заслонка",
    req: ["CurrentSlatState", "SlatType"],
    opt: ["SwingMode", "CurrentTiltAngle", "TargetTiltAngle"]
  },
  {
    type: "SmokeSensor",
    descr1: "Smoke sensor",
    descr2: "Детектор дыма",
    req: ["SmokeDetected"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "StatelessProgrammableSwitch",
    descr1: "Stateless swithc",
    descr2: "Программируемое реле без состояния",
    req: ["ProgrammableSwitchEvent"],
  },
  {
    type: "Switch",
    descr1: "Just switch, on-off",
    descr2: "Переключатель/реле",
    req: ["On"]
  },
  {
    type: "TemperatureSensor",
    descr1: "Temperature Sensor",
    descr2: "Датчик температуры",
    req: ["CurrentTemperature"],
    opt: ["StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery"]
  },
  {
    type: "Thermostat",
    descr1: "Thermostat",
    descr2: "Термостат",
    req: ["CurrentHeatingCoolingState", "TargetHeatingCoolingState", "CurrentTemperature",
      "TargetTemperature", "TemperatureDisplayUnits"],
    opt: ["CoolingThresholdTemperature", "CurrentRelativeHumidity", 
      "HeatingThresholdTemperature", "TargetRelativeHumidity" ]
  },
  {
    type: "Window",
    descr1: "Window",
    descr2: "Окно",
    req: ["CurrentPosition", "TargetPosition", "PositionState"],
    opt: ["HoldPosition", "ObstructionDetected"]
  },
  {
    type: "WindowCovering",
    descr1: "Window Coverings",
    descr2: "Жалюзи, электрокарнизы"
  } 
];

function gen1() {
  function writeCharHeader1() {
    writeln("| Characteristic | Format | KNX DPT | Description | Enumeration |");
    writeln("|----------------|--------|---------|-------------|-------------|");
  }

  function writeEnum(enumv) {
    if (!enumv) return "";
    if (Object.keys(enumv).length < 1) return "";
    let keys = Object.keys(enumv);
    let r = "";
    keys.forEach(k => {
      r += `${k} = ${enumv[k]} <br> `;
    });
    return r;
  }
  function writeChar(r) {
    let l = "| ";
    const findChar = t => t.name === r;
    let c = ec.find(findChar);
    if (c) {
      l += c.name + " | ";
      l += c.format + " | ";
      l += c.dpt + " | ";
      l += c.descr1 + " | ";
      l += writeEnum(c.enumv) + " | ";
      writeln(l);
    } else {
      throw new Error("Char not found: ", r);
    }
  }

  es.forEach(s => {
    writeln("## ", s.type);
    writeln("");
    writeln("Description: ", s.descr1);
    writeln("");
    if (typeof s.req !== "undefined") {
      writeln("Required characteristics: ");
      writeln("");
      writeCharHeader1();
      s.req.forEach(writeChar);
      writeln("");
      writeln("");
    }
    if (typeof s.opt !== "undefined") {
      writeln("Optional characteristics: ");
      writeln("");
      writeCharHeader1();
      s.opt.forEach(writeChar);
      writeln("");
      writeln("");
    }
  });
}
function gen2() {
  function writeCharHeader() {
    writeln("| Характеристика | Формат | KNX DPT | Описание | Значение |");
    writeln("|----------------|--------|---------|----------|----------|");
  }

  function writeEnum(enumv) {
    if (!enumv) return "";
    if (Object.keys(enumv).length < 1) return "";
    let keys = Object.keys(enumv);
    let r = "";
    keys.forEach(k => {
      r += `${k} = ${enumv[k]} <br> `;
    });
    return r;
  }
  function writeChar(r) {
    let l = "| ";
    const findChar = t => t.name === r;
    let c = ec.find(findChar);
    if (c) {
      l += c.name + " | ";
      l += c.format + " | ";
      l += c.dpt + " | ";
      l += c.descr2 + " | ";
      l += writeEnum(c.enumv) + " | ";
      writeln(l);
    } else {
      throw new Error("Char not found: ", r);
    }
  }

  es.forEach(s => {
    writeln("## ", s.type);
    writeln("");
    writeln("Описание: ", s.descr2);
    writeln("");
    if (typeof s.req !== "undefined") {
      writeln("Обязательные характеристики: ");
      writeln("");
      writeCharHeader();
      s.req.forEach(writeChar);
      writeln("");
      writeln("");
    }
    if (typeof s.opt !== "undefined") {
      writeln("Необязательные характеристики: ");
      writeln("");
      writeCharHeader();
      s.opt.forEach(writeChar);
      writeln("");
      writeln("");
    }
  });
}

let i = process.argv[2];
if (i === "1") gen1();
if (i === "2") gen2();

