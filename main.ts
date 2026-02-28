let hor = 0
let ver = 0
let min = 0
let max = 0
let rep = 0
basic.forever(function () {
    hor = 0
    ver = 0
    min = 0
    max = 4
    rep = 4
    if (min < max) {
        for (let index = 0; index <= 2; index++) {
            if (hor < max) {
                for (let index2 = 0; index2 < rep; index2++) {
                    led.plot(hor, ver)
                    basic.pause(100)
                    basic.clearScreen()
                    hor += 1
                }
            }
            if (ver < max) {
                for (let index2 = 0; index2 < rep; index2++) {
                    led.plot(hor, ver)
                    basic.pause(100)
                    basic.clearScreen()
                    ver += 1
                }
            }
            if (hor > min) {
                for (let index2 = 0; index2 < rep; index2++) {
                    led.plot(hor, ver)
                    basic.pause(100)
                    basic.clearScreen()
                    hor += -1
                }
            }
            if (ver > min) {
                for (let index2 = 0; index2 < rep; index2++) {
                    led.plot(hor, ver)
                    basic.pause(100)
                    basic.clearScreen()
                    ver += -1
                }
            }
            hor += 1
            ver += 1
            rep += -2
        }
        led.plot(2, 2)
        basic.pause(500)
        basic.clearScreen()
    }
})
