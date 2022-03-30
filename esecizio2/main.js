/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let firstWord = prompt('inserisci una parola')
console.log(firstWord)
let secondWord = prompt("inserisci un'altra parola")
console.log(firstWord)


if (firstWord.length > secondWord.length) {
    console.log('secondWord')
    console.log('firstWord')

} else {
    console.log('firstWord')
    console.log('secondWord')
}