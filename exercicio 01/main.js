/*  
Crie uma função que valide usuário e senha
Usuario correto: Camila
Senha: 2101

*/
 
 function validar( usuario, senha){
    if ( usuario === "Camila" && senha === "2101"){
        return true;
    } else{
       return false;
    }
 }
let usuario = "Camila";
let senha = " 231"
let validacao = validar ( usuario, senha){
    if(validacao){
        console.log('Acesso concedido');

    }else{
        console.log('Acesso negado')
    }
}