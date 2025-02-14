// Generar un patrón de asterisco en forma de pirámide

let altura = parseInt(prompt("Ingrese la altura para la piramide: "));

const validarNumero = function (valor) {
  if (Number.isNaN(valor)) {
    console.log("No es número");
    return false;
  }
  else {
    return true;
  }
}

const piramide = function (altura) {
  let asteriscos = "";
  let espaciosNum = altura;
  
  for (let i = 0; i < altura; i++) {
    
    let espacios = "";
    asteriscos += "*";
    
    for (let j = 0; j < espaciosNum-i; j++) espacios += " ";

    // console.log(" ".repeat(espacios - i) + asteriscos);
    console.log(espacios + asteriscos);
    asteriscos += "*";
  }
}

const piramideInversa = function (altura) {
  let asteriscos = altura;
  let espacios = " ";

  for (let i = altura; i > 0; i--) {
    asteriscos--;
    console.log(espacios + "*".repeat(asteriscos+i));
    espacios+= " ";
  }
}

if (validarNumero(altura)) {
  piramide(altura);
  piramideInversa(altura);
}

