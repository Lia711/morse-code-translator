import { morseCode, englishCode } from "./morse-code.js"

export const englishToMorse = (string) => {
    //new string, only lowercase letters, split and create new array
    //each symbol being returned corresponds to the value of the keys in morse code array
    const morseString = string.toLowerCase().split("").map((letter)=> {
        return morseCode[letter]
    })
    //morse code letters separated by space
    return morseString.join(" ")
}

export const morseToEnglish = (symbol) => {
    //split by spaces to find letters
    const engString = symbol.split(" ").map((symbol)=> {
        return englishCode[symbol]
    })
    return engString.join("")
}

