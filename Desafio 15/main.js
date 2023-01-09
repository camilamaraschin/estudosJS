
        let nome = prompt('Qual seu nome?')
        let option;
        let itens = []; 

        while(option != 3){
            option = Number(prompt(` Olá ${nome} ! Digite o número da opção
            desejada!
            
            1 - Cadastrar item 
            2- Mostar item cadastrado
            3 - Sair`))

            if(option == 1) {
                let item = prompt("Digite o nome do item")
                itens.push(item)
            } 
            
            else if (option == 2) {
                if(itens.length == 0){
                    alert('Itens não cadastrados')
                }else{
                    alert (itens)
                }
            } else {
                alert("Até a proxima")
            }

            console.log(option, itens)
        }
   