//Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn')
let input = document.querySelector('input[name=github_user')
let div = document.querySelector('#app')

btn.onclick = function(){
    //limpar o conteudo da div
    div.innerHTML = ''
    //instanciando um objeto ajax
    let ajax = new XMLHttpRequest()
    
    //abrir uma conexão
    ajax.open('GET',`https://api.github.com/users/${input.value}`)

    // Enviar a requisição
    ajax.send(null)

    ajax.onreadystatechange = function(){
        //Criar elemento span
        let spanNone = document.createElement('span')

        // Criar Variavel nome
        let txtNome = ''

        /* ajax.readyState  -> 0 => Antes da conexão ser aberta
           ajax.readyState  -> 1 => aPOS ABRIR A CONEXÃO
           ajax.readyState  -> 2 =>HEADERS (CABEÇALHOS) foram recebidos
           ajax.readyState  -> 3 => quando estiver carrregando corpo da requisição(conteudi/dados)
           ajax.readyState  -> 4 => o conteudo (dados) está pronto para uso
        */
        if(ajax.readyState === 4){
            if(ajax.status === 200){
                // transformar os dados JSON para arry
                usuario = JSON.parse(ajax.responseText)
                // Se o usuario possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name'])
                    let img = document.createElement('img')
                    img.setAttribute('src', usuario['avatar_url'])
                    img.setAttribute('alt', usuario['name'])
                    img.setAttribute('width','45px')
                    img.setAttribute('height', '45px')
                    
                    div.appendChild(img)
                }else{
                    txtNome = document.createTextNode(`Não encontrei o usuario ${input.value}`)
                }
                //adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome)
                div.appendChild(spanNone)

                //limpar o input
                input.value = ''
            }
        }
    }

}