// Explicit Type Casting (Conversión de tipo explícita)

// Definimos una cadena que representa un número entero
const string = "42"
// Convertimos la cadena a un número entero usando parseInt
const integer = parseInt(string)
// Mostramos el número entero en la consola
console.log(integer)
// Mostramos el tipo de dato del valor convertido
console.log(typeof integer)

// Definimos una cadena que representa un número decimal
const stringDecimal = "3.14"
// Convertimos la cadena a un número de punto flotante usando parseFloat
const float = parseFloat(stringDecimal)
// Mostramos el número decimal en la consola
console.log(float)
// Mostramos el tipo de dato del valor convertido
console.log(typeof float)

// Definimos una cadena que representa un número binario
const binary = "1010"
// Convertimos la cadena binaria a decimal usando parseInt con base 2
const decimal = parseInt(binary, 2)
// Mostramos el número decimal resultante en la consola
console.log(decimal)
// Mostramos el tipo de dato del valor convertido
console.log(typeof decimal)

// Implicit Type Casting (Conversión de tipo implícita)

// Suma de una cadena y un número, lo que resulta en concatenación
const sum = "5" + 3
// Mostramos el resultado en la consola
console.log(sum)

// Suma de una cadena y un booleano, lo que también resulta en concatenación
const sumWithBoolean = "3" + true
// Mostramos el resultado en la consola
console.log(sumWithBoolean)

// Suma de un número y un booleano, donde true se convierte en 1
const sumWithNumber = 2 + true
// Mostramos el resultado en la consola
console.log(sumWithNumber)

// Definimos valores para demostrar diferentes combinaciones de tipos
const stringValue = "10"
const numberValue = 10
const booleanValue = true

// Separador para facilitar la lectura de los resultados
console.log("-------------------------")
// Si uno de los operandos es una cadena, siempre se realiza concatenación.
console.log(stringValue + stringValue) // Concatenación: "10" + "10" => "1010"
console.log(stringValue + numberValue) // Concatenación: "10" + 10 => "1010"
console.log(stringValue + booleanValue) // Concatenación: "10" + true => "10true"
console.log(numberValue + stringValue) // Concatenación: 10 + "10" => "1010"
console.log(numberValue + numberValue) // Suma: 10 + 10 => 20
console.log(numberValue + booleanValue) // Suma: 10 + true => 11 (true es tratado como 1)
console.log(booleanValue + stringValue) // Concatenación: true + "10" => "true10"
console.log(booleanValue + numberValue) // Suma: true + 10 => 11 (true es tratado como 1)
console.log(booleanValue + booleanValue) // Suma: true + true => 2 (true es tratado como 1)