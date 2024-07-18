const numeroAleatorio = parseInt(prompt("Digite um número aleatório"));

function verificarNumero(numero) {
  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    return;
  }

  if(numero == 0) {
    console.log("Este número é zero")
  }
  // Verifica se o número é par
  else if (numero % 2 == 0) {
    console.log("Este número é par.");
  } else {
    // Se for ímpar
    console.log("Este número é ímpar.");
  }
}

verificarNumero(numeroAleatorio);
