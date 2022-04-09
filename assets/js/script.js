var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var jogoId = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
var jogo = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
];

mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-'){
        return ;
    }else{
        quadrado.innerHTML = jogador;
        quadrado.style.color = '#000';
    
        jogador = jogador === 'X' ? 'O' : 'X';
    
        mudarJogador(jogador);
        verificaVencedor();
    }

    
    // for(var i=0; i<3;i++){
    //     for(var j=0; j<3;j++){

    //         jogo[i][j] = document.getElementById(jogoId[i][j]);
    //         console.log("local " + jogo[i][j]);
    //     }
    // }

}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function verificaVencedor(){

    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(verificaSequencia(quadrado1,quadrado2,quadrado3)){
        mudarCorQuadrado(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado4,quadrado5,quadrado6)){
        mudarCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(verificaSequencia(quadrado7,quadrado8,quadrado9)){
        mudarCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(verificaSequencia(quadrado1,quadrado4,quadrado7)){
        mudarCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado2,quadrado5,quadrado8)){
        mudarCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(verificaSequencia(quadrado3,quadrado6,quadrado9)){
        mudarCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(verificaSequencia(quadrado1,quadrado5,quadrado9)){
        mudarCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    
    if(verificaSequencia(quadrado3,quadrado5,quadrado7)){
        mudarCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}


function verificaSequencia(quadrado1, quadrado2, quadrado3){
    var eIgual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eIgual = true;
    }

    return eIgual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}