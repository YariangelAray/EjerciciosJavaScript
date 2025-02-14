/*
Escribir una función llamada contrasenaValida que reciba un string y retorn true si el string es igual a
"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

let contrasenaValida = contrasena => {
  if (contrasena == "2Fj(jjbFsuj" || contrasena == "eoZiugBf&g9") return true;  
  else return false;
}

let contrasena = "eoZiugBf&g9";

console.log(contrasenaValida(contrasena));
