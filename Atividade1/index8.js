const quantosNumeros = parseInt(prompt("Digite quantas vezes você quer adicionar um número"));

function ordenar(totalDeNumeros) {
  const arrayNumeros = [];
  for (let i = 0; i < totalDeNumeros; i++) {
    let numero = parseInt(prompt("Digite qualquer número"));
    arrayNumeros.push(numero);
  }

  // Ordena o array em ordem crescente
  const numerosEmOrdemCrescente = arrayNumeros.sort((a, b) => a - b);

  console.log(numerosEmOrdemCrescente);
}

ordenar(quantosNumeros);
