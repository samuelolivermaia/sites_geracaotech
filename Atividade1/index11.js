// Função que calcula o valor final a ser pago com base na condição de pagamento
function calcularValorFinal(precoEtiqueta, condicaoPagamento) {
    let valorFinal;

    // Verifica a condição de pagamento e aplica os descontos ou juros conforme necessário
    switch (condicaoPagamento) {
        case 1:
            // À vista em dinheiro ou cheque, recebe 10% de desconto
            valorFinal = precoEtiqueta * 0.90;
            break;
        case 2:
            // À vista no cartão de crédito, recebe 15% de desconto
            valorFinal = precoEtiqueta * 0.85;
            break;
        case 3:
            // Em duas vezes, preço normal de etiqueta sem juros
            valorFinal = precoEtiqueta;
            break;
        case 4:
            // Em duas vezes, preço normal de etiqueta mais juros de 10%
            valorFinal = precoEtiqueta * 1.10;
            break;
        default:
            // Caso a condição de pagamento não seja válida
            alert("Condição de pagamento inválida. Por favor, escolha uma opção de 1 a 4.");
            return null;
    }

    return valorFinal;
}

// Função principal para ler os dados do usuário e mostrar o resultado
function main() {
    // Lê o preço do produto e a condição de pagamento do usuário
    const precoEtiqueta = parseFloat(prompt("Digite o preço do produto: "));
    const condicaoPagamento = parseInt(prompt("Escolha a condição de pagamento:\n1 - À vista em dinheiro ou cheque, recebe 10% de desconto\n2 - À vista no cartão de crédito, recebe 15% de desconto\n3 - Em duas vezes, preço normal de etiqueta sem juros\n4 - Em duas vezes, preço normal de etiqueta mais juros de 10%"));

    // Verifica se os valores fornecidos são válidos
    if (isNaN(precoEtiqueta) || precoEtiqueta <= 0) {
        alert("Por favor, insira um valor válido para o preço do produto.");
        return;
    }
    if (isNaN(condicaoPagamento) || condicaoPagamento < 1 || condicaoPagamento > 4) {
        alert("Por favor, escolha uma condição de pagamento válida (1 a 4).");
        return;
    }

    // Calcula o valor final a ser pago
    const valorFinal = calcularValorFinal(precoEtiqueta, condicaoPagamento);

    // Verifica se o cálculo foi bem-sucedido e mostra o resultado ao usuário
    if (valorFinal !== null) {
        alert(`O valor final a ser pago é R$${valorFinal.toFixed(2)}`);
    }
}

// Chama a função principal para iniciar o programa
main();
