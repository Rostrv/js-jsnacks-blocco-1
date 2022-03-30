/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let somma = 0

//let numero = parseInt(prompt('inserisci un numero'))

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt('inserisci un numero'))
    somma = somma + numero;
    console.log(numero)
}
console.log(somma)