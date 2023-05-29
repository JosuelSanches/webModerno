/**
 * As variaveis declaradas com var sofrem com o efeito do 
 * hoisting que é quando a variavel sobe no codigo
 * mesmo sendo declarada no final,
 * podendo ser parcialmente acessada antes mesmo da 
 * linha onde foi criada, coisa que nao acontece quando a 
 * variavel é criada a partir do let
 */
console.log('a = ',a)
var a = 2
let b = 3
console.log('a = ', a,' b = ',b)