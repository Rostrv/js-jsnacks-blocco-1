let first = parseInt(prompt('inserisci il primo numero'))
console.log(first)

let second = parseInt(prompt('inserisci il secondo numero'))
console.log(second)

if (first > second) {
    console.log('first è maggiore di second')
} else if (first < second) {
    console.log('second è maggiore di first')
} else {
    console.log('i numeri sono uguali')
}