var nomes = [
    'Leonardo',
    'Mariana',
    'Vidigal',
    'Thais',
    'Rafa',
    'Maira',
    'João',
    'Lucas',
]
//console.log(nomes)
//console.log(nomes.length)

function imprimir(nomes,indicie){
    console.log(indicie + ' - ' + nomes)
}

//nomes.forEach(imprimir)

// maneira diferente de iterar
/*for(i = 0; i < nomes.length;i++){
    console.log(i + ' - ' + nomes[i])
}*/
nomes.forEach(function(nomes,indicie){
    //console.log(`${indicie} - ${nomes}`)
})

