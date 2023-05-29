const imprimirResultado = function(entrada){
    switch(entrada){
        case 'Josuel':
            console.log(entrada + ' de Souza Sanches.')
            break
        case 'Tarcileno':
            console.log(entrada + ' Melo Martins.')
            break
        default:
            console.log('Usuario nao encontrado.')
    }
}

imprimirResultado('Josuel')
imprimirResultado('Tarcileno')
imprimirResultado('Milena')
