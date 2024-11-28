// Operadores lógicos en JavaScript

// "&&" : Operador lógico AND. Devuelve true si ambos operandos son verdaderos.
" && " 

// "||" : Operador lógico OR. Devuelve true si al menos uno de los operandos es verdadero.
" || " 

// "!" : Operador lógico NOT. Invierte el valor booleano del operando.
" ! " 

// Definimos algunas constantes para las comparaciones
const a = 10 // Definimos una constante a con valor 10
const b = 20 // Definimos una constante b con valor 20
const c = "10" // Definimos una constante c con un valor string "10"

// Ejemplo de uso del operador AND (&&)
console.log(a == b && a === c) // false: ambas condiciones deben ser verdaderas, pero a no es igual a b

// Ejemplo de uso del operador OR (||)
console.log(a != b || a === c) // true: al menos una condición es verdadera (a es diferente de b)

// Ejemplo de uso del operador NOT (!)
console.log(!(a === c)) // true: a no es estrictamente igual a c, por lo tanto, la negación es verdadera