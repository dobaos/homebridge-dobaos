##  AirPurifier

Описание:  Очиститель воздуха

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Active | uint8 | dpt1,dpt5 | Показывает, что выбранный сервис сейчас активен | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentAirPurifierState | uint8 | dpt5 | Текущее состояние очистителя воздуха | INACTIVE = 0 <br> IDLE = 1 <br> PURIFYING_AIR = 2 <br>  | 
| TargetAirPurifierState | uint8 | dpt5 | Желаемый режим работы очистителя воздуха | MANUAL = 0 <br> AUTO = 1 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| RotationSpeed | percentage | dpt5 | Скорость вращения |  | 
| SwingMode | uint8 | dpt1 | Режим поворота вкл-выкл |  | 
| LockPhysicalControls | uint8 | dpt1 | Заблокировать физическое управление аксессуаром |  | 


##  AirQualitySensor

Описание:  Датчик качества воздуха

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| AirQuality | uint8 | dpt5 | Качество воздуха | UNKNOWN = 0 <br> EXCELLENT = 1 <br> GOOD = 2 <br> FAIR = 3 <br> INFERIOR = 4 <br> POOR = 5 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| OzoneDensity | float | dpt9 | Насыщенность кислорода |  | 
| NitrogenDioxideDensity | float | dpt9 | Текущая насыщенность NO2, микрограм/м3 |  | 
| SulphurDioxideDensity | float | dpt9 | Текущая насыщенность SO2, микрограмм/м3 |  | 
| PM2_5Density | float | dpt9 | Насыщенность частиц PM2.5 в воздухе |  | 
| PM10Density | float | dpt9 | Насыщенность частиц PM10 в воздухе |  | 
| VOCDensity | float | dpt9 | Насыщенность летучих орг. соединений |  | 
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  BatteryService

Описание:  Аккумуляторная батарея

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| BatteryLevel | uint8 | dpt5 | Уровень заряда батареи |  | 
| ChargingState | uint8 | dpt5 | Состояние процесса заряда батареи аксессуара | NOT_CHARGING = 0 <br> CHARGING = 1 <br> NOT_CHARGEABLE = 2 <br>  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  CarbonDioxideSensor

Описание:  Датчик углекислого газа

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CarbonDioxideDetected | uint8 | dpt1 | Показывает что текущий уровень CO2 больше порогового |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 
| CarbonDioxideLevel | float | dpt9 | Текущий уровень CO2 |  | 
| CarbonDioxidePeakLevel | float | dpt9 | Пороговый уровень содержания CO2 |  | 


##  CarbonMonoxideSensor

Описание:  Датчик угарного газа

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CarbonMonoxideDetected | uint8 | dpt9 | Показывает что текущий уровень CO больше порогового |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 
| CarbonMonoxideLevel | float | dpt9 | Текущий уровень CO |  | 
| CarbonMonoxidePeakLevel | float | dpt9 | Пороговый уровень содержания CO |  | 


##  ContactSensor

Описание:  Датчик сухого контакта

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| ContactSensorState | uint8 | dpt5 | Датчик сухого контакта | CONTACT_DETECTED = 0 <br> CONTACT_NOT_DETECTED = 1 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  Door

Описание:  Дверь

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentPosition | percentage | dpt5 | Текущее положение механизма аксессуара |  | 
| TargetPosition | percentage | dpt5 | Желаемое положение, в процентах |  | 
| PositionState | uint8 | dpt5 | Состояние механизма аксессуара | DECREASING = 0 <br> INCREASING = 1 <br> STOPPED = 2 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| HoldPosition | bool | dpt1 | Заблокировать положение механизма аксессуара |  | 
| ObstructionDetected | uint8 | dpt1 | Обнаружено препятствие |  | 


##  Doorbell

Описание:  Дверной звонок

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| ProgrammableSwitchEvent | uint8 | dpt5 | Событие программируемого переключателя: одиночное, двойное, длительное нажатие | SINGLE_PRESS = 0 <br> DOUBLE_PRESS = 1 <br> LONG_PRESS = 2 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Volume | percentage | dpt5 | Громкость |  | 
| Brightness | uint8 | dpt5 | Уровень яркости |  | 


##  Fan

Описание:  Вентилятор

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Active | uint8 | dpt1,dpt5 | Показывает, что выбранный сервис сейчас активен | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentFanState | uint8 | dpt5 | Текущий состояние вентилятора | INACTIVE = 0 <br> IDLE = 1 <br> BLOWING_AIR = 2 <br>  | 
| TargetFanState | uint8 | dpt5 | Желаемый режим работы вентиляции - ручной/авто | MANUAL = 0 <br> AUTO = 1 <br>  | 
| RotationDirection | uint8 | dpt5 | Направление вращения | CLOCKWISE = 0 <br> COUNTER_CLOCKWISE = 1 <br>  | 
| RotationSpeed | percentage | dpt5 | Скорость вращения |  | 
| SwingMode | uint8 | dpt1 | Режим поворота вкл-выкл |  | 
| LockPhysicalControls | uint8 | dpt1 | Заблокировать физическое управление аксессуаром |  | 


