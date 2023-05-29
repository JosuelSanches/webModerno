const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
function imprimirResultado2(nota){
    if(nota<7){
        console.log('Reprovado, jumento! kk')
    }
}
imprimirResultado(10)
imprimirResultado2(3)
imprimirResultado('Ué')