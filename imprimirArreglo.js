/**
 * Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea aparte.
 */

const imprimirArreglo = array => {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += `${array[i]}\n`;
  }
  return resultado;
}

let arreglo = [2, "Gato", 5, "hola"]

console.log(imprimirArreglo(arreglo));
