input.onButtonPressed(Button.A, function () {
    radio.sendString("ALTLEDCHANGE")
    Green()
    basic.pause(500)
    Blue()
})
function Off () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    return 0
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "CONNECTED") {
        basic.showLeds(`
            # . . . .
            # . # . .
            # . # # .
            # . . . .
            # # # # .
            `)
        Connected = true
        basic.pause(1000)
        Blue()
    } else if (receivedString == "DISABLE" || receivedString == "CRAON") {
        while (true) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            red()
        }
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ALTREDCHANGE")
    Green()
    basic.pause(500)
    Blue()
})
function red () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    return 0
}
function Green () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    return 0
}
function Blue () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    return 0
}
let Connected = false
let Allowed = true
Connected = false
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.forever(function () {
    if (Connected == false) {
        Blue()
        basic.pause(1000)
        Off()
        basic.pause(1000)
        radio.sendString("ALTCONNECT")
    }
})
