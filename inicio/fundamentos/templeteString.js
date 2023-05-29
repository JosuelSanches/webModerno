const nome = 'Josuel'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`

console.log(template)

// expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()// funcao para transformar as letras em maiusculo
console.log(up(nome))
console.log(`Ei... ${up('Cuidado')}!`)