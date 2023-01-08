
        let resultado = prompt('Qual numero estou pensando? Está entre 0 a 10')
        const randomNumber = Math.round(Math.random()*10)

        let x = 1

        while(Number(resultado) != randomNumber){
            resultado = prompt ('tente novamente')
            x++
        }

        alert(`Parabéns você adivinhou em ${x} tentativas`)
    