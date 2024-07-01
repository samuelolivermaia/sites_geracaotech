// Função que calcula a média de aproveitamento e retorna o conceito e a situação do aluno
function calcularMediaAproveitamento(nota1, nota2, nota3, mediaExercicios) {
    // Calcula a média de aproveitamento usando a fórmula fornecida
    const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

    // Determina o conceito baseado na média de aproveitamento
    let conceito;
    let situacao;
    if (mediaAproveitamento >= 90) {
        conceito = 'A';
        situacao = 'Aprovado';
    } else if (mediaAproveitamento >= 75) {
        conceito = 'B';
        situacao = 'Aprovado';
    } else if (mediaAproveitamento >= 60) {
        conceito = 'C';
        situacao = 'Aprovado';
    } else if (mediaAproveitamento >= 40) {
        conceito = 'D';
        situacao = 'Reprovado';
    } else {
        conceito = 'E';
        situacao = 'Reprovado';
    }

    // Retorna a média de aproveitamento, conceito e situação do aluno
    return {
        mediaAproveitamento: mediaAproveitamento.toFixed(2), // Arredonda para 2 casas decimais
        conceito: conceito,
        situacao: situacao
    };
}

// Função principal para ler os dados do aluno e mostrar o resultado
function main() {
    // Lê o número de identificação do aluno
    const numeroAluno = prompt("Digite o número de identificação do aluno: ");
    
    // Lê as três notas do aluno
    const nota1 = parseFloat(prompt("Digite a primeira nota: "));
    const nota2 = parseFloat(prompt("Digite a segunda nota: "));
    const nota3 = parseFloat(prompt("Digite a terceira nota: "));
    
    // Lê a média dos exercícios
    const mediaExercicios = parseFloat(prompt("Digite a média dos exercícios: "));

    // Verifica se os valores fornecidos são válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(mediaExercicios)) {
        alert("Por favor, insira valores válidos para as notas e a média dos exercícios.");
        return;
    }

    // Calcula a média de aproveitamento, conceito e situação do aluno
    const resultado = calcularMediaAproveitamento(nota1, nota2, nota3, mediaExercicios);

    // Mostra o resultado ao usuário
    alert(`Número do aluno: ${numeroAluno}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Média dos exercícios: ${mediaExercicios}
    Média de aproveitamento: ${resultado.mediaAproveitamento}
    Conceito: ${resultado.conceito}
    Situação: ${resultado.situacao}`);
}

// Chama a função principal para iniciar o programa
main();
