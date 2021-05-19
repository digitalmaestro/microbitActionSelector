function lightFunction () {
    lightValue = input.lightLevel()
    basic.showNumber(lightValue)
    selection = waiting
}
function conditionFunction () {
    if (selection == keyword[0]) {
        celsiusFunction()
    }
    if (selection == keyword[1]) {
        lightFunction()
    }
    if (selection == keyword[2]) {
        happyFunction()
    }
    if (selection == keyword[3]) {
        surpriseFuction()
    }
}
input.onButtonPressed(Button.A, function () {
    if (option == key.length) {
        option = 0
        basic.showString("" + (key[option]))
        letter = key[option]
        option += 1
    } else {
        basic.showString("" + (key[option]))
        letter = key[option]
        option += 1
    }
})
function happyFunction () {
    basic.showIcon(IconNames.Happy)
    selection = waiting
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    indexValue = key.indexOf(letter)
    if (letter == key[indexValue]) {
        selection = keyword[indexValue]
    }
    if (letter == key[indexValue]) {
        selection = keyword[indexValue]
    }
    if (letter == key[indexValue]) {
        selection = keyword[indexValue]
    }
    if (letter == key[indexValue]) {
        selection = keyword[indexValue]
    }
    conditionFunction()
})
function celsiusFunction () {
    temperature = input.temperature()
    basic.showNumber(temperature)
    selection = waiting
}
function surpriseFuction () {
    basic.showIcon(IconNames.Surprised)
    selection = waiting
}
let temperature = 0
let indexValue = 0
let letter = ""
let lightValue = 0
let keyword: string[] = []
let option = 0
let key: string[] = []
let selection = ""
let waiting = ""
waiting = "waiting"
selection = waiting
key = ["C", "L", "H", "S"]
option = 0
keyword = ["celsius", "light", "happy", "surprised"]
basic.forever(function () {
	
})
