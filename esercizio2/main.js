/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let firstWord = prompt('inserisci una parola')

let secondWord = prompt("inserisci un'altra parola")


if (firstWord.length > secondWord.length) {
    console.log(secondWord)
    console.log(firstWord)

} else if (firstWord.length < secondWord.length) {
    console.log(firstWord)
    console.log(secondWord)

} else if (firstWord.length == secondWord.length) {
    console.log('le parole sono uguali')
}