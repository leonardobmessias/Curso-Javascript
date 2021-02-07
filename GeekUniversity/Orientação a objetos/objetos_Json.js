/*
JSON - Javascript objetct Notation
 */

 const curso ={
     nome:'Programação em Javascript',
     horas:27,
     preco(){
         return this.horas * 0.67
     }
 }
 console.log(curso) // objeto javascript
 //console.log(curso.preco())
 console.log(typeof(curso))

 //Convertendo o objeto javascript para o json
 //const json = JSON.stringify(curso)
 //console.log(json)  // objeto jason
 //console.log(typeof(json))

 //convertendo de JSON para Javascript
 //const obj = JSON.parse(json)
 //console.log(obj)
 //console.log(typeof(obj))
 const jason_corrigido = '{"nome":"Programação em javascript", "preco":27.99}'
 console.log(jason_corrigido)
 console.log(typeof(jason_corrigido))
 const novo_obj = JSON.parse(jason_corrigido)
 console.log(novo_obj)
 console.log(typeof(novo_obj))