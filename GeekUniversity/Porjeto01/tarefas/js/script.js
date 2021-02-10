//Execução do projeto
//1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]')

//2) Temos que referenciar o botton
let btn = document.querySelector('#botao')

//3) Temos que referenciar a lista
let lista = document.querySelector('#lista')

//card
let card = document.querySelector('.card')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function renderizarTarefas(){
    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = ''
    for(tarefa of tarefas){
        //cCriar o intem da lista
        let itemLista = document.createElement('li')

        //Adicionar classes no item da lista
        itemLista.setAttribute('class','list-group-item list-group-item-action' )
        
        //adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTareda(this)
        }

        //Criar um textto
        let itemTexto  = document.createTextNode(tarefa)
        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto)

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista)
    }
    
}
//Executando a função renderizar as tarefas
renderizarTarefas()
/* aula de iserindo dados 
precisamos escutar o evento de clique do botão
precisamos capturar o valor digirado pelo usuario
precisamos atualizar a nova tarefa na listta(array) de tarefas e renderizar novamente
*/

//1- precissamos escutar o evento de clique no botãp

btn.onclick = function(){
    //2- precisamos capturar o valor digirado pelo usuario
    let novaTarefa = input.value

    if (novaTarefa !==""){
        //3- precisamos atualizar a nova tarefa na listta(array) de tarefas e renderizar novamente
        tarefas.push(novaTarefa)
        
        renderizarTarefas()

        //limpar imput apos elemento adicionado
        input.value = ''

        // Limpar ,mensagem de erro (spans)
        removerSpans()
        //salva os novos dados no banco de dados
        salvarDadosNoStorage()
    }else{
        // Limpar ,mensagem de erro (spans)
        removerSpans()

        let span = document.createElement('span')
        span.setAttribute('class', 'alert alert-warning')
       
        let msg = document.createTextNode('Você precisa informar a tarefa')
        
        span.appendChild(msg)

        card.appendChild(span)
    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span')
    
    for(let i = 0; i < spans.length;i++){
        card.removeChild(spans[i])
    }

}

function deletarTareda(tar){
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent),1)
    // renderiza novamente a tela
    renderizarTarefas()

    //salva os novos dados no banco de dados
    salvarDadosNoStorage()
}

function salvarDadosNoStorage(){
    //todo navegador web possui esta capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}