##  GarageDoorOpener

Описание:  Ворота гаража

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentDoorState | uint8 | dpt5 | Текущее состояние двери | OPEN = 0 <br> CLOSED = 1 <br> OPENING = 2 <br> CLOSING = 3 <br> STOPPED = 4 <br>  | 
| TargetDoorState | uint8 | dpt5 | Желаемое положение двери - открыть/закрыть | OPEN = 0 <br> CLOSED = 1 <br>  | 
| ObstructionDetected | uint8 | dpt1 | Обнаружено препятствие |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| LockCurrentState | uint8 | dpt5 | Текущее состояние механизма блокировки | UNSECURED = 0 <br> SECURED = 1 <br> JAMMED = 2 <br> UNKNOWN = 3 <br>  | 
| LockTargetState | uint8 | dpt1 | Желаемое положение механизма блокировки |  | 


##  HeaterCooler

Описание:  undefined

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Active | uint8 | dpt1,dpt5 | Показывает, что выбранный сервис сейчас активен | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentTemperature | float | dpt9 | Текущая температура |  | 
| CurrentHeaterCoolerState | uint8 | dpt5 | Текущее состояние обогревателя/охладителя | INACTIVE = 0 <br> IDLE = 1 <br> HEATING = 2 <br> COOLING = 3 <br>  | 
| TargetHeaterCoolerState | uint8 | dpt5 | Желаемый режим работы нагревателя/охладителя - авто/нагрев/охлаждение | AUTO = 0 <br> HEAT = 1 <br> COOL = 2 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| RotationSpeed | percentage | dpt5 | Скорость вращения |  | 
| TemperatureDisplayUnits | int | dpt6 | Желаемый угол наколна по горизонтали | CELSIUS = 0 <br> FAHRENHEIT = 1 <br>  | 
| SwingMode | uint8 | dpt1 | Режим поворота вкл-выкл |  | 
| CoolingThresholdTemperature | float | dpt9 | Пороговая темература охладителя |  | 
| HeatingThresholdTemperature | float | dpt9 | Пороговое значение температуры обогревателя |  | 
| LockPhysicalControls | uint8 | dpt1 | Заблокировать физическое управление аксессуаром |  | 


##  HumidifierDehumidifier

Описание:  Увлажнитель и/или осушитель

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Active | uint8 | dpt1,dpt5 | Показывает, что выбранный сервис сейчас активен | ACTIVE = 1 <br> INACTIVE = 0 <br>  | 
| CurrentRelativeHumidity | percentage | dpt5 | Текущий уровень влажности в процентах |  | 
| CurrentHumidifierDehumidifierState | uint8 | dpt9 | Текущее состояние увлажнителя/осушителя | INACTIVE = 0 <br> IDLE = 1 <br> HUMIDIFYING = 2 <br> DEHUMIDIFYING = 3 <br>  | 
| TargetHumidifierDehumidifierState | uint8 | dpt5 | Желаемый режим работы увлажнителя/осушителя | HUMIDIFIER_OR_DEHUMIDIFIER = 0 <br> HUMIDIFIER = 1 <br> DEHUMIDIFIER = 2 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| RelativeHumidityDehumidifierThreshold | percentage | dpt5 | Пороговое значение влажности осушителя |  | 
| RelativeHumidityHumidifierThreshold | percentage | dpt5 | Пороговое значение влажности увлажнителя |  | 
| RotationSpeed | percentage | dpt5 | Скорость вращения |  | 
| SwingMode | uint8 | dpt1 | Режим поворота вкл-выкл |  | 
| WaterLevel | percentage | dpt5 | Уровень воды |  | 
| LockPhysicalControls | uint8 | dpt1 | Заблокировать физическое управление аксессуаром |  | 


##  HumiditySensor

Описание:  Датчик влажности

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentRelativeHumidity | percentage | dpt5 | Текущий уровень влажности в процентах |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  LeakSensor

Описание:  Датчик утечки

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| LeakDetected | uint8 | dpt1 | Обнаружена утечка |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  Lightbulb

Описание:  Лампа Ильича

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| On | bool | dpt1 | Включить/выключить |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| Brightness | uint8 | dpt5 | Уровень яркости |  | 
| Hue | float | dpt9 | Цветовой оттенок |  | 
| Saturation | percentage | dpt5 | Сатурация |  | 
| ColorTemperature | uint32 | dpt7 | Цветовая темепратура |  | 


##  RGB

Описание:  RGB

##  LightSensor

Описание:  Датчик освещенности

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentAmbientLightLevel | float | dpt9 | Текущий уровень освещенности |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  LockMechanism

Описание:  Механизм блокировки - замок

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| LockCurrentState | uint8 | dpt5 | Текущее состояние механизма блокировки | UNSECURED = 0 <br> SECURED = 1 <br> JAMMED = 2 <br> UNKNOWN = 3 <br>  | 
| LockTargetState | uint8 | dpt1 | Желаемое положение механизма блокировки |  | 


