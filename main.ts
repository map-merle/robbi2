input.onGesture(Gesture.TiltRight, function () {
    if (schuetteln == 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 B A G A B C5 B ", 350)
        for (let index = 0; index < 4; index++) {
            if (schuetteln == 0) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showIcon(IconNames.SmallDiamond)
                basic.showIcon(IconNames.Diamond)
                basic.showIcon(IconNames.Diamond)
                basic.showIcon(IconNames.SmallDiamond)
            }
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (schuetteln == 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showString("  I like you ")
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Happy)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        basic.showIcon(IconNames.Happy)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (schuetteln == 0) {
        for (let index = 0; index < 4; index++) {
            if (schuetteln == 0) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . # # # .
                    # # # # #
                    # # . # #
                    # # # # #
                    . # # # .
                    `)
            }
        }
        basic.pause(1000)
        basic.showString("Du bist toll")
        basic.showIcon(IconNames.Chessboard)
        basic.pause(800)
        basic.showString(" so wie du bist")
        basic.showIcon(IconNames.Target)
        basic.pause(800)
        basic.showString(" Ich mag dich ")
        basic.showIcon(IconNames.Diamond)
    }
})
input.onGesture(Gesture.Shake, function () {
    schuetteln = 1
})
input.onGesture(Gesture.LogoDown, function () {
    if (schuetteln == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(0)
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.showNumber(4)
    basic.showNumber(5)
    basic.showNumber(6)
    basic.showNumber(7)
    basic.showNumber(8)
    basic.showNumber(9)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
let rechtsIR = 0
let schuetteln = 0
schuetteln = 0
music.playMelody("C5 A E D C5 E D A ", 500)
basic.showString("Hey ROBBO hier ")
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (schuetteln == 1) {
        music.playMelody("C5 C C5 C C5 C5 C5 C ", 650)
    }
})
basic.forever(function () {
    rechtsIR = TobbieII.Read_RBlock()
    if (rechtsIR > 50) {
        TobbieII.forward()
    } else {
        TobbieII.stopwalk()
    }
})
basic.forever(function () {
    if (schuetteln == 1) {
        basic.showString("ERROR")
    }
})
basic.forever(function () {
    if (schuetteln == 1) {
        basic.pause(8000)
        schuetteln = 0
    }
})
