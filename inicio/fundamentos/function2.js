// armazenando uma funcao em uma varivel
const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)


//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}
console.log(soma(2,3))

// retorno implicito
const subtracao = (a, b)=> a-b

console.log(subtracao(25,12))

const imprimir2= a => console.log(a)
imprimir2('Josuel de Souza Sanches')