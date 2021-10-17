Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM9, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    music.ringTone(988)
    basic.pause(400)
    music.rest(music.beat(BeatFraction.Sixteenth))
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
Mbit_IR.init(Pins.P8)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (Tinybit.Ultrasonic_Car() < 25) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else if (Tinybit.Ultrasonic_Car() < 30) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 103)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 86)
    } else if (Tinybit.Ultrasonic_Car() < 60) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 125)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
