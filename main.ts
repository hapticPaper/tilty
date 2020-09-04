input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Happy)
})
function showDot () {
    basic.clearScreen()
    led.plot(x_spot, y_spot)
}
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Sword)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.AB, function () {
    reset()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
input.onGesture(Gesture.ThreeG, function () {
    reset()
})
function reset () {
    y_spot = 2
    x_spot = 2
    showDot()
}
let y_spot = 0
let x_spot = 0
reset()
basic.forever(function () {
    while (input.rotation(Rotation.Roll) <= -15) {
        if (x_spot == 0) {
        	
        } else {
            x_spot = x_spot - 1
        }
        basic.pause(100)
        showDot()
    }
})
basic.forever(function () {
    while (input.rotation(Rotation.Pitch) <= -15) {
        if (y_spot == 0) {
        	
        } else {
            y_spot = y_spot - 1
        }
        basic.pause(100)
        showDot()
    }
})
basic.forever(function () {
    while (input.rotation(Rotation.Roll) >= 15) {
        if (x_spot == 4) {
        	
        } else {
            x_spot = x_spot + 1
        }
        basic.pause(100)
        showDot()
    }
})
basic.forever(function () {
    while (input.rotation(Rotation.Pitch) >= 15) {
        if (y_spot == 4) {
        	
        } else {
            y_spot = y_spot + 1
        }
        basic.pause(100)
        showDot()
    }
})
