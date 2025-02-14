// Escribir una función llamada capitalizar  que reciba un string y capitalice la primera letra:

let capitalizar = texto => {
  let textoCapitalizado = texto.toLowerCase();

  return textoCapitalizado.charAt(0).toUpperCase() + textoCapitalizado.slice(1);
}

let texto = "holaa";
let textoCapitalizado = capitalizar(texto);

console.log(textoCapitalizado);
