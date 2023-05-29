console.log(Math.ceil(6.1))// O .ceil é usando para arredondar os numeros para maior
console.log(Math.floor(6.8))// Esse é o contrario

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome] = ''Bola2
/**
 * Essas sao as duas formas
 * de se fazer notacao de atributo
 */
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()