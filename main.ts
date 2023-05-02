let val = 0
led.enable(false)
basic.clearScreen()
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
})
basic.forever(function () {
    while (val < 1024) {
        val = val + 1
        pins.analogWritePin(AnalogPin.P0, val)
        basic.pause(5)
    }
    while (val > 0) {
        val = val - 1
        pins.analogWritePin(AnalogPin.P0, val)
    }
})
