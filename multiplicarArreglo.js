// Escribir una función llamada multiplicarArreglo que reciba un arreglo de número y retone la multiplicación de todos los elementos


let multiplicarArreglo = arreglo => {
  
  let multiplicacion = 1;
  
  arreglo.forEach(numero => multiplicacion *= numero);
  
  return multiplicacion;
}

let arreglo = [1, 2, 3, 4, 5, 6];

console.log(multiplicarArreglo(arreglo));
