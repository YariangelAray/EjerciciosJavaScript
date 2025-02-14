/* Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN)
Su complementos son:
G -> C
C -> G
T -> A
A -> U

*/


let transcribir = cadenaADN => {


  let cadenaARN = cadenaADN.split("");

  for (let i = 0; i < cadenaARN.length; i++) {        

    switch (cadenaARN[i]) {
      case "G":
        cadenaARN[i] = "C";
        break;
      case "C":
        cadenaARN[i] = "G";
        break;
      case "T":
        cadenaARN[i] = "A";
        break;
      case "A":
        cadenaARN[i] = "U";
        break;
    }
  }

  return cadenaARN.join("");
  
}

let cadenaADN = "gato";

let cadenaARN = transcribir(cadenaADN.toUpperCase());

console.log(cadenaARN);
