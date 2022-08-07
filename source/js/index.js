// window.alert('oi')
/* 
    Objetivo 1 - Quando clicarmos na seta de avançar, temos que mostrar o proximo cartão da lista
        Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar
        Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar
        Passo 3 - Fazer aparecer o próximo cartão da lista
        Passo 4 - Pegar o cartão selecionado e esconder
    Objetivo 1 - Quando clicarmos na seta de voltar, temos que mostrar o cartão anterior da lista
        Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar
        Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar
        Passo 3 - Fazer aparecer o cartão anterior da lista
        Passo 4 - Pegar o cartão selecionado e esconder
*/

// buscar um elemento especifico por ID no document
//console.log(document.getElementById('btn-avancar'));

//criar variavel com uma função grande
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
// criar variavel para a contagem dos cartoes, let é uma variavel que se altera
var cartaoAtual = 0;
// queryselectorarll encontrar tudo pelas classes, achar a li para modificar
const cartoes = document.querySelectorAll('.cartao');

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


// Dar uma função ao elemento encontrado
btnAvancar.addEventListener('click', function () {
    // se cartaoAtual for igual a quantidade de cartoes - 1 o programa não avança
    if(cartaoAtual === cartoes.length - 1) cartaoAtual = -1;
    esconderCartaoSelecionado();
    // criando variavel para selecionar a class .selecionado
    //const cartaoSelecionado = document.querySelector('.selecionado');
        //excluir a class selecionado do card que passou
        //cartaoSelecionado.classList.remove('selecionado');
    // toda vez que apertar no botao a contagem do cartao atual acrescenta mais 1
    cartaoAtual++;
    //adicionar a class selecionado nos proximos cartoes (a contagem inicia no 0 - 1 - 2 ...)
    //cartoes[cartaoAtual].classList.add('selecionado');
    mostrarCartaoSelecionado(cartaoAtual);
})


btnVoltar.addEventListener('click', function () {
    if(cartaoAtual === 0) cartaoAtual = cartoes.length;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartaoSelecionado(cartaoAtual);

    
})

