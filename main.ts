let 뭐눌렀니 = 0
let 뭐나왔니 = 0
input.onButtonPressed(Button.A, function () {
    뭐눌렀니 = 1
    if (뭐나왔니 == 뭐눌렀니) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    뭐눌렀니 = 2
    if (뭐나왔니 == 뭐눌렀니) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    뭐눌렀니 = 3
    if (뭐나왔니 == 뭐눌렀니) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    뭐눌렀니 = 0
    뭐나왔니 = randint(1, 3)
    if (뭐나왔니 == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (뭐나왔니 == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (뭐나왔니 == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.pause(500)
    if (뭐눌렀니 == 0) {
        basic.showIcon(IconNames.No)
    }
})
