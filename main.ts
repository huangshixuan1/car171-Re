function backbackback海道 () {
    pwm = 250
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    pwm
    )
}
function modaup () {
    sensors.DDMmotor(
    AnalogPin.P12,
    1,
    AnalogPin.P2,
    150
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        gogo宜得利()
        basic.pause(50)
    } else if (receivedNumber == 2) {
        backbackback海道()
        basic.pause(50)
    } else if (receivedNumber == 4) {
        left旅遊啪啪造()
        basic.pause(50)
    } else if (receivedNumber == 6) {
        rightnow過年要破產()
        basic.pause(50)
    } else if (receivedNumber == 0) {
        stopstopyourdangerousthing()
    } else if (receivedNumber == 9) {
        開9右邊R()
        basic.pause(50)
    } else if (receivedNumber == 7) {
        關7左邊L()
        basic.pause(50)
    } else if (receivedNumber == 1) {
        modaup()
        basic.pause(100)
    } else if (receivedNumber == 3) {
        modad()
        basic.pause(100)
    }
})
function 開9右邊R () {
    pins.servoWritePin(AnalogPin.P1, 80)
}
function 關7左邊L () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function left旅遊啪啪造 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    50
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm
    )
}
function modad () {
    sensors.DDMmotor(
    AnalogPin.P12,
    0,
    AnalogPin.P2,
    150
    )
}
function stopstopyourdangerousthing () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P12,
    0,
    AnalogPin.P2,
    0
    )
}
function rightnow過年要破產 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    50
    )
}
function gogo宜得利 () {
    pwm = 250
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm
    )
}
let pwm = 0
radio.setGroup(171)
