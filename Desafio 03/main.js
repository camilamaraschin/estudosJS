/* 1 - Você pode criar uma função sorteia que recebe um número n e sorteia um número entre 0 a n, retornando esse valor. Dessa forma, 

em vez de escrever var numeroPensado = Math.round(Math.random() * n);, você escreveria var numeroPensado = sorteia(n);. 
Faça essa modificação, criando a nova função e utilize-a.

2 - Faça com que seu jogo mostre, quando o usuário errar a tentativa, se o número que ele chutou era maior ou menor 
ao número pensado pelo programa. */ 

let numeroPensado = Math.round( Math.random()* 100);


let chute = parseInt(prompt('Qual o seu numero?')) 

if (chute == numeroPensado ) {
    console.log ('Parabéns você acertou ' + numeroPensado)
} else{
    console.log ('Você errou' +  + numeroPensado)
}