function somar(num1,num2){
    return num1 + num2
}

let res = somar(4,6)
console.log(res)

console.log(somar(10,5))
const executar = somar
console.log(executar(8,7)) // Atraves da variavel eu chamo a função

function faz_algo(num1,num2,funcao){
     return funcao(num1,num2)
 }
 console.log(faz_algo(5,5, somar))

 function outra(funcao){
     return funcao
 }
 const ret = outra(somar)
 console.log(ret(8,20))

 function mensagem(){
     console.log('Envia mensagem') // função simpres
 }

 mensagem()

