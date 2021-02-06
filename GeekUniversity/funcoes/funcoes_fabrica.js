/*
Funções fabricas
*/
let preco = 0
function fabricar_curso(n,p){
    const desconto = 0.90
    return {
        nome : n 
        preco : p //(p *descont).toFixed(2) 

    }
}
console.log(fabricar_curso('Curso Javascript'))//, 27.99))
console.log(fabricar_curso('curso de Python'))//, 35.99))