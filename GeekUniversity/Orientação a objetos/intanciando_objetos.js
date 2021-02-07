/*
 intanciação de objetos
 
*/
class Pessoa{
    constructor(nome, sobrenome){
    this._nome = nome
    this._sobrenome = sobrenome
    }

    get nome(){
        return this._nome
    }

    set nome(nome){
        return this._nome = nome
    }

    get sobrenome(){
        return this._sobrenome
    }

    set sobrenome(sobrenome){
        return  this._sobrenome = sobrenome
    }
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }
    comer(){
        console.log(`${this.nome} está comento...`)
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}

class Carro{
    constructor(modelo){
        this._marca = 'Honda'
        this._modelo = modelo
    }
    get marca(){
        return this._marca
    }
    get modelo(){
        return this._modelo
    }
    set modelo(modelo){
        this._modelo = modelo
    }


    imprimir(){
     console.log(`${this.marca} ${this.modelo}`)
    }
}

const curso = new Object()
curso.nome = 'Programação em javascrpt'
curso.preco = 27.99

//console.log(curso)

//curso['qtd_alunos'] = 999 

//console.log(curso)

//delete curso['qtd_alunos']

//console.log(curso)

//delete curso['preco']

//console.log(curso)

// intancia de objetos = forma 2 - objeto  literal

const programa = {
    nome: 'photoshop',
    preco: 999.99,
    fabricante: {
        nome: 'adobe',
        contato:'contado@adobe.com',
        endereco: {
            rua:'Da paz',
            bairro: 'Nova lima',
            cidade: 'São paulo',
        },
        filiais:[
            {cidade:'Rio de janeiro'},
            {cidade : 'Recife'}
        ]
    }
}

//console.log(programa)
//console.log(programa.nome) // photoshop
//console.log(programa.fabricante.nome) //adobe
//console.log(programa.fabricante.filiais.length)
//console.log(programa.fabricante.filiais[0]['cidade'])// rio de janeiro

//console.log(programa['fabricante']['filiais'])

// podemos alterar

//programa.nome = 'Playstation os'

//console.log(programa)

//delete programa.fabricante.filiais

//console.log(programa.fabricante.filiais)


//intanciando objetos = forma 3 - objeto literal

//const pessoa = {}
//console.log(typeof(pessoa))

//pessoa.nome = 'Angelina'

//console.log(pessoa)

//Intanciando Objetos = Forma 4 - função construtora

function Lampada(cor){
    this.cor = cor
}

const l2 = new Lampada('branca')

console.log(l2)
console.log(typeof(l2))

// intanciando objetos = forma 5 - atraves das classes

const p1 = new Pessoa('Leonardo', 'Belilo')
console.log(p1)
console.log(typeof(p1))
console.log(p1.nome)
console.log(p1.sobrenome)

p1.nome = 'Lucas'
console.log(p1)

p1.falar('Oi Tudo bem?')
p1.comer()
p1.beber()

const  fit = new Carro('fit')
fit.imprimir()