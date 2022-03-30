/*SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let vuoto = []

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt('inserisci un numero'))
    console.log(numero)

    if (numero % 3 == 0) {
        vuoto.push(numero);
        console.log(vuoto);
    }
}