function carregar(){
    var hora = window.prompt('Olá que horas são?') 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas..<br> Bom dia!`
        img.src='manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas <br> Boa tarde! `
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas <br> Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}