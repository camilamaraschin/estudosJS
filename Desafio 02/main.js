//Calculo do IMC simples 

 /* function imc( altura, peso){

    let resultado = peso / (altura * altura)
    console.log (" O resultado é " + Math.round(resultado))


}

imc( 1.67 , 82 ) */

let altura = 1.67
let peso = 82 
let imc = peso / (altura * altura)

if( imc < 18) {
    console.log ( ' voce esta abaixo do peos')
} else if (imc > 29){
    console.log ('você esta acima do peso')
}