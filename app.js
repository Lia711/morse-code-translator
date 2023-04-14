import { morseCode } from "./morse-code.js"

const inputField=document.querySelector("input")
const outputField=document.querySelector(".output")


export const englishToMorse = (event) => {
    //new string, only lowercase letters, split and create new array
    //each symbol being returned corresponds to the value of the keys in morse code array
    const morseString = event.target.value.toLowerCase().split("").map((letter)=> {
        return morseCode[letter].join(" ")
    })
    outputField.innerHTML= morseString
}
inputField.addEventListener("input", englishToMorse)
