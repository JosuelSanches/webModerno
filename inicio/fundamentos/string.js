const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.concat('6'))
console.log(escola.replace(3,'e'))

console.log(escola.replace(/\d/,'e'))// Aqui se substitui todos os numeros por 'e'
console.log(escola.replace(/\w/g,'e'))// Aqui se substitui todos os caracteres por 'e', nao esquecer de colocar a flag g(global)


console.log('Ana, Maria, pedro.'.split(','))