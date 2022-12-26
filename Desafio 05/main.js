// criar a media das idades das pessoas 


var totalFamiliares = parseInt(prompt("Quantidade de familiares?"))
var numero = 1
var totalIdades = 0

while (numero <= totalFamiliares){
    var idade = parseInt(prompt('Informe a idade: '))
    totalIdades = totalIdades + idade
    numero++
}

var mediaDasIdades = totalIdades/totalFamiliares
console.log ("A media das idades é" + mediaDasIdades)