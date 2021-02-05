var agora = new Date()
var diaSem = agora.getDay()
console.log('Olá, hoje é..')
var a = '-Feira'
switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda'+a)
        break
    case 2:
        console.log('Terça'+a)
        break
    case 3:
        console.log('Quarta'+a)
        break
    case 4:
        console.log('Quinta'+a)
        break
    case 5:
        console.log('Sexta'+a)
        break
    case 6:
        console.log('Sabado')
        break
}