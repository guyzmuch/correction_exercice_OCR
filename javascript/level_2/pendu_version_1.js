/*
  CREER UN JEU DE PENDU
*/

const wordList = [ "python", "ruby", "sublime", "clavier"];
const randomWord = wordList[Math.floor(Math.random()*wordList.length)]

let finalWord = randomWord.split("").map(() => "_")

let wrongLetterCount = 0
while (randomWord !== finalWord.join("") && wrongLetterCount < 5){
	console.log("Le mot a trouver est : " + finalWord.join(" "))
	let letter = prompt("Donner une lettre: ")
	let letterIndex = randomWord.indexOf(letter)
	if (letterIndex === -1) {
		wrongLetterCount ++
	} else {
		finalWord[letterIndex] = letter
	}
}

if (finalWord.indexOf("_") === -1) {
	console.log("Tu as gagner")
} else {
	console.log("Tu as perdu")
}
console.log("Le mot a trouver était : " + randomWord)