##  MotionSensor

Описание:  Датчик движение

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| MotionDetected | uint8 | dpt1 | Обнаружено движение |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  OccupancySensor

Описание:  Датчик присутствия

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| OccupancyDetected | uint8 | dpt1 | Обнаружено присутствие |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  Outlet

Описание:  Розетка

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| On | bool | dpt1 | Включить/выключить |  | 
| OutletInUse | uint8 | dpt1 | Розетка используется в текущий момент |  | 


##  SecuritySystem

Описание:  Система охранной сигнализации

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| SecuritySystemCurrentState | uint8 | dpt5 | Текущуу состояние системы охраны | STAY_ARM = 0 <br> AWAY_ARM = 1 <br> NIGHT_ARM = 2 <br> DISARMED = 3 <br> ALARM_TRIGGERED = 4 <br>  | 
| SecuritySystemTargetState | uint8 | dpt5 | Желаемое состояние системы охраны | STAY_ARM = 0 <br> AWAY_ARM = 1 <br> NIGHT_ARM = 2 <br> DISARM = 3 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| SecuritySystemAlarmType | uint8 | dpt5 | Описывает тип тревоги системы охраны. |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 


##  Slat

Описание:  Заслонка

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentSlatState | uint8 | dpt5 | Текущее состояние заслонки | FIXED = 0 <br> JAMMED = 1 <br> SWINGING = 2 <br>  | 
| SlatType | uint8 | dpt5 | Описывает тип заслонок - горизонтальные или вертикальные | HORIZONTAL = 0 <br> VERTICAL = 1 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| SwingMode | uint8 | dpt1 | Режим поворота вкл-выкл |  | 
| CurrentTiltAngle | int | dpt6 | Текущий угол наклона механизма аксессуара |  | 
| TargetTiltAngle | int | dpt6 | Желаемый угол наклона |  | 


##  SmokeSensor

Описание:  Детектор дыма

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| SmokeDetected | uint8 | dpt1 | Сигнализирует высокий уровень дыма |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  StatelessProgrammableSwitch

Описание:  Программируемое реле без состояния

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| ProgrammableSwitchEvent | uint8 | dpt5 | Событие программируемого переключателя: одиночное, двойное, длительное нажатие | SINGLE_PRESS = 0 <br> DOUBLE_PRESS = 1 <br> LONG_PRESS = 2 <br>  | 


##  Switch

Описание:  Переключатель/реле

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| On | bool | dpt1 | Включить/выключить |  | 


##  TemperatureSensor

Описание:  Датчик температуры

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentTemperature | float | dpt9 | Текущая температура |  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| StatusActive | bool | dpt1 | Описывает текущий статус работы аксессуара |  | 
| StatusFault | uint8 | dpt5 | Описывает сбой в работе аксессуара |  | 
| StatusTampered | uint8 | dpt5 | Сигнализирует что аксессуар был взломан |  | 
| StatusLowBattery | uint8 | dpt5 | Сигнализирует низкий заряд батареи аксессуара |  | 


##  Thermostat

Описание:  Термостат

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentHeatingCoolingState | uint8 | dpt5 | Текущее состояние нагрев/охлаждение | OFF = 0 <br> HEAT = 1 <br> COOL = 2 <br>  | 
| TargetHeatingCoolingState | uint8 | dpt5 | Желаемый режим работы термостата | OFF = 0 <br> HEAT = 1 <br> COOL = 2 <br> AUTO = 3 <br>  | 
| CurrentTemperature | float | dpt9 | Текущая температура |  | 
| TargetTemperature | float | dpt9 | Желаемая температура |  | 
| TemperatureDisplayUnits | int | dpt6 | Желаемый угол наколна по горизонтали | CELSIUS = 0 <br> FAHRENHEIT = 1 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CoolingThresholdTemperature | float | dpt9 | Пороговая темература охладителя |  | 
| CurrentRelativeHumidity | percentage | dpt5 | Текущий уровень влажности в процентах |  | 
| HeatingThresholdTemperature | float | dpt9 | Пороговое значение температуры обогревателя |  | 
| TargetRelativeHumidity | percentage | dpt5 | Желаемая относительная влажность |  | 


##  Window

Описание:  Окно

Обязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| CurrentPosition | percentage | dpt5 | Текущее положение механизма аксессуара |  | 
| TargetPosition | percentage | dpt5 | Желаемое положение, в процентах |  | 
| PositionState | uint8 | dpt5 | Состояние механизма аксессуара | DECREASING = 0 <br> INCREASING = 1 <br> STOPPED = 2 <br>  | 


Необязательные характеристики: 

| Характеристика | Формат | KNX DPT | Описание | Значение |
|----------------|--------|---------|----------|----------|
| HoldPosition | bool | dpt1 | Заблокировать положение механизма аксессуара |  | 
| ObstructionDetected | uint8 | dpt1 | Обнаружено препятствие |  | 


##  WindowCovering

Описание:  Жалюзи, электрокарнизы
