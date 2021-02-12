// res sprad ...
// Juntar e espalhar valores
function total(...precos){
    let total = 0
    precos.forEach(p=> total +=p)
    if(total>0){
        return total
    }else{
        return `O Valor não foi definido`
    }
    
}
//console.log(total(23,24,55,6.64,2.56).toFixed(2))

//console.log(total(23,67))
//console.log(total(3,6,77))
//console.log(total())
frutas1 = ['manga','uva','melancia']
frutas2 = ['abacate','morango', 'jaca']
let compras = [...frutas1,...frutas2]
//console.log(compras)

let alunos = ['Paula', 'Felipe','Fernanda']
let novo = 'Joana'
//alunos.push(novo)
//console.log(alunos)
let todos = [...alunos,novo]
console.log(todos)
