// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 19, 1, 3, 2)
imprimirSoma()
console.log('**************************')
// function com retorno
function soma(a = 0, b = 0){
    return a+b
}

console.log(soma(3,2))
console.log(soma(3))
console.log(soma())