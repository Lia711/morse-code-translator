import { englishToMorse, morseToEnglish } from "./app.js";

const inputField1=document.querySelector(".engInput")
const outputField1=document.querySelector("#morseOutput")
const inputField2=document.querySelector(".morseInput")
const outputField2=document.querySelector("#engOutput")


const handleInput1 = (event) => {
    outputField1.innerHTML=englishToMorse(event.target.value) 
}
inputField1.addEventListener("input", handleInput1)

const handleInput2 = (event) => {
    outputField2.innerHTML=morseToEnglish(event.target.value)
}
inputField2.addEventListener("input", handleInput2)


