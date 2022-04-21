let h=document.getElementById('horas')
let m=document.getElementById('minutos')
let s=document.getElementById('segundos')
var numeros=1
var numerom=1
var numeroh=1
var intervalo

function atualizartempo(){
    if(numeros<60){
        atualizarsegundos()
    }else if(numerom<60){
        atualizarminutos()
    }else{
        atualizarhoras()
    }
}

function atualizarsegundos(){
    s.innerHTML= numeros
    numeros++

}

function atualizarminutos(){
    m.innerHTML=numerom
    numerom++
    numeros=0
    atualizarsegundos()
}

function atualizarhoras(){
    h.innerHTML=numeroh
    numeroh++
    numerom=0
    atualizartempo()
}

function iniciar(){
    intervalo=setInterval(atualizartempo,1000)

}

function Parar(){
    clearInterval(intervalo)
}

function zerar(){
    location.reload()
}




