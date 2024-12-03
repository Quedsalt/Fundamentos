//loop (For)
/*
for (variable; condicion; incremento) {
    código a ejecutar 
} 
*/

let list = ["eat", "sleep", "code", "repeat"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}


//loop (for of)

/*arrays, strings [algo]

for (variable of objeto) {
    código
}
*/

let canasta = ["Manzana", "Pera", "Naranja", "Uva"]

for (fruta of canasta) {
    console.log(fruta)
}

//Loop (for in)