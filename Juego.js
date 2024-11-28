//Juego adivina el numero

const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt (
    prompt("Adivina el numero secreto entre el 1 al 10")
)

console.log(`Este es el número con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("!FELICIDADES ADIVINASTE EL NUMERO SECRETO")
} else if (numeroJugador < numeroSecreto) {
    console.log(`TU NUMERO ES MAS PEQUEÑO, EL NUMERO ERA ${numeroSecreto}`)
} else if (numeroJugador > numeroSecreto) {
    console.log(`TU NUMERO ES MAS Alto, EL NUMERO ERA ${numeroSecreto}`)
} else {
    console.log("NO ES EL NUMERO")
}