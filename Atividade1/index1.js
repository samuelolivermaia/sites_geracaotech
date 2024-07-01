// Lê o valor de A do usuário e converte para um número inteiro
let a = parseInt(prompt("Digite o valor de A:"));

// Lê o valor de B do usuário e converte para um número inteiro
let b = parseInt(prompt("Digite o valor de B:"));

// Lê o valor de C do usuário e converte para um número inteiro
let c = parseInt(prompt("Digite o valor de C:"));

// Calcula a soma de A e B
let soma = a + b;

// Verifica se a soma de A e B é menor que C
if (soma < c) {
  // Se a condição for verdadeira, imprime a mensagem "A + B é menor que C"
  console.log("A + B é menor que C");
} else {
  // Se a condição for falsa, imprime a mensagem "A + B não é menor que C"
  console.log("A + B não é menor que C");
}
