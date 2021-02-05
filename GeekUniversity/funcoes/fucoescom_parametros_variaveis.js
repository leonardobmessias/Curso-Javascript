function somar(){
    let soma = 0
    for (let i = 0; i < arguments.length ;i++){
        soma += arguments[i]
    }
    return soma
}
console.log(somar())
console.log(somar(2,5))
console.log(somar(2,4,5))
console.log(somar(2,5,7,8,6))

function imprime(num1,num2){
    for(let i in arguments){
        console.log(arguments[i])
    }
}
imprime()
imprime(4,6)
imprime(4,6,8)


//funçoes com variaveis padrãop
function somar4(num1 =1, num2 =2, num3 = 3){
    return num1 + num2 + num3
}

console.log(somar4(4,3,1))
console.log(somar4())