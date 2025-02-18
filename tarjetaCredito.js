/*
Diseñar un programa que permita validar el tipo de tarjeta de crédito que
registra el operador, para ello debemos tener en cuenta que las diferentes
tarjetas tienen diferentes nomenclaturas:
• American Express: 15 dígitos y empieza por (34 – 37)
• Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
• Discover: tiene 16 dígitos y empieza por (6011)
• Mastercard: tiene 16 dígitos y empieza por (51 – 55)
• Visa: tiene: 16 dígitos y empieza por (4)
El programa solo se debe permitir el ingreso de enteros positivos y máximo
16 caracteres, si el operador ingresa un carácter no permitido se debe
mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
de crédito.
Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
crédito.
*/

let validarTarjeta = (cantDigitos, nomenclatura) =>{

  let regexNumeros = new RegExp(`^\\d{${cantDigitos}}$`);
  
  while (true) {
    let errores = "";
    let numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito. (cantidad de dígitos: "+cantDigitos+")");
  
    console.log(regexNumeros.test(numeroTarjeta) + " " + regexNumeros);
    
    if (!regexNumeros.test(numeroTarjeta))
      errores += `· El número de tarjeta solo debe contener enteros positivos y ${cantDigitos} dígitos.\n`;
    
    if (!nomenclatura.test(numeroTarjeta))
      errores += `· El número de su tarjeta de crédito no comienza por la nomenclatura correspondiente.\n`;
  
    if (errores == "") {
      alert("Su tarjeta de crédito es válida.")
      return;
    } else alert(`Su tarjeta de crédito es inválida:\n${errores}`)
  }
  

}

let tipoTarjeta;
let cantDigitos = 16;
let nomenclatura;

while (true) {
  tipoTarjeta = parseInt(prompt(`Seleccione su tipo de tarjeta de crédito: 
   1. American Express
   2. Diners Club
   3. Discover
   4. Mastercard
   5. Visa
  Ingrese el número: `));
  
  if (tipoTarjeta < 1 || tipoTarjeta > 5 || !tipoTarjeta) alert("Ingrese una opción válida.")
  else break;
}

switch (tipoTarjeta) {
  case 1:
    cantDigitos = 15;
    nomenclatura = /^(3[4-7])/;
    break;
  case 2:
    cantDigitos = 14;
    nomenclatura = /^(30[0-5])|(3[6-8])/;
    break;
  case 3:
    nomenclatura = /^6011/;
    break;
  case 4:
    nomenclatura = /^(5[1-5])/;
    break;
  default:
    nomenclatura = /^4/;
    break;
}

validarTarjeta(cantDigitos, nomenclatura);