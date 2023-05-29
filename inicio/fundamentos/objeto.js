const prod1 = {}
prod1.nome = 'Galaxy m32'
prod1. preco = 2000.00
prod1['descontoLegal'] = 0.40// evitar atributos com espaco

console.log(prod1)
prod1.preco = prod1.preco - prod1.preco*prod1['descontoLegal']
console.log('Aplicando o desconto '+ prod1.preco)

const prod2 ={
    nome: 'camisa polo',
    preco: 45.00,

}

console.log(prod2)