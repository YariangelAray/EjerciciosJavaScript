// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo deúmeros y retorne un nuevo arreglo excluyendo los 0

let removerCeros = arreglo => {
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++)
    if (arreglo[i] != 0)
      nuevoArreglo.push(arreglo[i]);

  return nuevoArreglo;
}

let arreglo = [2, 0, 4, 5, 0, 6];
let nuevoArreglo = removerCeros(arreglo);

console.log(`Arreglo: ${arreglo} \n
Nuevo arreglo: ${nuevoArreglo}`);
