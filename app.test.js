import { englishToMorse } from "./app"
import { morseToEnglish } from "./app"

describe("first", () => {
    it("should return .- when given the string of `a` (letter test)", () => {
        const string = englishToMorse("a")
        expect(string).toBe(".-")
    })

    it("should return .-.. .. .- when given string `lia` with no spaces (word test)", () => {
        const string = englishToMorse("lia")
        expect(string).toBe(".-.. .. .-")
    })

    it("should return .-.. .. .- when given string `Lia` with no spaces (capital letter test)", () => {
        const string = englishToMorse("Lia")
        expect(string).toBe(".-.. .. .-")
    })

    it("should return .-.. .. .- -. .- / .--. . - .-. --- ...- .- when given string `Liana Petrova` (words with space test)", () => {
        const string = englishToMorse("Liana Petrova")
        expect(string).toBe(".-.. .. .- -. .- / .--. . - .-. --- ...- .-")
    })

    it("should return ..--- ..... when given number `25` (number test)", () => {
        const string = englishToMorse("25")
        expect(string).toBe("..--- .....")
    })

    it("should return .... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.-- when given sentence `Hello, World!` (sentence with punctuation test)", () => {
        const string = englishToMorse("Hello, World!")
        expect(string).toBe(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")
    })

    it("should return .-. / -...- ....- ....- .-.-. ..-. / .-- -....- / .-... .-- ..-. -....- .-- -.--. -.--.- ..-. .-- -....- -.. . -.. .--.-. ... / ..--- ...-- .-. ..--- when given a keysmash `r =44+f w- &wf-w()fw-ded@s 23r2` (special characters test", () => {
        const string = englishToMorse("r =44+f w- &wf-w()fw-ded@s 23r2")
        expect(string).toBe(".-. / -...- ....- ....- .-.-. ..-. / .-- -....- / .-... .-- ..-. -....- .-- -.--. -.--.- ..-. .-- -....- -.. . -.. .--.-. ... / ..--- ...-- .-. ..---")
    })

})

describe("first", () => {
    it("should return the string `a` when given `.-` (letter test)", () => {
        const string = morseToEnglish(".-")
        expect(string).toBe("a")
    })

    it("should return the string `lia` when given string `.-.. .. .-` (word test)", () => {
        const string = morseToEnglish(".-.. .. .-")
        expect(string).toBe("lia")
    })

    it("should return `liana petrova` when given `.-.. .. .- -. .- / .--. . - .-. --- ...- .-` (words with space test)", () => {
        const string = morseToEnglish(".-.. .. .- -. .- / .--. . - .-. --- ...- .-")
        expect(string).toBe("liana petrova")
    })

    it("should return the number 25 when given `..--- .....` (number test)", () => {
        const string = morseToEnglish("..--- .....")
        expect(string).toBe("25")
    })

    it("should return the sentence `hello, world!` when given `.... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--` (sentence with punctuation test)", () => {
        const string = morseToEnglish(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")
        expect(string).toBe("hello, world!")
    })

    it("should return the keysmash `r =44+f w- &wf-w()fw-ded@s 23r2` when given `.-. / -...- ....- ....- .-.-. ..-. / .-- -....- / .-... .-- ..-. -....- .-- -.--. -.--.- ..-. .-- -....- -.. . -.. .--.-. ... / ..--- ...-- .-. ..---` (special characters test", () => {
        const string = morseToEnglish(".-. / -...- ....- ....- .-.-. ..-. / .-- -....- / .-... .-- ..-. -....- .-- -.--. -.--.- ..-. .-- -....- -.. . -.. .--.-. ... / ..--- ...-- .-. ..---")
        expect(string).toBe("r =44+f w- &wf-w()fw-ded@s 23r2")
    })

})

