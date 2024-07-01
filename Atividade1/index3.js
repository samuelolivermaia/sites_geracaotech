// Solicita ao usuário para inserir um número aleatório e converte para inteiro
const numero_aleatorio = parseInt(prompt("Digite um número aleatório:"));

// Declaração da função que verifica se o número é par ou ímpar
function numeroP(numero) {
  let valorimpar;

  // Loop que verifica se o número é divisível por qualquer número entre 2 e o próprio número
  for (let index = 2; index < numero; index++) {
    let numeroimpar = false; // Variável para indicar se o número é ímpar

    let numero2 = numero % index; // Calcula o resto da divisão do número pelo índice atual
    let resto = numero % 2; // Calcula o resto da divisão do número por 2 (para verificar se é par)

    // Verifica se o número é divisível por index e também se o resto da divisão por 2 é zero (ou seja, é par)
    if (numero2 === 0 && resto === 0) {
      console.log("Este número é par");
      break; // Sai do loop se o número for par
    } else {
      numeroimpar = true; // Define que o número é ímpar
    }

    valorimpar = numeroimpar; // Atribui o valor da variável numeroimpar à variável valorimpar
  }

  // Verifica se valorimpar é true (ou seja, se o número é ímpar)
  if (valorimpar) {
    console.log("Este número é ímpar");
  }
}

// Chama a função numeroP com o número aleatório fornecido pelo usuário como argumento
numeroP(numero_aleatorio);
