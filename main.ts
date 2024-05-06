basic.forever(function () {
    if (smarthome.ultrasoundSensor(DigitalPin.P0, smarthome.Distance_Unit_List.Distance_Unit_cm) <= 8) {
        basic.showIcon(IconNames.Yes)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
        basic.pause(5000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    } else if (smarthome.ultrasoundSensor(DigitalPin.P0, smarthome.Distance_Unit_List.Distance_Unit_cm) > 8) {
        basic.showIcon(IconNames.No)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(500)
    }
})
