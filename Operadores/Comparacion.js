// Operadores de comparación en JavaScript

// "==" : Compara dos valores para ver si son iguales, realizando conversión de tipo si es necesario.
" == " 

// "===" : Compara dos valores para ver si son estrictamente iguales, sin realizar conversión de tipo.
" === " 

// "!=" : Compara dos valores para ver si son diferentes, realizando conversión de tipo si es necesario.
" != " 

// "!==" : Compara dos valores para ver si son estrictamente diferentes, sin realizar conversión de tipo.
" !== " 

// ">" : Compara si el valor de la izquierda es mayor que el valor de la derecha.
" > " 

// "<" : Compara si el valor de la izquierda es menor que el valor de la derecha.
" < " 

// ">=" : Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.
" >= " 

// "<=" : Compara si el valor de la izquierda es menor o igual que el valor de la derecha.
" <= " 


// Ejemplos de uso de operadores de comparación

const a = 10 // Definimos una constante a con valor 10
const b = 20 // Definimos una constante b con valor 20
const c = "10" // Definimos una constante c con un valor string "10"

// Comparación entre a y b
console.log(a == b) // false: 10 no es igual a 20
console.log(a === c) // false: 10 (número) no es estrictamente igual a "10" (cadena)

// Comparación entre a y c
console.log(a != b) // true: 10 es diferente de 20
console.log(a != c) // false: 10 (número) es igual a "10" (cadena) después de conversión

console.log(a !== b) // true: 10 no es estrictamente diferente de 20
console.log(a !== c) // true: 10 (número) no es estrictamente igual a "10" (cadena)

// Comparaciones numéricas
console.log(a > b) // false: 10 no es mayor que 20
console.log(a <= b) // true: 10 es menor o igual que 20
console.log(a >= b) // false: 10 no es mayor o igual que 20