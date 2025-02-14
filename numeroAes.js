// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a".

let numeroDeAes = cadena => {
  let regexp = /a/gi;
  let cantidad = (cadena.match(regexp) == null ? 0 : cadena.match(regexp).length);
  return cantidad;
}

let cadena = "Helader";

console.log("La cadena contiene " + numeroDeAes(cadena) + " letras 'a'.");
