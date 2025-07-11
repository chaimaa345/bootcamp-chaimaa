// Morse JSON string
const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-", " ": " "
}`;

// Function 1: Convert JSON to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}

// Function 2: Translate input to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence").toLowerCase();
    const characters = userInput.split("");

    const morseResult = [];
    for (let char of characters) {
      if (morseJS[char]) {
        morseResult.push(morseJS[char]);
      } else {
        reject(`Character "${char}" is not in Morse dictionary`);
        return;
      }
    }

    resolve(morseResult);
  });
}

// Function 3: Display on DOM
function joinWords(morseTranslation) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = morseTranslation.join("<br>");
}

// Call the chain
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(result => joinWords(result))
  .catch(error => console.log(error));
