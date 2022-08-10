var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaMoscaTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMoscaTempo = 2000
} else if(nivel === 'dificil'){
    criaMoscaTempo = 1500
} else if(nivel === 'chucknorris'){
    criaMoscaTempo = 1000
}

function ajustaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalco()

var cronometro = setInterval(function(){
    tempo--

    if(tempo<=0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function posicaoRandomica() {

    //remover mosca anterior caso exista
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        
        if(vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }else{
        document.getElementById('v' + vidas).src='img/coracao_vazio.png'
        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ?0 : posicaoX
    posicaoY = posicaoY < 0 ?0 : posicaoY
    
    console.log(posicaoX, posicaoY)


    //criar i elemento html
    var mosca = document.createElement('img')

    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAletorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
        console.log('clickado')
    }

    document.body.appendChild(mosca)
}

function tamanhoAletorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}