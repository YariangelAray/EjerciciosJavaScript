// Escibir una función llamda fizzBuzz que reciba un número y retorne un string
// de acuerd a lo siguiente:

// "fizz" si el número es múltiplo de 3
// "buzz" si el número es multiplo de 5
// "fizzbuzz" si el numero es multiplo tanto de 3 como de 5.

// si no cumple ninguna de las condiciones anteriores debe retornar el mismo número

let fizzBuzz = num => {

  let cadena = "";

  if ((num % 3) == 0) cadena += "Fizz";

  if ((num % 5) == 0) cadena += "Buzz";

  if (cadena == "") return num;
  else return cadena;
  
}

console.log(fizzBuzz(3));

