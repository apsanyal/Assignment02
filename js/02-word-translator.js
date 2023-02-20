//establish language code

let langCode = prompt('Please choose a language: es, de, en, or fr')


//translate Hello world based on language selection
if (langCode == "es") {
    alert("\'Hello World\' translated in Spanish is: \'Hola Mundo\'")
} else if (langCode =="de") {
    alert("\'Hello World\' translated in German is: \'Hallo Welt\'")
} else if (langCode== "en") {
    alert("\'Hello World\' translated in English is: \'Hello World\'")
} else if (langCode == "fr") {
    alert("\'Hello World\' translated in French is: \'Bonjour le monde\'")
} else {
    alert("Hello World. You did not choose a language.")
}