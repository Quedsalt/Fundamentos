// TIPO DE DATO STRING

// Las cadenas de texto (strings) se pueden definir utilizando diferentes tipos de comillas:
// - Comillas simples (')
// - Comillas dobles (")
// - Comillas invertidas (`) para plantillas literales

// Es recomendable mantener consistencia en el uso de comillas en todo el código
// para mejorar la legibilidad y evitar confusiones.

// Definición de cadenas de texto
let string1 = 'Hola, Mundo'; // Usando comillas simples
let string2 = "JavaScript es genial"; // Usando comillas dobles

// Las comillas invertidas permiten la interpolación de variables y expresiones.
// En este caso, concatenamos "feliz :)" a la variable string1.
let string3 = `${string1} feliz :)`; // Usando template literals

// Otra forma de concatenar cadenas es utilizando el operador "+".
// El espacio (" ") se utiliza para separar los textos al concatenar.
let string4 = string1 + " " + string2; // Concatenación con espacio

// Para ejecutar este código, utiliza el comando: 
// "node nombre_del_archivo.js" en la terminal.
console.log(string1); // Imprime: Hola, Mundo
console.log(string2); // Imprime: JavaScript es genial
console.log(string3); // Imprime: Hola, Mundo feliz :)
console.log(string4); // Imprime: Hola, Mundo JavaScript es genial

// Ejemplo adicional con la variable 'frase'
let frase = "JavaScript es Extremadamente Genial"; // Definición de una cadena más larga

// .length devuelve el número total de caracteres en la cadena 'frase'.
console.log(frase.length); // Imprime: 34 (número total de caracteres)

// .toLowerCase() convierte todos los caracteres de la cadena a minúsculas.
console.log(frase.toLowerCase()); // Imprime: javascript es extremadamente genial

// .toUpperCase() convierte todos los caracteres de la cadena a mayúsculas.
console.log(frase.toUpperCase()); // Imprime: JAVASCRIPT ES EXTREMADAMENTE GENIAL

// .substring(inicio, fin) extrae una parte de la cadena desde el índice 'inicio' hasta 'fin' (sin incluir 'fin').
console.log(frase.substring(0, 10)); // Imprime: JavaScript (los primeros 10 caracteres)