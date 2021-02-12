/**
 * conjuntos nãoa ceitam repetição de valores
 * conjuntos não são indexados
 */
//declarando conjunto
 let curso = new Set()

 //adicionando valores
 curso.add('Algoritimo')
 curso.add('Python')

 //adicionar valores concatenados
 curso.add('Java').add('Bando de daods').add('Javascript')
curso.add('Git e github')
//console.log(curso)

//acessando o tamanho do conjunto
//console.log(curso.size)

//encontrando elementos
//console.log(curso.has('Java'))

//let ret = curso.delete('Java')
//console.log(ret)

let frutas = ['Manga','Uva','Jaca','Uva']
let frutasunicas= new Set(frutas)
console.log(frutasunicas)
