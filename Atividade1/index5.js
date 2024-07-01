// Função para calcular o resultado baseado no número
function calcularNumero(numero) {
    const dobro = 2;
    const triplo = 3;
    
    // Usando operador ternário para decidir o multiplicador
    const resultado = numero < 0 ? numero * triplo : numero * dobro;
    
    return resultado;
  }
  
  // Solicita um número ao usuário
  const numero = parseInt(prompt("Pode colocar número positivo ou negativo"));
  
  // Calcula e exibe o resultado
  console.log(calcularNumero(numero));