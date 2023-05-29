// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao = 'Falaa'// contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome / valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua 28 de agosto',
        numero: 214
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)