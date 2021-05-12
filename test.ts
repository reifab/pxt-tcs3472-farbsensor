Farbsensor.start(TCS34725_AGAIN.EMPFINDLICHKEIT_60X)
basic.forever(function () {
    serial.writeValue("r", Farbsensor.getSensorData(RGB.ROT))
    serial.writeValue("g", Farbsensor.getSensorData(RGB.GRUEN))
    serial.writeValue("b", Farbsensor.getSensorData(RGB.BLAU))
    serial.writeValue("c", Farbsensor.getSensorData(RGB.ALLE_FARBEN))
})