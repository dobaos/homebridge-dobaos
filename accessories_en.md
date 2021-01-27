##  AirPurifier

Description:  Air purifier

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Active | uint8 | dpt1,dpt5 | Indicates whether the service is currently active | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentAirPurifierState | uint8 | dpt5 | Current Air Purifier State | INACTIVE = 0 <br> IDLE = 1 <br> PURIFYING_AIR = 2 <br>  | 
| TargetAirPurifierState | uint8 | dpt5 | Target Air Purifier State - working mode | MANUAL = 0 <br> AUTO = 1 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| RotationSpeed | percentage | dpt5 | Rotation speed of accessory mechanism |  | 
| SwingMode | uint8 | dpt1 | Indicates if swing mode is enabled |  | 
| LockPhysicalControls | uint8 | dpt1 | Lock accessory physical controls |  | 


##  AirQualitySensor

Description:  Air quality sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| AirQuality | uint8 | dpt5 | Air Quality | UNKNOWN = 0 <br> EXCELLENT = 1 <br> GOOD = 2 <br> FAIR = 3 <br> INFERIOR = 4 <br> POOR = 5 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| OzoneDensity | float | dpt9 | Ozone density |  | 
| NitrogenDioxideDensity | float | dpt9 | Current NO2 density, micrograms/m3 |  | 
| SulphurDioxideDensity | float | dpt9 | SO2 current density, micrograms/m3 |  | 
| PM2_5Density | float | dpt9 | PM2.5 density |  | 
| PM10Density | float | dpt9 | PM10 density |  | 
| VOCDensity | float | dpt9 | Volatile organic compund density |  | 
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  BatteryService

Description:  undefined

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| BatteryLevel | uint8 | dpt5 | Battery Charge Level |  | 
| ChargingState | uint8 | dpt5 | Describes charging state of accessory battery | NOT_CHARGING = 0 <br> CHARGING = 1 <br> NOT_CHARGEABLE = 2 <br>  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  CarbonDioxideSensor

Description:  Carbon Dioxide Sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CarbonDioxideDetected | uint8 | dpt1 | Indicates if current CO2 Level > Peak |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 
| CarbonDioxideLevel | float | dpt9 | Current CO2 level |  | 
| CarbonDioxidePeakLevel | float | dpt9 | Carbon dioxide peak level |  | 


##  CarbonMonoxideSensor

Description:  Carbon Monoxide Sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CarbonMonoxideDetected | uint8 | dpt9 | Indicates if current CO Level > Peak |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 
| CarbonMonoxideLevel | float | dpt9 | Current Carbon Monoxide Level |  | 
| CarbonMonoxidePeakLevel | float | dpt9 | Carbon monoxide peak level |  | 


##  ContactSensor

Description:  Contact sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| ContactSensorState | uint8 | dpt5 | Contact sensor state | CONTACT_DETECTED = 0 <br> CONTACT_NOT_DETECTED = 1 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  Door

Description:  Door

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentPosition | percentage | dpt5 | Current position of accessory mechanism |  | 
| TargetPosition | percentage | dpt5 | Target relative position |  | 
| PositionState | uint8 | dpt5 | Position state of accessory mechanism | DECREASING = 0 <br> INCREASING = 1 <br> STOPPED = 2 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| HoldPosition | bool | dpt1 | Hold position of accessory mechanism |  | 
| ObstructionDetected | uint8 | dpt1 | Obstruction detected |  | 


##  Doorbell

Description:  Doorbell

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| ProgrammableSwitchEvent | uint8 | dpt5 | Programmable switch event: single/double/long press | SINGLE_PRESS = 0 <br> DOUBLE_PRESS = 1 <br> LONG_PRESS = 2 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Volume | percentage | dpt5 | Audio volume |  | 
| Brightness | uint8 | dpt5 | Brightness level |  | 


##  Fan

Description:  Fan

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Active | uint8 | dpt1,dpt5 | Indicates whether the service is currently active | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentFanState | uint8 | dpt5 | Current fan work state | INACTIVE = 0 <br> IDLE = 1 <br> BLOWING_AIR = 2 <br>  | 
| TargetFanState | uint8 | dpt5 | Target Fan Working Mode - manual/auto | MANUAL = 0 <br> AUTO = 1 <br>  | 
| RotationDirection | uint8 | dpt5 | Rotation Direction of accessory mechanism | CLOCKWISE = 0 <br> COUNTER_CLOCKWISE = 1 <br>  | 
| RotationSpeed | percentage | dpt5 | Rotation speed of accessory mechanism |  | 
| SwingMode | uint8 | dpt1 | Indicates if swing mode is enabled |  | 
| LockPhysicalControls | uint8 | dpt1 | Lock accessory physical controls |  | 


