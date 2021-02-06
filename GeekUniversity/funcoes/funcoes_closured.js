let xuxa = 'global' // pode ser acessada em qualque parte do prgrama

function imprimir(){
    console.log(xuxa)
}

function outra(){
    let xuxa = 'local' // pode ser acessada no bloco do contexto
    imprimir()
    console.log(xuxa)
}

outra()

// outro exemplo
let variavel = 'global'

function externa(){
    let variavel = 'local'

    function interna(){
        return variavel
    }
    return interna
}

let  executa = externa()

console.log(executa())