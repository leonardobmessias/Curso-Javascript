var valores = [2,4,6,8,10]
console.log(valores)
var dobro = valores.map(function(valor){
    return valor *2
}) 

//console.log(dobro)

function dobrar(valor){
    return valor * 2

}
dobro = valores.map(dobrar)
//console.log(dobro)

//Encadeando maps
function somar(valor){
    return valor + 4
}
function dividir_5(valor){
    return valor / 5
}
var resultado = valores.map(dobrar).map(somar).map(dividir_5)
console.log(resultado)