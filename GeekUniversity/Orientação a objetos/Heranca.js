/* Funcionarios com os atribustos:
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
    descrição
    salário
*/

class Funcao{
    constructor(descricao,salario){
        this._descricao = descricao
        this._salario = salario
    }
    get descricao(){
        return this._descricao
    }
    set descricao(descricao){
        this._descricao = descricao
    }
    get salario(){
        return this._salario
    }
    set salario(salario){
        this._salario = salario
    }
}

class Pessoas{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome
        this._sobrenome = sobrenome
        this._email = email
        this._cpf = cpf
    }
    get nome(){
        return this._nome
    }
    set nome(nome){
         this._nome = nome
    }
    get sobrenome(){
        return this._sobrenome
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome
    }
    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }
    get cpf(){
        return this._cpf
    }
    set cpf(cpf){
        this._cpf = cpf
    }
    // metodos  extras
    get nome_completo(){
        return this._nome + ' '+this._sobrenome
    }
    set nome_completo(nome_completo){
        // transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço
        nome_completo = nome_completo.split(' ')
        // Remove e retorna o elemento da posição 0 do array com retorno
        this._nome = nome_completo.shift()
        // junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome  = nome_completo.join(' ')
    }
    imprrmir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

// parte da herança
class Funcionarios extends Pessoas{
    constructor(nome, sobrenome, email, cpf , funcao, registro){
        super(nome, sobrenome, email, cpf)
        this._funcao = funcao 
        this._registro = registro
    }
    get funcao(){
        return this._funcao
    }
    set funcao(funcao){
        this.funcao = funcao
    }
    get registro(){
        return this._registo
    }
    set registro(registro){
        this._registro = registro
    }
    
}


class Cliente extends Pessoas{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome,sobrenome,email,cpf)
        this._renda = renda
    }
    get renda(){
        return this._renda
    }
    set renda(renda){
        this._renda = renda
    }
}

const c1 = new Cliente('Felicity', 'Jones','felicityjone@gmail.com', '123456789',8359.50)
const c2 = new Cliente('Angelina', 'Jolie', 'angelinajolie@gmail.com','789456123',8565.33)

//console.table(c1)
//console.table(c2)
//console.log(c1.nome_completo)
//console.log(c2.nome_completo)

//c1.nome_completo = 'Xuxa Meneguel'
//console.log(c1)
//c2.imprrmir_dados()
const programador = new Funcao('Programador', 4899.54)
const suporte = new Funcao ('Suuporte', 2799.34)

const f1 = new Funcionarios('Andre','Vieira', 'Andre@gmail.com','552365147',programador,'011')
const f2 = new Funcionarios('Lucas','Augusto','lck@gmail.com','213546854',suporte,'356')
console.log(f1)
console.log(f2)

console.log(f1.funcao.salario)

f1.imprrmir_dados()