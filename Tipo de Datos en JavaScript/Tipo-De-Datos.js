// PRIMITIVOS

// string: Representa una secuencia de caracteres. En este caso, se almacena el nombre de una persona.
let nombre = "Sara";

// number: Representa un valor numérico. Aquí se almacena la edad de la persona.
let edad = 25;

// boolean: Representa un valor verdadero o falso. Indica si la persona es mayor de edad.
let esMayorDeEdad = true;

// null: Representa la ausencia intencionada de un valor. Se asigna manualmente para indicar que no hay valor disponible.
let noHayValor = null; // Se establece explícitamente por el programador.

// undefined: Indica que una variable ha sido declarada pero aún no tiene un valor asignado. Generalmente, se asigna automáticamente por JavaScript.
let noDefinido = undefined; // Este valor es asignado automáticamente si no se inicializa.

// symbol: Un tipo de dato único e inmutable que se utiliza como identificador de propiedades de objetos.
let simboloUnico = Symbol("único"); // Se utiliza para crear identificadores únicos.

// bigint: Permite trabajar con números enteros grandes que superan el límite de los números normales (Number).
let numeroGrande = 2n; // El sufijo 'n' indica que es un BigInt.


 // COMPLEJOS

// object: Una colección de pares clave-valor. Aquí se define un objeto que representa un carro con su marca y modelo.
let carro = {
    marca: "Tesla", // Marca del carro
    modelo: "Model S" // Modelo del carro
};

// array: Una lista ordenada de elementos. En este caso, una colección de frutas.
let fruta = ["manzana", "banano", "uvas"]; // Lista de frutas disponibles.

// function: Un bloque de código diseñado para realizar una tarea específica. Esta función está definida pero aún no tiene implementación.
function saludar() {
    // Aquí se puede implementar la lógica para saludar a alguien.
}