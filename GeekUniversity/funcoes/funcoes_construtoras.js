// Criando uma função construtora

function Pessoa(n,s, raca = 'humano'){
    // atributos privados so conseguimoe fazer uso dentro da função contrutora
    let altura = 0.30
    let peso = 0.5
    let idade = 0
    let nome = n
    let sexo = s

    //Atributo publico pode ser acessado fora da função contrutora
    this.raca = 'Humano'
    //metodo privado só conseguiomos fazer uso dentro da função
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade:${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca} `)}

    //metodo publico conseguimos acessar fora da função contrutora
    this.fazer_aniversario = function(){
        idade += 1
        imprimir_dados()
    }

    this.getIdade = function(){
        return idade
    }
}
//Intanciando um objeto
const angelina = new Pessoa('Angelina', 'Feminino')

console.log(angelina)

console.log (angelina.peso)
console.log(angelina.raca)

angelina.fazer_aniversario()
angelina.fazer_aniversario()

//Intanciando um novo objeto

const felicity = new Pessoa('Felicity', 'Feminino')

felicity.fazer_aniversario()
console.log(felicity.getIdade())

console.log(typeof(Pessoa)) // Função
console.log(typeof(felicity)) // object
