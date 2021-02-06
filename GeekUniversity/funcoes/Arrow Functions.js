//  forma 1
function somar1(num1, num2){
    return num1 + num2
}

console.log(somar1(4,6))

// Forma2
let somar2 = function(num1,num2){
    return num1 + num2

} 
console.log(somar2(4,6))

// Forma 3
let somar3 = somar1
console.log(somar1(4,6))

//Arrow function
let somar4 = (num1,num2)=>{
    return num1 + num2
}
console.log(somar4(4,6))

/* Atenção Caso sua função tenha apenas um parametro deentrada
e executa apenas uma linha você pode simplificar ainda mais
usando arrow functtion*/

let dobrar = valor => valor * 2
console.log(dobrar(5))
