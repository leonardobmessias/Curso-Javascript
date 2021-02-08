let a = document.querySelector('.link');

//varrendo o documentoe; nos e seus pais
//console.log(a.innerText);
//console.log(a.parentNode) //body
//console.log(a.parentNode.parentNode)//html
//console.log(a.parentNode.parentNode.parentNode) //document

//console.log(a.parentNode.parentNode.childNodes) //observando os filhos de document
//console.log(a.parentNode.parentNode.firstChild) // pegando o primeiro filho
//console.log(a.firstChild) //primeiro filho
//console.log(a.parentNode.parentNode.lastChild) //pegando o ultimo filho

console.log(a.parentNode.parentNode.firstChild.nextSibling)// proximo irmão
console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling)// irmão anterior