radio.onReceivedValue(function (name, value) {
    if (name == "led") {
        if (value == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    } else if (name == "door") {
        if (value == 1) {
            pins.servoWritePin(AnalogPin.P0, 180)
        } else {
            pins.servoWritePin(AnalogPin.P0, 0)
        }
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    // 名前を変える
    radio.sendValue("taro", input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(1000)
})
