function calcular_idade(ano_nas){
    const data = new Date()
    const  idade = data.getFullYear() - ano_nas
    return idade
}

function calcular_idade2(ano_nas){
    const data = new Date()
    const idade = data.getFullYear() - ano_nas
    console.log(ret)
}
let ret = calcular_idade(1998,'Felicity')
console.log(ret)

calcular_idade2()