const numeroAleatorio = parseInt(prompt("Digite um número aleatório"));

function verificarNumero(numero) {
  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    return;
  }

  // Verifica se o número é par
  if (numero % 2 === 0) {
    console.log("Este número é par.");
    console.log(`Somando este número com o numeral 5, chegaremos ao resultado ${numero + 5}`);
  } else {
    // Se for ímpar
    console.log("Este número é ímpar.");
    console.log(`Somando este número com o numeral 8, chegaremos ao resultado ${numero + 8}`);
  }
}

verificarNumero(numeroAleatorio);
