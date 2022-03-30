//Stampa il cubo dei primi N numeri,dove N è un numero indicato dall’utente.
let numero = Number(prompt('inserisci di quanti numeri vuoi il cubo'))
console.log(numero)


for (let i = 1; i <= numero; i++) {

    let cubo = (Math.pow(i, 3));

    console.log(Math.pow(i, 3));

    document.write(' ' + cubo)
}