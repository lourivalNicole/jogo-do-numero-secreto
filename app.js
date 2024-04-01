{
    let listaDeNumerosSorteados = []; 
    let numeroLimite = 10; 
    let numeroSecreto = gerarNumeroAleatorio (); 
    let tentavivas = 1; 
   
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }


    function exibirMensagemInicial (){
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    }
      exibirMensagemInicial ();


    function verificarChute() {
        let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentaviva = tentavivas > 1 ? 'tentavivas' : 'tentaviva';
            let mensagemTentavivas = `Você descobriu o número secreto com ${tentavivas} ${palavraTentaviva}!`;
            exibirTextoNaTela('p', mensagemTentavivas);
            document.getElementById('reiniciar').removeAttribute('disabled'); 
            } else {
                    if (chute > numeroSecreto) {
                            exibirTextoNaTela('p', 'O número secreto é menor');
                    } else {
                            exibirTextoNaTela('p', 'O número secreto é maior');
                    } tentavivas ++;
                    limparCampo(); 
            }
    }

    function gerarNumeroAleatorio(){
       
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
       let quantidadeDeElementosLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosLista == 3){
    listaDeNumerosSorteados = []; 

}

       if (listaDeNumerosSorteados .includes(numeroEscolhido)){
           return gerarNumeroAleatorio();
       } else {
            listaDeNumerosSorteados.push(numeroEscolhido); 
            console.log(listaDeNumerosSorteados);      
           return  numeroEscolhido; 

       }
    }
    function limparCampo (){
        chute = document.querySelector('input'); 
        chute.value = '';
    }
}

    function reiniciarJogo()  {
        numeroSecreto = gerarNumeroAleatorio ();
        limparCampo();
        tentavivas= 1;
        exibirMensagemInicial(); 
        document.getElementById('reiniciar').setAttribute('disabled', true); 
    }





