/**
 * Aqui ha uma demonstracao do uso 
 * dos operadores e ou e ou exclusivo
 * (O ou exclusivo so acontece quando 
 * um dos resultados e falso e outro verdadeiro
 * ou o contrario, quando os resultados sao iguais o
 *  ou exclusivo nao acontece)
 */

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwiser xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete// operador unario
    return{ comprarSorvete, comprarTv50,compraTv32, manterSaudavel}

}
console.log(compras(false, false))