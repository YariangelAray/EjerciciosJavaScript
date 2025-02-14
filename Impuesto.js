// Escribir una función llamada calcularImpuesto que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18
// y los ingresos son iguales o mayores a 1000 debe retornar ingresos ¨40% . De lo contrario retornar 0

let calcularImpuestos = (edad, ingresos) => {
  if (edad >= 18 && ingresos >= 1000) return ingresos * 0.4;
  else return 0;
}

let edad = parseInt(prompt("Ingrese la edad: "));
let ingresos = parseInt(prompt("Ingrese los ingresos: "));

alert("Impuestos a pagar: $" + calcularImpuestos(edad, ingresos));