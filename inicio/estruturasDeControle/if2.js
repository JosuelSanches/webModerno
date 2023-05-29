function teste1(num){
    if(num >7)
        console.log(num)
        console.log('final')
}

//teste1(3)
//teste1(99)

function teste2(num){
    if(num > 7);{// cuidado com o ;, nao use com as estruturas de controle
        console.log(num)
    }
}

teste2(8)
teste2(3)