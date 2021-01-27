const AirPurifier = require("./02_AirPurifier");
const AirQualitySensor = require("./03_AirQualitySensor");
const BatteryService = require("./05_BatteryService");
const CarbonDioxideSensor = require("./07_CarbonDioxideSensor");
const CarbonMonoxideSensor = require("./08_CarbonMonoxideSensor");
const ContactSensor = require("./09_ContactSensor");
const Door = require("./11_Door");
const Doorbell = require("./12_Doorbell");
const Fan = require("./13_Fan");
const GarageDoorOpener = require("./16_GarageDoorOpener");
const HeaterCooler = require("./18_HeaterCooler");
const HumidifierDehumidifier = require("./19_HumidifierDehumidifier");
const HumiditySensor = require("./20_HumiditySensor");
const LeakSensor = require("./22_LeakSensor");
const Lightbulb = require("./23_Lightbulb");
const RGB = require("./23_RGB");
const LightSensor = require("./24_LightSensor");
const LockMechanism = require("./26_LockMechanism");
const MotionSensor = require("./28_MotionSensor");
const OccupancySensor = require("./29_OccupancySensor");
const Outlet = require("./30_Outlet");
const SecuritySystem = require("./31_SecuritySystem");
const Slat = require("./34_Slat");
const SmokeSensor = require("./35_SmokeSensor");
const StatelessProgrammableSwitch = require("./37_StatelessProgrammableSwitch");
const Switch = require("./38_Switch");
const TemperatureSensor = require("./41_TemperatureSensor");
const Thermostat = require("./42_Thermostat");
const Window = require("./44_Window");
const WindowCovering = require("./45_WindowCovering");

module.exports = [
  {
    type: "AirPurifier",
    init: AirPurifier
  },
  {
    type: "AirQualitySensor",
    init: AirQualitySensor
  },
  {
    type: "BatteryService",
    init: BatteryService
  },
  {
    type: "CarbonDioxideSensor",
    init: CarbonDioxideSensor
  },
  {
    type: "CarbonMonoxideSensor",
    init: CarbonMonoxideSensor
  },
  {
    type: "ContactSensor",
    init: ContactSensor
  },
  {
    type: "Door",
    init: Door
  },
  {
    type: "Doorbell",
    init: Doorbell
  },
  {
    type: "Fan",
    init: Fan
  },
  {
    type: "GarageDoorOpener",
    init: GarageDoorOpener
  },
  {
    type: "HeaterCooler",
    init: HeaterCooler
  },
  {
    type: "HumidifierDehumidifier",
    init: HumidifierDehumidifier
  },
  {
    type: "HumiditySensor",
    init: HumiditySensor
  },
  {
    type: "LeakSensor",
    init: LeakSensor
  },
  {
    type: "Lightbulb",
    init: Lightbulb
  },
  {
    type: "RGB",
    init: RGB
  },
  {
    type: "LightSensor",
    init: LightSensor
  },
  {
    type: "LockMechanism",
    init: LockMechanism
  },
  {
    type: "MotionSensor",
    init: MotionSensor
  },
  {
    type: "OccupancySensor",
    init: OccupancySensor
  },
  {
    type: "Outlet",
    init: Outlet
  },
  {
    type: "SecuritySystem",
    init: SecuritySystem
  },
  {
    type: "Slat",
    init: Slat
  },
  {
    type: "SmokeSensor",
    init: SmokeSensor
  },
  {
    type: "StatelessProgrammableSwitch",
    init: StatelessProgrammableSwitch
  },
  {
    type: "Switch",
    init: Switch
  },
  {
    type: "TemperatureSensor",
    init: TemperatureSensor
  },
  {
    type: "Thermostat",
    init: Thermostat
  },
  {
    type: "Window",
    init: Window
  },
  {
    type: "WindowCovering",
    init: WindowCovering
  }
];
