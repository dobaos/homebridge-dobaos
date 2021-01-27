# homebridge-dobaos

## Установка

Полагаем, что сервис dobaos для работы с модулем Weinzierl BAOS 83x уже установлен.

Далее необходимо установить [homebridge](https://github.com/nfarina/homebridge) и этот плагин.

```text
sudo npm i -g homebridge
sudo npm i -g homebridge-dobaos
```

Cоздать необходимые файлы конфигурации

```text
cd ~
mkdir .homebridge
touch .homebridge/config.json
nano .homebridge/config.json
```

Содержимое файла должно быть подобным:

```json
{
  "bridge": {
    "name": "homebridge",
    "username": "18:00:27:40:BC:1B",
    "port": 51825,
    "pin": "031-45-154"
  },
  "plaforms": [
    {
      "platform": "Dobaos",
      "accessories": []
    }
  ],
  "accessories": []
}
```

## Настройка

Все нужные аксессуары( - суть устройства) прописываются в вышеприведенном файле config.json в секции `platforms[Dobaos]-> accessories`.
Есть несколько способов сделать это. Первый - редактировать непосредственно config.json в текстовом редакторе. Минус - легко запутаться в фигурных скобках или допустить синтаксическую ошибку.
Второй - сгенерировать этот файл программно. Для этого предназначена утилита `genDobaosAccessories`, которая устанавливается вместе с данным плагином.
На вход утилиты подается описание аксессуаров в формате yaml, на выходе получаем готовый файл config.json.

Пример описания в формате yaml:

```text
accessories:
  - name: Гостиная люстра
    services:
      - type: Lightbulb
        name: Гостиная люстра
        characteristics:
          - type: On
            control: 1
            status: 2
  - name: Кухня люстра
    services:
      - type: Lightbulb
        name: Кухня люстра
        characteristics:
          - type: On
            control: 3
            status: 4
          - type: Brightness
            control: 5
            status: 6
```

Использование утилиты:

```
genDobaosAccessories config.yml ~/.homebridge/config.json ~/.homebridge/config.json
```

первым аргументом указывается описание аксессуаров в yaml формате, вторым и третьим - в приведенном примере они одинаковы - входящий и исходящий файл config.json.
На всякий случай делайте резервные копии.

## Благодарности

Dmitry Golubin for `RGB` and `WindowCovering` service implementation.

## Installation

First of all, make sure that [homebridge](https://github.com/nfarina/homebridge) is installed. Then proceed to steps below.

Install plugin package:

```
sudo npm i -g homebridge-dobaos
```

Add platform "Dobaos" to config.json file:

```
{
  "bridge": {
    "name": "....",
    ....
  },
    "platforms": [
      {
        "platform" "Dobaos",
        "accessories": []
      }
    ]
}
```

## Configuration

The more convenient and simple way than edit config.json file directly is to write it in yml format. It may look like followinng example:

```
accessories:
  - name: Livroom lights
    services:
      - type: Lightbulb
        name: Livroom lights
        characteristics:
          - type: On
            control: 1
            status: 2
  - name: Kitchen lights
    services:
      - type: Lightbulb
        name: Kitchen lights
        characteristics:
          - type: On
            control: 3
            status: 4
          - type: Brightness
            control: 5
            status: 6
```

In this npm package I provide with simple utility `genDobaosAccessories` which serves to generate json configuration.

Usage:

```
genDobaosAccessories config.yml existingConfig.json > newConfig.json
```

Config.yml should contains "accessory" section like in example above. Existing config.json may contains platform "Dobaos" in platform list or may not. If it contains then script will replace just "accessory" section for this platform, if not then it will create and push new platform information to json.
Don't overwrite your existing config.json file, put it to newConfig.json, check if it is correct json and then replace config.json file.


## Credits

Dmitry Golubin for `RGB` and `WindowCovering` service implementation.

