let order =[]; // uma array que vai dar ordem de clickar
let clickedOrder=[]; // ordem dos click's 
let score = 0; // tentativas

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

// selecionando os campos.
const corAzul = document.querySelector('.azul');
const corVermelho = document.querySelector('.vermelho');
const corVerde = document.querySelector('.verde');
const corAmarelo = document.querySelector('.amarelo');

// função para gerar um numero aleatorio entre 0 e 3
let shuffOrder = ()=>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    
    for ( let i in order){
        let elementColor = createElement( order[1])
    
        lightColor(elementColor, Number(i) + 1)

    }
}


let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout( ()=>{
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout( () =>{
        element.classList.remove('selected');
    })
}

//verificando  as cores.
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameover();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(` Pontuação: ${score}\n você ACERTOU  Iniciando o proximo nivel!`)
        nextLevel();
    }
}


//capturando o click.

let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
   
}


// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul
//função que retorna a cor
 let createElement = (color) =>{
     if(color == 0){
        return corVerde;
     }else if(color == 1){
         return corVermelho
     }else if(color == 2){
         return corAmarelo
     }else if(color == 3){
         return corAzul 
     }
 }


 //função para o proximo level
 let nextLevel = () =>{
     score ++;
     shuffOrder();
 }

 //funçao para gameover
let gameover = () =>{
    alert(`Pontuação: ${score}! \n voce perdeu o jogo\n click em ok para reiniciar o jogo`);
    order = [];
    clickedOrder = [];
    playgame();
}


//inicio do jogo
let playgame = () =>{
    alert('Bem vindo ao jogo Gênesis')
    score = 0;

    nextLevel();
}

// corVerde.addEventListener('click', click(0));
// corVerde.addEventListener('click', click(1));
// corAmarelo.addEventListener('click', click(2));
// corAzul.addEventListener('click', click(3));
// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

//evento de click
corVerde.onclick = () => click(0);

corVermelho.onclick = () => click(1);

corAmarelo.onclick = () => click(2);

corAzul.onclick = () => click(3);


playgame();