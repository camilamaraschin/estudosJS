/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

let score = 90
let scoreA = score >=90 && score <=100
let scoreB = score >=80 && score <=89
let scoreC = score >=70 && score <=79
let scoreD = score >=60 && score <=69
let scoreF = score >=60 && score >= 0

let scoreFinal;

if(scoreA){
    scoreFinal = "A"
} else if (socreB){
    scoreFinal= "B"
}else if (socreC){
    scoreFinal= "C"
}else if (socreD){
    scoreFinal= "D"
} else if (socreF){
    scoreFinal= "F"
}else {
    scoreFinal = "Nota Inválida"

}

console.log(socreFinal)