##  GarageDoorOpener

Description:  Garage gate

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentDoorState | uint8 | dpt5 | Current door state | OPEN = 0 <br> CLOSED = 1 <br> OPENING = 2 <br> CLOSING = 3 <br> STOPPED = 4 <br>  | 
| TargetDoorState | uint8 | dpt5 | Target Door State - open/closed | OPEN = 0 <br> CLOSED = 1 <br>  | 
| ObstructionDetected | uint8 | dpt1 | Obstruction detected |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| LockCurrentState | uint8 | dpt5 | Lock current state | UNSECURED = 0 <br> SECURED = 1 <br> JAMMED = 2 <br> UNKNOWN = 3 <br>  | 
| LockTargetState | uint8 | dpt1 | Lock target state |  | 


##  HeaterCooler

Description:  Heater or/and cooler

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Active | uint8 | dpt1,dpt5 | Indicates whether the service is currently active | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentTemperature | float | dpt9 | Current temperature |  | 
| CurrentHeaterCoolerState | uint8 | dpt5 | Current heater/cooler state | INACTIVE = 0 <br> IDLE = 1 <br> HEATING = 2 <br> COOLING = 3 <br>  | 
| TargetHeaterCoolerState | uint8 | dpt5 | Target Heater Cooler State - auto/heat/cool | AUTO = 0 <br> HEAT = 1 <br> COOL = 2 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| RotationSpeed | percentage | dpt5 | Rotation speed of accessory mechanism |  | 
| TemperatureDisplayUnits | int | dpt6 | Target horizontal tilt angle | CELSIUS = 0 <br> FAHRENHEIT = 1 <br>  | 
| SwingMode | uint8 | dpt1 | Indicates if swing mode is enabled |  | 
| CoolingThresholdTemperature | float | dpt9 | Cooling threshold temperature |  | 
| HeatingThresholdTemperature | float | dpt9 | Heating Threshold Temperature |  | 
| LockPhysicalControls | uint8 | dpt1 | Lock accessory physical controls |  | 


##  HumidifierDehumidifier

Description:  Humidifier or Dehumidifier

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Active | uint8 | dpt1,dpt5 | Indicates whether the service is currently active | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentRelativeHumidity | percentage | dpt5 | Current relative humidity level |  | 
| CurrentHumidifierDehumidifierState | uint8 | dpt9 | Current humidifier/dehumidifier state | INACTIVE = 0 <br> IDLE = 1 <br> HUMIDIFYING = 2 <br> DEHUMIDIFYING = 3 <br>  | 
| TargetHumidifierDehumidifierState | uint8 | dpt5 | Target working mode of humidifier/dehumidifier | HUMIDIFIER_OR_DEHUMIDIFIER = 0 <br> HUMIDIFIER = 1 <br> DEHUMIDIFIER = 2 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| RelativeHumidityDehumidifierThreshold | percentage | dpt5 | Relative humidity dehumidifier threshold |  | 
| RelativeHumidityHumidifierThreshold | percentage | dpt5 | Relative humidity humidifier threshold |  | 
| RotationSpeed | percentage | dpt5 | Rotation speed of accessory mechanism |  | 
| SwingMode | uint8 | dpt1 | Indicates if swing mode is enabled |  | 
| WaterLevel | percentage | dpt5 | Water level |  | 
| LockPhysicalControls | uint8 | dpt1 | Lock accessory physical controls |  | 


##  HumiditySensor

Description:  Humidity sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentRelativeHumidity | percentage | dpt5 | Current relative humidity level |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  LeakSensor

Description:  Leak

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| LeakDetected | uint8 | dpt1 | Leak detected |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  Lightbulb

Description:  Light bulb

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| On | bool | dpt1 | On/off |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| Brightness | uint8 | dpt5 | Brightness level |  | 
| Hue | float | dpt9 | Hue |  | 
| Saturation | percentage | dpt5 | Saturation |  | 
| ColorTemperature | uint32 | dpt7 | Color temperature |  | 


##  RGB

Description:  RGB

##  LightSensor

Description:  Light sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentAmbientLightLevel | float | dpt9 | Current ambient light level |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  LockMechanism

Description:  Lock mechanism

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| LockCurrentState | uint8 | dpt5 | Lock current state | UNSECURED = 0 <br> SECURED = 1 <br> JAMMED = 2 <br> UNKNOWN = 3 <br>  | 
| LockTargetState | uint8 | dpt1 | Lock target state |  | 


