class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca()
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
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`)
    }
    //metodo estatico
    static retornar_marca(){
        return 'Honda'
    }
}

//const fit = new Carro('Fit')
//fit.imprimir_dados()
//console.log(fit.marca)

//acesso metodo estatico
//Uso de funçoes atraves da classe
console.log(Carro.retornar_marca())
