
let tipoTarjeta;

while (true) {
  tipoTarjeta = parseInt(prompt(`Seleccione su tipo de tarjeta de crédito: 
   1. American Express
   2. Diners Ckub
   3. Discover
   4. Mastercard
   5. Visa
  Ingrese el número: `));
  
  if (tipoTarjeta < 1 || tipoTarjeta > 5) alert("Ingrese una opción válida.")
  else break;
}

let validarTarjeta 