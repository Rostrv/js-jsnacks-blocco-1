/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let somma = 0
let i = 1
    //let numero = parseInt(prompt('inserisci un numero'))

while (i <= 10) {
    let numero = parseInt(prompt('inserisci un numero'))
    somma = somma + numero
    i++
    console.log(numero)
}
console.log(somma)