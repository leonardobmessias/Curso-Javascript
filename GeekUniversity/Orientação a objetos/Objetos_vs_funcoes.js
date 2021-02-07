//Criando objetos atraves de factory functions

const pessoa = (nome, sobrenome)=>{
    return{
        andar:()=>console.log(`${nome} ${sobrenome} está andando...`)
    }
}
const p1 = pessoa('Falicity',' Jones')
console.log(p1)
//p1.andar()
//criando objetos atraves de funçoes contrutoras
function Pessoa2(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando`)
    }
} 

const p2 = new Pessoa2 ("angelina", 'jolie')
console.log(p2)
//p2.andar()

//cliando objeto atraves da classe
class Pessoa3{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando`)
    }
}

const p3 = new Pessoa3('Xuxa', 'Meneguel')
console.log(p3)
//p3.andar()