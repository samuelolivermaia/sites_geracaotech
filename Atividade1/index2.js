// Função para ler o nome da pessoa
function lerNome() {
    return prompt("Digite o nome da pessoa:");
}

// Função para ler o sexo da pessoa
function lerSexo() {
    return prompt("Digite o sexo da pessoa (M para masculino, F para feminino):");
}

// Função para ler o estado civil da pessoa
function lerEstadoCivil() {
    return prompt("Digite o estado civil da pessoa (SOLTEIRO, CASADO, DIVORCIADO, VIÚVO):");
}

// Função principal
function main() {
    let nome = lerNome();
    let sexo = lerSexo();
    let estadoCivil = lerEstadoCivil();

    // Verifica se a pessoa é do sexo feminino (sexo === "F") e está casada (estadoCivil === "CASADO")
    if (sexo === "F" && estadoCivil === "CASADO") {
        let tempoCasada = parseInt(prompt("Digite o tempo de casada (em anos):"));
        console.log(`A pessoa ${nome} é do sexo feminino, está casada e tem ${tempoCasada} anos de casamento.`);
    } else {
        console.log(`A pessoa ${nome} é do sexo ${sexo} e estado civil ${estadoCivil}.`);
    }
}

// Chama a função principal para iniciar o programa
main();

