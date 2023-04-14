import { morseCode } from "./morse-code.js"

const inputField=document.querySelector("input")
const outputField=document.querySelector(".output")


export const englishToMorse = () => {
    //new string, only lowercase letters, split and create new array
    //each symbol being returned corresponds to the value of the keys in morse code array
    const morseString = inputField.value.toLowerCase().split("").map((letter)=> {
        return morseCode[letter]
    })
    outputField.innerHTML= morseString.join(" ")
}
inputField.addEventListener("input", englishToMorse)
