/*try {
    console.log(nome)
}catch(e){
    console.log(e.name)
    console.log(e.message)
    console.log('Não foi passivel imprimir o nome')
}
console.log('Oii !')
*/
function dividir(n1,n2){
    if(n1 ===0 || n2 ===0){
        throw('Osvalores devem ser positivos')
    }else{
        return n1 /n2 
    }
}
try{
    let ret = dividir(8,2)
    console.log(ret)
}catch(e){
    console.log('Não foi passivel dividir')
}finally{
    console.log('Vamos continuar')
}

let n1 = 0
let n2 = 1
let n3 = 0
while(n3 <= 100){
    console.log(n3)
    n3 = n1 + n2
    console.log(n3)
    n1 = n2
    n2 = n3
}