// Função para calcular o peso ideal
function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;

    if (sexo === 'M') {
        // Fórmula para homens
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'F') {
        // Fórmula para mulheres
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        // Sexo inválido
        console.log("Sexo inválido. Por favor, insira 'M' para masculino ou 'F' para feminino.");
        return null;
    }

    return pesoIdeal;
}

// Exemplo de uso da função
let altura = parseFloat(prompt("Digite a altura (em metros):"));
let sexo = prompt("Digite o sexo ('M' para masculino, 'F' para feminino):").toUpperCase();

let pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
    console.log(`O peso ideal para uma pessoa com altura ${altura}m e sexo ${sexo} é aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
}

