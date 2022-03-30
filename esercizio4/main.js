/*SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

let nome = prompt('inserisci il tuo nome')
console.log(nome)


let lista = ['rosario', 'ciccio', 'mario', 'andrea']
console.log(lista);

let nomePresente = false;

for (let i = 0; i < lista.length; i++) {
    if (nome == lista[i]) {
        nomePresente = true;
    }
}


if (nomePresente == true) {
    alert('Puoi partecipare alla festa!')

} else {
    alert('Mi dispiace, non puoi partecipare!')

    window.location.reload()


}