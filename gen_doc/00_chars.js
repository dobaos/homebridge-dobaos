const hap = require("hap-nodejs");
const Characteristic = hap.Characteristic;

// TODO
function getCharEnum() {
    const ECharacteristics = [];
    ECharacteristics.push({
        name: "Active",
        descr1: "Indicates whether the service is currently active",
        descr2: "Показывает, что выбранный сервис сейчас активен",
        format: "uint8",
        dpt: "dpt1,dpt5",
        char: Characteristic.Active,
        enumv: {
            ACTIVE: Characteristic.Active.ACTIVE,
            INACTIVE: Characteristic.Active.INACTIVE
        }
    });
    ECharacteristics.push({
        name: "AirParticulateDensity",
        descr1: "Air Particulate Density",
        descr2: "Насыщенность твердых частиц в воздухе",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.AirParticulateDensity,
    });
    ECharacteristics.push({
        name: "AirParticulateSize",
        descr1: "Air Particulate Size",
        descr2: "Размер твердых частиц",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.AirParticulateSize,
        enumv: {
            _2_5_m: Characteristic.AirParticulateSize._2_5_M,
            _10_M: Characteristic.AirParticulateSize._10_M,
        }
    });
    ECharacteristics.push({
        name: "AirQuality",
        char: Characteristic.AirQuality,
        descr1: "Air Quality",
        descr2: "Качество воздуха",
        format: "uint8",
        dpt: "dpt5",
        enumv: {
            UNKNOWN: Characteristic.AirQuality.UNKNOWN,
            EXCELLENT: Characteristic.AirQuality.EXCELLENT,
            GOOD: Characteristic.AirQuality.GOOD,
            FAIR: Characteristic.AirQuality.FAIR,
            INFERIOR: Characteristic.AirQuality.INFERIOR,
            POOR: Characteristic.AirQuality.POOR,
        },
    });
    ECharacteristics.push({
        name: "AudioFeedback",
        descr1: "Audio Feedback, e.g. beep enabled/disable.",
        descr2: "Звуковые оповещения вкл/выкл.",
        format: "bool",
        dpt: "dpt1",
        char: Characteristic.AudioFeedback,
    });
    ECharacteristics.push({
        name: "BatteryLevel",
        descr1: "Battery Charge Level",
        descr2: "Уровень заряда батареи",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.BatteryLevel,
    });
    ECharacteristics.push({
        name: "Brightness",
        descr1: "Brightness level",
        descr2: "Уровень яркости",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.Brightness,
    });
    ECharacteristics.push({
        name: "CarbonDioxideDetected",
        descr1: "Indicates if current CO2 Level > Peak",
        descr2: "Показывает что текущий уровень CO2 больше порогового",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.CarbonDioxideDetected,
    });
    ECharacteristics.push({
        name: "CarbonDioxideLevel",
        descr1: "Current CO2 level",
        descr2: "Текущий уровень CO2",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CarbonDioxideLevel,
    });
    ECharacteristics.push({
        name: "CarbonDioxidePeakLevel",
        descr1: "Carbon dioxide peak level",
        descr2: "Пороговый уровень содержания CO2",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CarbonDioxidePeakLevel,
    });
    ECharacteristics.push({
        name: "CarbonMonoxideDetected",
        descr1: "Indicates if current CO Level > Peak",
        descr2: "Показывает что текущий уровень CO больше порогового",
        format: "uint8",
        dpt: "dpt9",
        char: Characteristic.CarbonMonoxideDetected,
    });
    ECharacteristics.push({
        name: "CarbonMonoxideLevel",
        descr1: "Current Carbon Monoxide Level",
        descr2: "Текущий уровень CO",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CarbonMonoxideLevel,
    });
    ECharacteristics.push({
        name: "CarbonMonoxidePeakLevel",
        descr1: "Carbon monoxide peak level",
        descr2: "Пороговый уровень содержания CO",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CarbonMonoxidePeakLevel,
    });
    ECharacteristics.push({
        name: "ChargingState",
        descr1: "Describes charging state of accessory battery",
        descr2: "Состояние процесса заряда батареи аксессуара",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.ChargingState,
        enumv: {
            NOT_CHARGING: Characteristic.ChargingState.NOT_CHARGING,
            CHARGING: Characteristic.ChargingState.CHARGING,
            NOT_CHARGEABLE: Characteristic.ChargingState.NOT_CHARGEABLE,
        }
    });
    ECharacteristics.push({
        name: "ColorTemperature",
        descr1: "Color temperature",
        descr2: "Цветовая темепратура",
        format: "uint32",
        dpt: "dpt7",
        char: Characteristic.ColorTemperature,
    });
    ECharacteristics.push({
        name: "ContactSensorState",
        descr1: "Contact sensor state",
        descr2: "Датчик сухого контакта",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.ContactSensorState,
        enumv: {
            CONTACT_DETECTED: Characteristic.ContactSensorState.CONTACT_DETECTED,
            CONTACT_NOT_DETECTED: Characteristic.ContactSensorState.CONTACT_NOT_DETECTED,
        }
    });
    ECharacteristics.push({
        name: "CoolingThresholdTemperature",
        descr1: "Cooling threshold temperature",
        descr2: "Пороговая темература охладителя",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CoolingThresholdTemperature,
    });
    ECharacteristics.push({
        name: "CurrentAirPurifierState",
        descr1: "Current Air Purifier State",
        descr2: "Текущее состояние очистителя воздуха",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentAirPurifierState,
        enumv: {
            INACTIVE: Characteristic.CurrentAirPurifierState.INACTIVE,
            IDLE: Characteristic.CurrentAirPurifierState.IDLE,
            PURIFYING_AIR: Characteristic.CurrentAirPurifierState.PURIFYING_AIR,
        }
    });
    ECharacteristics.push({
        name: "CurrentAmbientLightLevel",
        descr1: "Current ambient light level",
        descr2: "Текущий уровень освещенности",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CurrentAmbientLightLevel,
    });
    ECharacteristics.push({
        name: "CurrentDoorState",
        descr1: "Current door state",
        descr2: "Текущее состояние двери",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentDoorState,
        enumv: {
            OPEN: Characteristic.CurrentDoorState.OPEN,
            CLOSED: Characteristic.CurrentDoorState.CLOSED,
            OPENING: Characteristic.CurrentDoorState.OPENING,
            CLOSING: Characteristic.CurrentDoorState.CLOSING,
            STOPPED: Characteristic.CurrentDoorState.STOPPED,
        }
    });
    ECharacteristics.push({
        name: "CurrentFanState",
        descr1: "Current fan work state",
        descr2: "Текущий состояние вентилятора",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentFanState,
        enumv: {
            INACTIVE: Characteristic.CurrentFanState.INACTIVE,
            IDLE: Characteristic.CurrentFanState.IDLE,
            BLOWING_AIR: Characteristic.CurrentFanState.BLOWING_AIR,
        }
    });
    ECharacteristics.push({
        name: "CurrentHeaterCoolerState",
        descr1: "Current heater/cooler state",
        descr2: "Текущее состояние обогревателя/охладителя",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentHeaterCoolerState,
        enumv: {
            INACTIVE: Characteristic.CurrentHeaterCoolerState.INACTIVE,
            IDLE: Characteristic.CurrentHeaterCoolerState.IDLE,
            HEATING: Characteristic.CurrentHeaterCoolerState.HEATING,
            COOLING: Characteristic.CurrentHeaterCoolerState.COOLING,
        }
    });
    ECharacteristics.push({
        name: "CurrentHeatingCoolingState",
        descr1: "Current heating/cooling state",
        descr2: "Текущее состояние нагрев/охлаждение",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentHeatingCoolingState,
        enumv: {
            OFF: Characteristic.CurrentHeatingCoolingState.OFF,
            HEAT: Characteristic.CurrentHeatingCoolingState.HEAT,
            COOL: Characteristic.CurrentHeatingCoolingState.COOL,
        }
    });
    ECharacteristics.push({
        name: "CurrentHorizontalTiltAngle",
        descr1: "Current horizontal tilt angle",
        descr2: "Текущий горизонтальный угол наклона заслонок жалюзи",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.CurrentHorizontalTiltAngle,
    });
    ECharacteristics.push({
        name: "CurrentHumidifierDehumidifierState",
        descr1: "Current humidifier/dehumidifier state",
        descr2: "Текущее состояние увлажнителя/осушителя",
        format: "uint8",
        dpt: "dpt9",
        char: Characteristic.CurrentHumidifierDehumidifierState,
        enumv: {
            INACTIVE: Characteristic.CurrentHumidifierDehumidifierState.INACTIVE,
            IDLE: Characteristic.CurrentHumidifierDehumidifierState.IDLE,
            HUMIDIFYING: Characteristic.CurrentHumidifierDehumidifierState.HUMIDIFYING,
            DEHUMIDIFYING: Characteristic.CurrentHumidifierDehumidifierState.DEHUMIDIFYING,
        }
    });
    ECharacteristics.push({
        name: "CurrentPosition",
        descr1: "Current position of accessory mechanism",
        descr2: "Текущее положение механизма аксессуара",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.CurrentPosition,
    });
    ECharacteristics.push({
        name: "CurrentRelativeHumidity",
        descr1: "Current relative humidity level",
        descr2: "Текущий уровень влажности в процентах",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.CurrentRelativeHumidity,
    });
    ECharacteristics.push({
        name: "CurrentSlatState",
        descr1: "Current Slat State",
        descr2: "Текущее состояние заслонки",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.CurrentSlatState,
        enumv: {
            FIXED: Characteristic.CurrentSlatState.FIXED,
            JAMMED: Characteristic.CurrentSlatState.JAMMED,
            SWINGING: Characteristic.CurrentSlatState.SWINGING,
        }
    });
    ECharacteristics.push({
        name: "CurrentTemperature",
        descr1: "Current temperature",
        descr2: "Текущая температура",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.CurrentTemperature,
    });
    ECharacteristics.push({
        name: "CurrentTiltAngle",
        descr1: "Current tilt angle",
        descr2: "Текущий угол наклона механизма аксессуара",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.CurrentTiltAngle,
    });
    ECharacteristics.push({
        name: "CurrentVerticalTiltAngle",
        descr1: "Current vertical tilt angle of accessory mechanism",
        descr2: "Текущий вертикальный уровень наклона механизма аксессуара",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.CurrentVerticalTiltAngle,
    });
    ECharacteristics.push({
        name: "FilterChangeIndication",
        descr1: "Filter change indication",
        descr2: "Индикация необходимости замены фильтра",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.FilterChangeIndication,
    });
    ECharacteristics.push({
        name: "FilterLifeLevel",
        descr1: "Filter life level",
        descr2: "Состояние фильтра",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.FilterLifeLevel,
    });
    ECharacteristics.push({
        name: "HeatingThresholdTemperature",
        descr1: "Heating Threshold Temperature",
        descr2: "Пороговое значение температуры обогревателя",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.HeatingThresholdTemperature,
    });
    ECharacteristics.push({
        name: "HoldPosition",
        descr1: "Hold position of accessory mechanism",
        descr2: "Заблокировать положение механизма аксессуара",
        format: "bool",
        dpt: "dpt1",
        char: Characteristic.HoldPosition,
    });
    ECharacteristics.push({
        name: "Hue",
        descr1: "Hue",
        descr2: "Цветовой оттенок",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.Hue,
    });
    ECharacteristics.push({
        name: "InUse",
        descr1: "Accessory in use",
        descr2: "Аксессуар используется",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.InUse,
    });
    ECharacteristics.push({
        name: "IsConfigured",
        descr1: "Indicates that accessory is configured",
        descr2: "Аксессуар настроен и готов к использованию",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.IsConfigured,
    });
    ECharacteristics.push({
        name: "LeakDetected",
        descr1: "Leak detected",
        descr2: "Обнаружена утечка",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.LeakDetected,
    });
    ECharacteristics.push({
        name: "LockCurrentState",
        descr1: "Lock current state",
        descr2: "Текущее состояние механизма блокировки",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.LockCurrentState,
        enumv: {
            UNSECURED: Characteristic.LockCurrentState.UNSECURED,
            SECURED: Characteristic.LockCurrentState.SECURED,
            JAMMED: Characteristic.LockCurrentState.JAMMED,
            UNKNOWN: Characteristic.LockCurrentState.UNKNOWN,
        }
    });
    ECharacteristics.push({
        name: "LockLastKnownAction",
        descr1: "Lock last known action",
        descr2: "Последнее действие механизма блокировки",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.LockLastKnownAction,
        enumv: {
            SECURED_PHYSICALLY_INTERIOR: Characteristic.LockLastKnownAction.SECURED_PHYSICALLY_INTERIOR,
            UNSECURED_PHYSICALLY_INTERIOR: Characteristic.LockLastKnownAction.UNSECURED_PHYSICALLY_INTERIOR,
            SECURED_PHYSICALLY_EXTERIOR: Characteristic.LockLastKnownAction.SECURED_PHYSICALLY_EXTERIOR,
            UNSECURED_PHYSICALLY_EXTERIOR: Characteristic.LockLastKnownAction.UNSECURED_PHYSICALLY_EXTERIOR,
            SECURED_BY_KEYPAD: Characteristic.LockLastKnownAction.SECURED_BY_KEYPAD,
            UNSECURED_BY_KEYPAD: Characteristic.LockLastKnownAction.UNSECURED_BY_KEYPAD,
            SECURED_REMOTELY: Characteristic.LockLastKnownAction.SECURED_REMOTELY,
            UNSECURED_REMOTELY: Characteristic.LockLastKnownAction.UNSECURED_REMOTELY,
            SECURED_BY_AUTO_SECURE_TIMEOUT: Characteristic.LockLastKnownAction.SECURED_BY_AUTO_SECURE_TIMEOUT,
        }
    });
    ECharacteristics.push({
        name: "LockPhysicalControls",
        descr1: "Lock accessory physical controls",
        descr2: "Заблокировать физическое управление аксессуаром",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.LockPhysicalControls,
    });
    ECharacteristics.push({
        name: "LockTargetState",
        descr1: "Lock target state",
        descr2: "Желаемое положение механизма блокировки",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.LockTargetState,
    });
    ECharacteristics.push({
        name: "MotionDetected",
        descr1: "Motion detected",
        descr2: "Обнаружено движение",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.MotionDetected,
    });
    ECharacteristics.push({
        name: "Mute",
        descr1: "Mute audio input/output",
        descr2: "Заглушить звук",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.Mute,
    });
    ECharacteristics.push({
        name: "NitrogenDioxideDensity",
        descr1: "Current NO2 density, micrograms/m3",
        descr2: "Текущая насыщенность NO2, микрограм/м3",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.NitrogenDioxideDensity,
    });
    ECharacteristics.push({
        name: "ObstructionDetected",
        descr1: "Obstruction detected",
        descr2: "Обнаружено препятствие",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.ObstructionDetected,
    });
    ECharacteristics.push({
        name: "OccupancyDetected",
        descr1: "Occupancy detected",
        descr2: "Обнаружено присутствие",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.OccupancyDetected,
    });
    ECharacteristics.push({
        name: "On",
        descr1: "On/off",
        descr2: "Включить/выключить",
        format: "bool",
        dpt: "dpt1",
        char: Characteristic.On,
    });
    ECharacteristics.push({
        name: "OutletInUse",
        descr1: "Outlet currently in use",
        descr2: "Розетка используется в текущий момент",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.OutletInUse,
    });
    ECharacteristics.push({
        name: "OzoneDensity",
        descr1: "Ozone density",
        descr2: "Насыщенность кислорода",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.OzoneDensity,
    });
    ECharacteristics.push({
        name: "PM10Density",
        descr1: "PM10 density",
        descr2: "Насыщенность частиц PM10 в воздухе",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.PM10Density,
    });
    ECharacteristics.push({
        name: "PM2_5Density",
        descr1: "PM2.5 density",
        descr2: "Насыщенность частиц PM2.5 в воздухе",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.PM2_5Density,
    });
    ECharacteristics.push({
        name: "PositionState",
        descr1: "Position state of accessory mechanism",
        descr2: "Состояние механизма аксессуара",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.PositionState,
        enumv: {
            DECREASING: Characteristic.PositionState.DECREASING,
            INCREASING: Characteristic.PositionState.INCREASING,
            STOPPED: Characteristic.PositionState.STOPPED,
        }
    });
    ECharacteristics.push({
        name: "ProgramMode",
        descr1: "Indicates if there is scheduled programs on accessory",
        descr2: "Показывает есть ли программные расписания на аксессуаре",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.ProgramMode,
        enumv: {
            NO_PROGRAM_SCHEDULED: Characteristic.ProgramMode.NO_PROGRAM_SCHEDULED,
            PROGRAM_SCHEDULED: Characteristic.ProgramMode.PROGRAM_SCHEDULED,
            PROGRAM_SCHEDULED_MANUAL_MODE: Characteristic.ProgramMode.PROGRAM_SCHEDULED_MANUAL_MODE_,
        }
    });
    ECharacteristics.push({
        name: "ProgrammableSwitchEvent",
        descr1: "Programmable switch event: single/double/long press",
        descr2: "Событие программируемого переключателя: одиночное, двойное, длительное нажатие",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.ProgrammableSwitchEvent,
        enumv: {
            SINGLE_PRESS: Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS,
            DOUBLE_PRESS: Characteristic.ProgrammableSwitchEvent.DOUBLE_PRESS,
            LONG_PRESS: Characteristic.ProgrammableSwitchEvent.LONG_PRESS
        }
    });
    ECharacteristics.push({
        name: "RelativeHumidityDehumidifierThreshold",
        descr1: "Relative humidity dehumidifier threshold",
        descr2: "Пороговое значение влажности осушителя",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.RelativeHumidityDehumidifierThreshold,
    });
    ECharacteristics.push({
        name: "RelativeHumidityHumidifierThreshold",
        descr1: "Relative humidity humidifier threshold",
        descr2: "Пороговое значение влажности увлажнителя",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.RelativeHumidityHumidifierThreshold,
    });
    ECharacteristics.push({
        name: "RemainingDuration",
        descr1: "Remaining duration on accessory",
        descr2: "Оставшееся время действия на аксессуаре",
        format: "uint32",
        dpt: "dpt7",
        char: Characteristic.RemainingDuration,
    });
    ECharacteristics.push({
        name: "ResetFilterIndication",
        descr1: "Send 1 to reset filter change indication",
        descr2: "Установить в 1 для сброса индикации сброса фильтра",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.ResetFilterIndication,
    });
    ECharacteristics.push({
        name: "RotationDirection",
        descr1: "Rotation Direction of accessory mechanism",
        descr2: "Направление вращения",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.RotationDirection,
        enumv: {
            CLOCKWISE: Characteristic.RotationDirection.CLOCKWISE,
            COUNTER_CLOCKWISE: Characteristic.RotationDirection.COUNTER_CLOCKWISE,
        }
    });
    ECharacteristics.push({
        name: "RotationSpeed",
        descr1: "Rotation speed of accessory mechanism",
        descr2: "Скорость вращения",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.RotationSpeed,
    });
    ECharacteristics.push({
        name: "Saturation",
        descr1: "Saturation",
        descr2: "Сатурация",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.Saturation,
    });
    ECharacteristics.push({
        name: "SecuritySystemAlarmType",
        descr1: "Describes the type of alarm triggered by security system",
        descr2: "Описывает тип тревоги системы охраны.",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.SecuritySystemAlarmType,
    });
    ECharacteristics.push({
        name: "SecuritySystemCurrentState",
        descr1: "State of security system",
        descr2: "Текущуу состояние системы охраны",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.SecuritySystemCurrentState,
        enumv: {
            STAY_ARM: Characteristic.SecuritySystemCurrentState.STAY_ARM,
            AWAY_ARM: Characteristic.SecuritySystemCurrentState.AWAY_ARM,
            NIGHT_ARM: Characteristic.SecuritySystemCurrentState.NIGHT_ARM,
            DISARMED: Characteristic.SecuritySystemCurrentState.DISARMED,
            ALARM_TRIGGERED: Characteristic.SecuritySystemCurrentState.ALARM_TRIGGERED,
        }
    });
    ECharacteristics.push({
        name: "SecuritySystemTargetState",
        char: Characteristic.SecuritySystemTargetState,
        descr1: "Target state of security system",
        descr2: "Желаемое состояние системы охраны",
        format: "uint8",
        dpt: "dpt5",
        enumv: {
            STAY_ARM: Characteristic.SecuritySystemTargetState.STAY_ARM,
            AWAY_ARM: Characteristic.SecuritySystemTargetState.AWAY_ARM,
            NIGHT_ARM: Characteristic.SecuritySystemTargetState.NIGHT_ARM,
            DISARM: Characteristic.SecuritySystemTargetState.DISARM,
        }
    });
    ECharacteristics.push({
        name: "SetDuration",
        descr1: "Describes how long valve should be 'In Use'. Defined in seconds",
        descr2: "Описывает как долго клапан должен быть в состоянии 'In Use' в секундах",
        format: "uint32",
        dpt: "dpt7",
        char: Characteristic.SetDuration,
    });
    ECharacteristics.push({
        name: "SlatType",
        descr1: "Describes type of slats. Horizontal or vertical",
        descr2: "Описывает тип заслонок - горизонтальные или вертикальные",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.SlatType,
        enumv: {
            HORIZONTAL: Characteristic.SlatType.HORIZONTAL,
            VERTICAL: Characteristic.SlatType.VERTICAL,
        }
    });
    ECharacteristics.push({
        name: "SmokeDetected",
        descr1: "Indicates if sensor detects abnormal level of smoke",
        descr2: "Сигнализирует высокий уровень дыма",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.SmokeDetected,
    });
    ECharacteristics.push({
        name: "StatusActive",
        descr1: "Describes accessory's current working status",
        descr2: "Описывает текущий статус работы аксессуара",
        format: "bool",
        dpt: "dpt1",
        char: Characteristic.StatusActive,
    });
    ECharacteristics.push({
        name: "StatusFault",
        descr1: "Describes accessory's fault state",
        descr2: "Описывает сбой в работе аксессуара",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.StatusFault,
    });
    ECharacteristics.push({
        name: "StatusJammed",
        descr1: "Describes if accessory's mechanism was jammed",
        descr2: "Описывает заклинивание механизмов аксессуара",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.StatusJammed,
    });
    ECharacteristics.push({
        name: "StatusLowBattery",
        descr1: "Indicates that accessory's battery low status",
        descr2: "Сигнализирует низкий заряд батареи аксессуара",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.StatusLowBattery,
    });
    ECharacteristics.push({
        name: "StatusTampered",
        descr1: "Indicates that accessory was tampered",
        descr2: "Сигнализирует что аксессуар был взломан",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.StatusTampered,
    });
    ECharacteristics.push({
        name: "SulphurDioxideDensity",
        descr1: "SO2 current density, micrograms/m3",
        descr2: "Текущая насыщенность SO2, микрограмм/м3",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.SulphurDioxideDensity,
    });
    ECharacteristics.push({
        name: "SwingMode",
        descr1: "Indicates if swing mode is enabled",
        descr2: "Режим поворота вкл-выкл",
        format: "uint8",
        dpt: "dpt1",
        char: Characteristic.SwingMode,
    });
    ECharacteristics.push({
        name: "TargetAirPurifierState",
        descr1: "Target Air Purifier State - working mode",
        descr2: "Желаемый режим работы очистителя воздуха",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetAirPurifierState,
        enumv: {
            MANUAL: Characteristic.TargetAirPurifierState.MANUAL,
            AUTO: Characteristic.TargetAirPurifierState.AUTO,
        }
    });
    ECharacteristics.push({
        name: "TargetAirQuality",
        descr1: "Target Air Quality",
        descr2: "Желаемое качество воздуха",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetAirQuality,
        enumv: {
            EXCELLENT: Characteristic.TargetAirQuality.EXCELLENT,
            GOOD: Characteristic.TargetAirQuality.GOOD,
            FAIR: Characteristic.TargetAirQuality.FAIR,
        }
    });
    ECharacteristics.push({
        name: "TargetDoorState",
        descr1: "Target Door State - open/closed",
        descr2: "Желаемое положение двери - открыть/закрыть",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetDoorState,
        enumv: {
            OPEN: Characteristic.TargetDoorState.OPEN,
            CLOSED: Characteristic.TargetDoorState.CLOSED,
        }
    });
    ECharacteristics.push({
        name: "TargetFanState",
        descr1: "Target Fan Working Mode - manual/auto",
        descr2: "Желаемый режим работы вентиляции - ручной/авто",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetFanState,
        enumv: {
            MANUAL: Characteristic.TargetFanState.MANUAL,
            AUTO: Characteristic.TargetFanState.AUTO,
        }
    });
    ECharacteristics.push({
        name: "TargetHeaterCoolerState",
        descr1: "Target Heater Cooler State - auto/heat/cool",
        descr2: "Желаемый режим работы нагревателя/охладителя - авто/нагрев/охлаждение",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetHeaterCoolerState,
        enumv: {
            AUTO: Characteristic.TargetHeaterCoolerState.AUTO,
            HEAT: Characteristic.TargetHeaterCoolerState.HEAT,
            COOL: Characteristic.TargetHeaterCoolerState.COOL,
        }
    });
    ECharacteristics.push({
        name: "TargetHeatingCoolingState",
        descr1: "Target working mode of thermostat",
        descr2: "Желаемый режим работы термостата",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetHeatingCoolingState,
        enumv: {
            OFF: Characteristic.TargetHeatingCoolingState.OFF,
            HEAT: Characteristic.TargetHeatingCoolingState.HEAT,
            COOL: Characteristic.TargetHeatingCoolingState.COOL,
            AUTO: Characteristic.TargetHeatingCoolingState.AUTO,
        }
    });
    ECharacteristics.push({
        name: "TargetHorizontalTiltAngle",
        descr1: "Target horizontal tilt angle",
        descr2: "Желаемый угол горизонтального наклона",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.TargetHorizontalTiltAngle,
    });
    ECharacteristics.push({
        name: "TargetHumidifierDehumidifierState",
        descr1: "Target working mode of humidifier/dehumidifier",
        descr2: "Желаемый режим работы увлажнителя/осушителя",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetHumidifierDehumidifierState,
        enumv: {
            HUMIDIFIER_OR_DEHUMIDIFIER: Characteristic.TargetHumidifierDehumidifierState.HUMIDIFIER_OR_DEHUMIDIFIER,
            HUMIDIFIER: Characteristic.TargetHumidifierDehumidifierState.HUMIDIFIER,
            DEHUMIDIFIER: Characteristic.TargetHumidifierDehumidifierState.DEHUMIDIFIER,
        }
    });
    ECharacteristics.push({
        name: "TargetPosition",
        descr1: "Target relative position",
        descr2: "Желаемое положение, в процентах",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.TargetPosition,
    });
    ECharacteristics.push({
        name: "TargetRelativeHumidity",
        descr1: "Target relative humidity",
        descr2: "Желаемая относительная влажность",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.TargetRelativeHumidity,
    });
    ECharacteristics.push({
        name: "TargetSlatState",
        descr1: "Target slat state",
        descr2: "Желаемый режим работы заслонки: ручной, авто",
        format: "uint8",
        dpt: "dpt5",
        char: Characteristic.TargetSlatState,
        enumv: {
            MANUAL: Characteristic.TargetSlatState.MANUAL,
            AUTO: Characteristic.TargetSlatState.AUTO,
        }
    });
    ECharacteristics.push({
        name: "TargetTemperature",
        descr1: "Target temperature of thermostat",
        descr2: "Желаемая температура",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.TargetTemperature,
    });
    ECharacteristics.push({
        name: "TargetTiltAngle",
        descr1: "Target tilt angle",
        descr2: "Желаемый угол наклона",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.TargetTiltAngle,
    });
    ECharacteristics.push({
        name: "TargetVerticalTiltAngle",
        descr1: "Target vertical tilt angle",
        descr2: "Желаемый угол наколна по вертикали",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.TargetVerticalTiltAngle,
    });
    ECharacteristics.push({
        name: "TemperatureDisplayUnits",
        descr1: "Target horizontal tilt angle",
        descr2: "Желаемый угол наколна по горизонтали",
        format: "int",
        dpt: "dpt6",
        char: Characteristic.TemperatureDisplayUnits,
        enumv: {
            CELSIUS: Characteristic.TemperatureDisplayUnits.CELSIUS,
            FAHRENHEIT: Characteristic.TemperatureDisplayUnits.FAHRENHEIT
        }
    });
    ECharacteristics.push({
        name: "ValveType",
        char: Characteristic.ValveType,
        descr1: "Valve type: generic, irrigation, shower, faucet",
        descr2: "Тип клапана - общий, полив, душ, вентиль",
        format: "uint8",
        dpt: "dpt5",
        enumv: {
            GENERIC_VALVE: Characteristic.ValveType.GENERIC_VALVE,
            IRRIGATION: Characteristic.ValveType.IRRIGATION,
            SHOWER_HEAD: Characteristic.ValveType.SHOWER_HEAD,
            WATER_FAUCET: Characteristic.ValveType.WATER_FAUCET,
        }
    });
    ECharacteristics.push({
        name: "VOCDensity",
        descr1: "Volatile organic compund density",
        descr2: "Насыщенность летучих орг. соединений",
        format: "float",
        dpt: "dpt9",
        char: Characteristic.VOCDensity,
    });
    ECharacteristics.push({
        name: "Volume",
        descr1: "Audio volume",
        descr2: "Громкость",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.Volume,
    });
    ECharacteristics.push({
        name: "WaterLevel",
        descr1: "Water level",
        descr2: "Уровень воды",
        format: "percentage",
        dpt: "dpt5",
        char: Characteristic.WaterLevel,
    });

    return ECharacteristics;
}

module.exports = getCharEnum;
