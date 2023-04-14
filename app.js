import { morseCode } from "./morse-code.js"

export const englishToMorse = (string) => {
    //new string, only lowercase letters, split and create new array
    //each symbol being returned corresponds to the value of the keys in morse code array
    const morseString = string.toLowerCase().split("").map((letter)=> {
        return morseCode[letter]
    })
    //space after each letter in morse
    return morseString.join(" ")
}
console.log(englishToMorse("r =44+f w- &wf-w()fw-ded@s 23r2"))