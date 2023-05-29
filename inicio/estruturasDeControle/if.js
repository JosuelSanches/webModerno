function soBoasNoticias(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoasNoticias(9.0)
soBoasNoticias(7.1)
soBoasNoticias(4.9)
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ...'+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([1, 3])
seForVerdadeEuFalo({})