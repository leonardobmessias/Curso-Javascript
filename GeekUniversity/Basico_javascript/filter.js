var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

function filtrar_pares(n){
    return n%2 ===0
}
//console.log(filtrar_pares(3))
//console.log(filtrar_pares(8))

function filtrar_impar(n){
    return n%2 !==0
}
function filtrar_mult_5(n){
    return n % 5 ===0
}
var ret = numeros.filter(filtrar_pares)
//console.log(ret)

ret = numeros.filter(filtrar_impar)
//console.log(ret)

ret = numeros.filter(filtrar_mult_5)
//console.log(ret)

var equipe = [
    {nome:'Mari', nota: 8.5},
    {nome:'Maira', nota:10},
    {nome:'João',nota:9},
    {nome:'Lucas',nota:7}
]
console.log(equipe)
function filtrarnotas(equipe){
    return equipe.nota > 8
}
var filtrados = equipe.filter(filtrarnotas)
console.log(filtrados)