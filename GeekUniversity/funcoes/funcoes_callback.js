const cursos = [
    'Html5 e css',
    'Pyhon',
    'Git e github',
    'Mslql'
]
function apresentar(curso,indicie){
    console.log(`${indicie + 1} - ${curso}`)
}
cursos.forEach(apresentar)//Aqui esta apresentando callback

//usando lambda 
cursos.forEach(function(curso, indicie){
    console.log(`${indicie +1} - ${curso}`)
})

//usando arrow
cursos.forEach((curso,indicie) => console.log(`${indicie +1} - ${curso}`))