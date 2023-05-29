nome=['Josuel', 'Vinicius', 'Marcos', 'Tarcileno']
sobrenome = ' de Souza Sanches'
sobrenome2 = ' Melo Martins'
console.log(nome[2])
nome.push(/**{id:3}, false, null,*/ 'Sônia','Jackline', 'Maria de Jesus')
//nome.pop() // retira o ultimo elemento 

for (let i = 0; i<nome.length; i++){
        if(i <4 && i >2){
                console.log(nome[i] + sobrenome2)
        }else{
        console.log(nome[i] + sobrenome)
        }
} 