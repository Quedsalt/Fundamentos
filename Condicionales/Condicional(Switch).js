// Condicional Switch

/* Ejemplo

switch(expresion) {
    case valor1:
        //código a ejecutar
        break
    case valor2:
        //código a ejecutar
        break
    default:
        //código a ejecutar
}
*/

let expr = "Papayas"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 pesos el kilo")
        break
    case "Manzana":
        console.log("Las naranjas cuestan $43 pesos el kilo")
        break
    case "Platanos":
        console.log("Las naranjas cuestan $30 pesos el kilo")
        break   
    case "Mangos":
    case "Papayas":
        console.log("Los Mangos y las Papayas cuestan $25 pesos el kilo")
        break   
    default:
        console.log(`Lo siento no contamos con ${expr}`)
}

console.log("¿Hay algo más que desees?")