const prompt = require("prompt-sync")()

let lista = []

function armazenar(){
    
    for(let i = 1; i <= 9; i++){
        let num = Number(prompt('Digite um numero para adicionar no Array: '))
        lista.push(num)    
    }

    const result = lista.filter(impar)
    console.log(`Lista completa ${lista}`)
    console.log(`Numero impares ${result}`)
}

armazenar()

function impar(value){
    return value %2 !== 0
}