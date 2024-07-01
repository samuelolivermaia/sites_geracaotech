// Solicita ao usuário para inserir um valor lógico para 'a'
let a = prompt('Insira um valor lógico para a ("true" ou "false"):');

// Solicita ao usuário para inserir um valor lógico para 'b'
let b = prompt('Insira um valor lógico para b ("true" ou "false"):');

// Converte as entradas para valores booleanos
a = (a === 'true');
b = (b === 'true');

// Exibe o valor de 'a' no console
console.log(a);

// Verifica as condições e imprime as mensagens apropriadas
if (a === false && b === false) {
  // Se ambos 'a' e 'b' são falsos
  console.log("Ambos são falsos");
} else if (a === true && b === true) {
  // Se ambos 'a' e 'b' são verdadeiros
  console.log("Ambos são verdadeiros");
} else {
  // Se um dos dois é verdadeiro e o outro é falso
  console.log("Um dos dois é verdadeiro ou falso");
}


