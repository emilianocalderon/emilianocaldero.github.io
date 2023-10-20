// Leer el precio del usuario
var precio = parseFloat(prompt("Ingrese el precio:"));

// Calcular resultado1
var resultado1 = precio + 250;

// Calcular resultado2
var resultado2 = resultado1 * 0.036;

// Calcular el resultado final
var resultado_final = resultado1 + resultado2;

// Mostrar el resultado final
console.log("Resultado final: " + resultado_final);
