radio.onReceivedValue(function (name, value) {
    if (name == "switch") {
        if (value == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            pins.servoWritePin(AnalogPin.P0, 0)
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            pins.servoWritePin(AnalogPin.P0, 180)
        }
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    // 名前を変える
    radio.sendValue("taro", input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(100)
})
