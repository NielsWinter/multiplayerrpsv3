radio.onReceivedNumber(function (receivedNumber) {
    OtherChoice = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (Choice == 0) {
        if (select > 1) {
            select += -1
        } else {
            if (select == 1) {
                select = 3
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (select != 0) {
        if (Choice == 0) {
            Choice = select
            radio.sendNumber(Choice)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    reset = 1
})
input.onButtonPressed(Button.B, function () {
    if (Choice == 0) {
        if (select < 3) {
            select += 1
        } else {
            if (select == 3) {
                select = 1
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Choice == 0) {
        select = randint(1, 3)
        Choice = select
        basic.pause(2000)
        radio.sendNumber(Choice)
    }
})
let reset = 0
let OtherChoice = 0
let Choice = 0
let select = 0
let winloss = 0
select = 0
Choice = 0
OtherChoice = 0
reset = 0
radio.setGroup(1)
basic.forever(function () {
    if (select == 0) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (select == 1) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # #
            . # # # #
            . . # # .
            `)
    }
    if (select == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (select == 3) {
        basic.showLeds(`
            . . . # #
            . . # # #
            # # # # .
            # # # . .
            . # # . .
            `)
    }
})
basic.forever(function () {
    if (reset == 1) {
        winloss = 0
        select = 0
        Choice = 0
        OtherChoice = 0
        reset = 0
    }
})
basic.forever(function () {
    if (Choice == 1) {
        if (OtherChoice == 2) {
            winloss = 2
        }
        if (OtherChoice == 3) {
            winloss = 1
        }
    }
})
basic.forever(function () {
    if (Choice == 2) {
        if (OtherChoice == 3) {
            winloss = 2
        }
        if (OtherChoice == 1) {
            winloss = 1
        }
    }
})
basic.forever(function () {
    if (Choice == 3) {
        if (OtherChoice == 1) {
            winloss = 2
        }
        if (OtherChoice == 2) {
            winloss = 1
        }
    }
})
basic.forever(function () {
    if (Choice != 0) {
        if (Choice == OtherChoice) {
            radio.sendString(" TIE")
            basic.showString(" TIE")
            reset = 1
        }
    }
})
basic.forever(function () {
    if (winloss == 1) {
        radio.sendString(" LOSS")
        basic.showString(" WIN")
        reset = 1
    }
})
basic.forever(function () {
    if (winloss == 2) {
        radio.sendString(" WIN")
        basic.showString(" LOSS")
        reset = 1
    }
})
