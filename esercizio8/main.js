//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
let numero = prompt('inserisci un numero di 4 cifre')
let somma = 0

for (let i = 0; i < numero.length; i++) {
    somma += parseInt(numero[i]);
}
console.log(somma)

if (numero.length != 4) {
    alert('inserisci un numero di 4 cifre')
}