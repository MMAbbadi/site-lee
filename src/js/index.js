// OBJETIVO - Clicar na seta para avançar para prixmo video 
// 1. - conseguir o elemento HTML seta;
// 2. - identificar o clicke do usuario na seta; 
// 3. - fazer aparecer o proximo item da lista;
// 4. - buscar item selecionado e esconder;


const btnAvancar = document.getElementById("btn-avancar");
const telas = document.querySelectorAll(".tela");
let telaAtual = 0;

function esconderTelaSelecionada(){
    
    const telaSelecionada = document.querySelector(".selecionada");
    telaSelecionada.classList.remove("selecionada");

};

function mostarTela(indiceTela){

    telas[indiceTela].classList.add("selecionada");

};

btnAvancar.addEventListener('click', function(){

    if (telaAtual === telas.length - 1) return;

    esconderTelaSelecionada();

    telaAtual++;
    console.log(telaAtual);

    mostarTela(telaAtual);
})

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener('click', function(){

    if(telaAtual === 0) return;

    esconderTelaSelecionada();

    telaAtual--;

    mostarTela(telaAtual);
})