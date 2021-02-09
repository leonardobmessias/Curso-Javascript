//let itexto = document.getElementById('produto') // pega o elemento pelo id
//console.log(itexto)

//let spans = document.getElementsByTagName('span')// pega o elemento pela teg HTML obs: está no plural então pega todas as tags
//console.log(spans)

//let eles = document.getElementsByClassName('texto')// pega todos os elementos que tem a clase declarada
//console.log(eles)
//console.log(spans[0].textContent)
//console.log(spans[1].innerHTML)
//spans[0].textContent = 'Jesus'
//spans[1].innerHTML = 'Cristo'

//let span = document.getElementsByTagName('span')[0]
//console.log(span.innerHTML)

//span.style.textTransform = 'uppercase'

//let inp = document.querySelector('input') //Quere select é muito flexivel
//console.log(inp)
//let eles = document.querySelector('.texto')//ele busca o primeiro elemento que ele encontrar
//console.log(eles)

//let nos = document.querySelectorAll('.texto')// busca todos os elementos
//console.log(nos)

//let div1 = document.querySelector('#div1') // busca o elemento pelo ide com seu filhos caso tenha
//console.log(div1)

//let imp = document.querySelector('input[name=produto]')
//console.log(imp)


//exempli 1
//let btn = document.querySelector('button.btn')
//btn.onclick = function(){
 //   alert('Botão clicado')
//}

// Exemplo 2

let btn = document.querySelector('button.btn')
let impu = document.querySelector('input[name=produto]')

btn.onclick = function(){
    alert(`Temos o texto ${impu.value}`)
}