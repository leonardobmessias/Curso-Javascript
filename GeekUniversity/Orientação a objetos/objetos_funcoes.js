const curso = {
    nome: 'Programação javascript',
    horas: 25,
    preco:22.44
}
console.log(curso)
//console.log(typeof(curso))

//acessando chaves e valores
//console.log(Object.keys(curso))
//console.log(Object.values(curso))
//console.log(Object.entries(curso) )


//iterando objetos
//Object.entries(curso).forEach(par => {
//    console.log(`${par[0]}: ${par[1]}`)
//});

//Object.entries(curso).forEach((chave,valor) => {
//    console.log(`${chave}: ${valor}`)
//});
//curso.nome = 'Criação de apis'

//console.log(curso)

Object.defineProperty(curso,'publicacao',{
    enumerable: true,
    writable: false,
    value:'07/12/2019'

})
curso.publicacao = '01/01/2020';
//console.log(curso)
//console.log(curso.publicacao)

const outro = {}
Object.defineProperty(outro,'',{

})

Object.freeze(curso)
curso.nome = "dança da garrafa"
//console.log(curso)


const usuarios = [
    {nome: 'Aline', empresa:'Google'},
    {nome: 'marcos', empresa:'Sony'},
    {nome: 'julia', empresa:'Amazon'}

]

//console.log(usuarios)

///console.table(usuarios)
console.table(curso)