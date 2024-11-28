// NÚMEROS EN JAVASCRIPT

// 1. Tipos de Número: Entero y Decimal
const entero = 42; // Un número entero
const decimal = 3.14; // Un número decimal (flotante)

// Se utiliza typeof para verificar el tipo de las variables.
console.log(typeof entero, typeof decimal); // Imprime: number number

// 2. Notación Científica
const cientifico = 5e3; // Representa 5 * 10^3, que es 5000

// 3. Valores Especiales: Infinito y NaN
const infinito = Infinity; // Representa un valor infinito
const noEsUnNúmero = NaN; // "Not-a-Number", indica un valor que no es un número

// OPERACIONES ARITMÉTICAS

// 1. Operaciones Básicas: Suma, Resta, Multiplicación y División
const suma = 3 + 4; // Suma de dos números
const resta = 4 - 4; // Resta de dos números
const multiplicacion = 4 * 7; // Multiplicación de dos números
const division = 16 / 2; // División de dos números

// 2. Módulo y Exponenciación
const modulo = 15 % 8; // Resto de la división de 15 entre 8 (resultado: 7)
const exponenciacion = 2 ** 3; // Exponenciación: 2 elevado a la potencia de 3 (resultado: 8)

// PRECISIÓN EN NÚMEROS DECIMALES
const resultado = 0.1 + 0.2; // Suma que puede dar lugar a problemas de precisión en punto flotante
console.log(resultado); // Imprime el resultado de la suma (puede no ser exactamente 0.3)
console.log(resultado.toFixed(1)); // Redondea el resultado a un decimal (imprime: "0.3")
console.log(resultado === 0.3); // Compara el resultado con el número exacto (imprime: false)

// OPERACIONES AVANZADAS CON MATH

// Cálculo de la raíz cuadrada
const raizCuadrada = Math.sqrt(16); // Raíz cuadrada de 16 (resultado: 4)

// Valor absoluto de un número
const valorAbsoluto = Math.abs(-7); // Valor absoluto de -7 (resultado: 7)

// Generar un número aleatorio entre 0 y 1
const aleatorio = Math.random(); // Genera un número aleatorio entre [0,1)

// Imprimir resultados de operaciones avanzadas
console.log(raizCuadrada); // Imprime: 4
console.log(valorAbsoluto); // Imprime: 7
console.log(aleatorio); // Imprime un número aleatorio entre [0,1)