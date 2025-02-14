// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:


let capitalizar = frase => {
  let fraseCapitalizada = frase.toLowerCase();

  let array = fraseCapitalizada.split(" ");

  for (let i = 0; i < array.length; i++) {
    let palabra = array[i];
    array[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }

  return array.join(" ");
}

let frase = "holaa como estas";
let fraseCapitalizada = capitalizar(frase);

console.log(fraseCapitalizada);