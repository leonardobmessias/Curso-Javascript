/*
Array contendo 5 elementos -> n =5
[0][1][2][3][4] 

valores 
[12]['Leo'][true][48][52]
podemos colocar valor infinito
podemos colocar qualquer tipo de dados
*/
//forma 1
var alunos = new Array('ana','ricardo', 'lucas', 'sofia')
console.log(alunos)

// forma 2(Recomendada)
var notas =[1,3,7,5,9]
console.log(notas)

//fazendo acesso ao valor de um indicia
console.log(notas[2])
// alterar o indicie
notas[2] = 12
console.log(notas) 

// inserindo valor com push
alunos.push('leonardo')
console.log(alunos)
alunos.sort()
console.log(alunos)

// deletado dados
//delete alunos[3]
//console.log(alunos)
alunos.splice(3,1)
console.log(alunos)
for(var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

// removendo ultima posição
alunos.pop()
console.log(alunos)
alunos.shift()
console.log(alunos)

//adicionando no inicio
alunos.unshift('Douglas')
console.log(alunos)

//retorna um novo arrray apartir do indicie informado
var novo = alunos.slice(1)
console.log(novo)
var pares = [2,4]
var impares = [3,5]
var res = pares.concat(impares)
console.log(res)
// matrizes ou array bidimensinoas
console.log('Abaixo  encontrando elementos em matrizes')
var  tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(tabuleiro[0][0])
console.log(tabuleiro[2][2])