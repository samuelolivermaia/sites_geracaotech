// Lê um valor aleatório do usuário e converte para um número inteiro
let a = parseInt(prompt("Coloque um valor aleatório"));

// Lê outro valor aleatório do usuário e converte para um número inteiro
let b = parseInt(prompt("Coloque outro valor aleatório"));

// Declara a variável 'c' sem inicializá-la
let c;

// Verifica se os valores de 'a' e 'b' são iguais
if (a === b) {
  // Se 'a' e 'b' forem iguais, calcula a soma de 'a' e 'b'
  const soma = a + b;
  // Atribui o valor da soma à variável 'c'
  c = soma;
} else {
  // Se 'a' e 'b' forem diferentes, calcula o produto de 'a' e 'b'
  const multiplica = a * b;
  // Atribui o valor do produto à variável 'c'
  c = multiplica;
}

// Exibe o valor de 'c' no console
console.log(c);
