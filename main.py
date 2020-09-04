def showDot():
    basic.clear_screen()
    led.plot(x_spot, y_spot)

def on_gesture_tilt_left():
    global x_spot
    while input.rotation(Rotation.ROLL) <= -20:
        if x_spot == 0:
            pass
        else:
            x_spot = x_spot - 1
        basic.pause(50)
        showDot()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_shake():
    reset()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    global x_spot
    while input.rotation(Rotation.ROLL) >= 0:
        if x_spot == 4:
            pass
        else:
            x_spot = x_spot + 1
        basic.pause(1000 - (1000*(input.rotation(Rotation.ROLL)/180)))
        showDot()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_three_g():
    reset()
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

def reset():
    global y_spot, x_spot
    y_spot = 2
    x_spot = 2
    showDot()
y_spot = 0
x_spot = 0
reset()

def on_forever():
    global y_spot
    while input.rotation(Rotation.PITCH) <= -20:
        if y_spot == 0:
            pass
        else:
            y_spot = y_spot - 1
        basic.pause(50)
        showDot()
basic.forever(on_forever)

def on_forever2():
    global y_spot
    while input.rotation(Rotation.PITCH) >= 20:
        if y_spot == 4:
            pass
        else:
            y_spot = y_spot + 1
        basic.pause(50)
        showDot()
basic.forever(on_forever2)
