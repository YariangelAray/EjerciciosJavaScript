/*

Escriba una funcion llamada likes que reciba un número y retorne un string utilizando
el formato de K para miles y M para millones

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7'456,346 se convierte en 7M

si el número es menor a 1000 se debe devolver el mismo número como un string.

*/

const likes = cantidad => {

  let letra = "";
  let valor = 0;

  if (cantidad < 1000)
    return `${cantidad}`;

  else if (cantidad < 1000000) {
    letra = "K";
    valor = 1000;
  }
  else{
    letra = "M";
    valor = 1_000_000;
  }

  let resultado = `${Math.round(cantidad / valor)}${letra}`    
  return resultado;

}

let cantLikes = 2502202;

console.log(likes(cantLikes));