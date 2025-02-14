/* Escribir una funcion llamada sumarArreglo que reciba tres argumentos:
un arreglo de números, la posición inicial y la posición final.
La función debe retornar la suma de todos los números dentro del rango (la posición inicial
y la posición final, incluyendolas)

Nota: Puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que estan dentro
de los limites de los arreglos
*/

const sumarArreglo = function (posIni, posFin, numeros) {
  
  if (posIni<numeros.length && posFin<numeros.length && posIni<=posFin && posFin>0 && posIni>=0) {
    
    let suma = 0;
    for (let i = posIni; i <= posFin; i++) {
      suma += numeros[i];
    }
    return suma;

  }
  else throw new Error("Los rangos ingresados son erroneos");
}

const array = [1,2,3,4,5,6,7,8,9]; 
let posIni = 0;
let posFin = 1;

console.log(sumarArreglo(posIni, posFin, array));