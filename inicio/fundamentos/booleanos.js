let isAtivo = false
console.log(isAtivo)

 isAtivo = true
 console.log(isAtivo)

 isAtivo = 1
 console.log(!isAtivo)
 console.log(!!isAtivo)///O ponto de exclamacao nesse caso quer dizer negacao e !! é a negacao da negacao 

 console.log('Os verdadeiros...')

 console.log(!!3)
 console.log(!!-1)
 console.log(!!' ')
 console.log(!![])
 console.log(!!{})
 console.log(!!Infinity)
 console.log(!!(isAtivo = true))

 console.log('Os falsos...')

 console.log(!!0)
 console.log(!!'')
 console.log(!!null)
 console.log(!!NaN)
 console.log(!!undefined)
 console.log(!!(isAtivo = false))

 console.log(!!('' || false || null || 0 || " "))

 let nome = ""
console.log(nome || 'Desconhecido')

/*É possivel verificar
 se uma determinada
 variavel esta vazia e
  mostrar uma mensagem
  padrao*/

  nome = "Josuel de Souza Sanches"
  console.log(nome || "Desconhecido")
