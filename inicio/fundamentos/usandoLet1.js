// Mesmo nao sendo dentro de uma funcao o let so sera visivel dentro, 
/**
 * nesse caso o let de dentro do bloco so é visivel la 
 */

var numero = 1
/**
 * variavel de finica com var tem escopo global e escopo de funcao 
 * ja a variavel definida com let tem escopo global, escopo de funcao e escopo de bloco
 */
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('Fora = ', numero)