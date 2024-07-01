// Função que calcula o IMC e retorna a condição de acordo com a tabela fornecida
function calcularIMC(peso, altura) {
    // Calcula o IMC usando a fórmula: peso / (altura ^ 2)
    const imc = peso / (altura * altura);

    // Determina a condição baseada no valor do IMC
    let condicao;
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        condicao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        condicao = "Acima do peso";
    } else {
        condicao = "Obeso";
    }

    // Retorna o valor do IMC e a condição correspondente
    return {
        imc: imc.toFixed(2), // Arredonda o IMC para 2 casas decimais
        condicao: condicao
    };
}

// Função principal para ler os dados do usuário e mostrar o resultado
function main() {
    // Lê o peso e a altura do usuário (em quilogramas e metros, respectivamente)
    const peso = parseFloat(prompt("Digite seu peso em quilogramas: "));
    const altura = parseFloat(prompt("Digite sua altura em metros: "));

    // Verifica se os valores fornecidos são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC e obtém a condição
    const resultado = calcularIMC(peso, altura);

    // Mostra o resultado ao usuário
    alert(`Seu IMC é ${resultado.imc}. Condição: ${resultado.condicao}`);
}

// Chama a função principal para iniciar o programa
main();