##  MotionSensor

Description:  Motion sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| MotionDetected | uint8 | dpt1 | Motion detected |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  OccupancySensor

Description:  Occupancy detector

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| OccupancyDetected | uint8 | dpt1 | Occupancy detected |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  Outlet

Description:  Outlet

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| On | bool | dpt1 | On/off |  | 
| OutletInUse | uint8 | dpt1 | Outlet currently in use |  | 


##  SecuritySystem

Description:  Security system

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| SecuritySystemCurrentState | uint8 | dpt5 | State of security system | STAY_ARM = 0 <br> AWAY_ARM = 1 <br> NIGHT_ARM = 2 <br> DISARMED = 3 <br> ALARM_TRIGGERED = 4 <br>  | 
| SecuritySystemTargetState | uint8 | dpt5 | Target state of security system | STAY_ARM = 0 <br> AWAY_ARM = 1 <br> NIGHT_ARM = 2 <br> DISARM = 3 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| SecuritySystemAlarmType | uint8 | dpt5 | Describes the type of alarm triggered by security system |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 


##  Slat

Description:  Slat

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentSlatState | uint8 | dpt5 | Current Slat State | FIXED = 0 <br> JAMMED = 1 <br> SWINGING = 2 <br>  | 
| SlatType | uint8 | dpt5 | Describes type of slats. Horizontal or vertical | HORIZONTAL = 0 <br> VERTICAL = 1 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| SwingMode | uint8 | dpt1 | Indicates if swing mode is enabled |  | 
| CurrentTiltAngle | int | dpt6 | Current tilt angle |  | 
| TargetTiltAngle | int | dpt6 | Target tilt angle |  | 


##  SmokeSensor

Description:  Smoke sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| SmokeDetected | uint8 | dpt1 | Indicates if sensor detects abnormal level of smoke |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  StatelessProgrammableSwitch

Description:  Stateless swithc

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| ProgrammableSwitchEvent | uint8 | dpt5 | Programmable switch event: single/double/long press | SINGLE_PRESS = 0 <br> DOUBLE_PRESS = 1 <br> LONG_PRESS = 2 <br>  | 


##  Switch

Description:  Just switch, on-off

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| On | bool | dpt1 | On/off |  | 


##  TemperatureSensor

Description:  Temperature Sensor

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentTemperature | float | dpt9 | Current temperature |  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| StatusActive | bool | dpt1 | Describes accessory's current working status |  | 
| StatusFault | uint8 | dpt5 | Describes accessory's fault state |  | 
| StatusTampered | uint8 | dpt5 | Indicates that accessory was tampered |  | 
| StatusLowBattery | uint8 | dpt5 | Indicates that accessory's battery low status |  | 


##  Thermostat

Description:  Thermostat

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentHeatingCoolingState | uint8 | dpt5 | Current heating/cooling state | OFF = 0 <br> HEAT = 1 <br> COOL = 2 <br>  | 
| TargetHeatingCoolingState | uint8 | dpt5 | Target working mode of thermostat | OFF = 0 <br> HEAT = 1 <br> COOL = 2 <br> AUTO = 3 <br>  | 
| CurrentTemperature | float | dpt9 | Current temperature |  | 
| TargetTemperature | float | dpt9 | Target temperature of thermostat |  | 
| TemperatureDisplayUnits | int | dpt6 | Target horizontal tilt angle | CELSIUS = 0 <br> FAHRENHEIT = 1 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CoolingThresholdTemperature | float | dpt9 | Cooling threshold temperature |  | 
| CurrentRelativeHumidity | percentage | dpt5 | Current relative humidity level |  | 
| HeatingThresholdTemperature | float | dpt9 | Heating Threshold Temperature |  | 
| TargetRelativeHumidity | percentage | dpt5 | Target relative humidity |  | 


##  Window

Description:  Window

Required characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| CurrentPosition | percentage | dpt5 | Current position of accessory mechanism |  | 
| TargetPosition | percentage | dpt5 | Target relative position |  | 
| PositionState | uint8 | dpt5 | Position state of accessory mechanism | DECREASING = 0 <br> INCREASING = 1 <br> STOPPED = 2 <br>  | 


Optional characteristics: 

| Characteristic | Format | KNX DPT | Description | Enumeration |
|----------------|--------|---------|-------------|-------------|
| HoldPosition | bool | dpt1 | Hold position of accessory mechanism |  | 
| ObstructionDetected | uint8 | dpt1 | Obstruction detected |  | 


##  WindowCovering

Description:  Window Coverings

