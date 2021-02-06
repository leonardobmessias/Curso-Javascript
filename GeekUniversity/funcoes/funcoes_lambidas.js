let numeros = [1, 2, 3, 4, 5, 6]

function dobrar(valor){
    return valor * 2 
}
let res1 = numeros.map(dobrar)

console.log(numeros)
console.log(res1)

//Funçoes anonimas ou lambidas
let res = numeros.map(function(valor){
    return valor * 2
})
console.log(res1)