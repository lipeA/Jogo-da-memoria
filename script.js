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
