let nome = 'Leonardo Belilo'

//for(let letra of nome){
  //  console.log(letra)
//}
let numeros  = [1,2,3,4,5]

for(let numero of numeros){
   // console.log(numero*2)
}

for (let indicie in numeros){
    //console.log(`Indicie: ${indicie}, Valor ${numeros[indicie]}`)
}

let cursos = new Map([
    [1,'Java'],
    [2,'JavaScript'],
    [4,'Msql']
])

for (let curso of cursos){
    //console.log(curso)
}

//chave /valor
for (let curso of cursos){
   // console.log(curso)
}
//acesso a chave
for (let chave of cursos.keys()){
    //console.log(chave)
}

//acesso ao valor
for (let valor of cursos.values()){
    //console.log(valor)
}

for(let [chave,valor] of cursos.entries()){
   // console.log(`${chave} - ${valor}`)
}

let conjunto = new Set([1,2,3,4,5,5])
for(let numero of conjunto){
    console.log(numero)
}
