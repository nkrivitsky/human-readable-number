module.exports = function toReadable(number) {
    if (number == 0 || number == undefined) return "zero"

    let numberStrings = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    let resulltString = ""

    resulltString += Math.trunc(number / 100) > 0 ? numberStrings[Math.trunc(number / 100)] + " hundred" : ""
    number = number % 100
    if (number < 20) {
        resulltString += " " + numberStrings[number]
        number = 0
    } else {
        resulltString += " " + dozens[Math.trunc(number / 10) - 2]
        number = number % 10
    }

    if (number > 0) {
        resulltString += " " + numberStrings[number]
    }

    return resulltString.trim()
}