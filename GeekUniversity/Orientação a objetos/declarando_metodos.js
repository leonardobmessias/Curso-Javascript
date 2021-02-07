/*
 metodos são uma função que definem comportamentos da nossas classes
 
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

    get marca(){
        return this_marca
    }
    get modelo(){
        return this._modelo
    }
    set modelo(modelo){
        this._modelo = modelo
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


    imprimir(){
     console.log(`${this.marca} ${this.modelo}`)
    }
}