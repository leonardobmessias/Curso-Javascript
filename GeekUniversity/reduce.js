var precos = [4.66,3.78,9.78,1.34,5.32]
var soma = 0
for(var i = 0; i < precos.length; i ++ ){
    soma = soma + precos[i]
}
//console.log(soma)
soma = 0
precos.forEach(function(valor) {
    return soma = soma + valor 
});
//console.log(soma)

function somar(ant, atu){
    return ant + atu
}

var ret = precos.reduce(somar)
console.log(ret)