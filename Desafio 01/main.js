/* O proprietario da empresa ABC precisa de um programador de computador
para calcular o novo salario que seus funcionários irão receber a partir
do mês que vem. Sabendo que o aumento de salário para todos os funcionátios
sera de 25%, facca um progama que lê o valor atual do funcionario e informa
o seu novo salario acrescido de 25%*/

let salarioAtual= prompt(" Digite seu salário atual: ")

if (salarioAtual != null && salarioAtual != 0){

    salarioAtual = Number (salarioAtual) // converter em numero

    const acrescimo = salarioAtual +((salarioAtual *25)/100) // calculo da porcentagem
    
    alert (`O seu novo salário sera de R$ ${acrescimo}`)
}else {
    alert ('Insira um salário válido')
    location.reload () // para atualizar a pagina 
}