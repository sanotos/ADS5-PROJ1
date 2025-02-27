function CalcularIdade() {
    let anoNascimento = document.getElementById("anoNascimento").value;
    //
    if (anoNascimento === "") {
        document.getElementById("resultado").innerHTML = "Por favor, Me fale um ano por gentileza.";
        return;
    }

    let anoAtual = new Date().getFullYear();//copia e cola o ano atual
    let idade = anoAtual - anoNascimento;
    
    if (idade > 125) {
        idade = 125;
    }//idade limite da operação
    
    document.getElementById("resultado").innerHTML = `idade é: ${idade}`;
}