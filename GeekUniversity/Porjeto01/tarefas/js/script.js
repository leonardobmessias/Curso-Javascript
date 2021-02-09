//Execução do projeto
//1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]')

//2) Temos que referenciar o botton
let btn = document.querySelector('#botao')

//3) Temos que referenciar a lista
let lista = document.querySelector('#lista')

let tarefas =[
    'Estudar',
    'Trabalhar',
    'Comprar frutas'
]

function renderizarTarefas(){
    for(tarefa of tarefas){
        //cCriar o intem da lista
        let itemLista = document.createElement('li')

        //Adicionar classes no item da lista
        itemLista.setAttribute('class','list-group-item list-group-item-action' )
        
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
/*  <li class ="list-group-item list-group-item-action">Estudar</li>
                <li class ="list-group-item list-group-item-action">Trabalhar</li> */