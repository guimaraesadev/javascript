// como deletar chaves/valores em um objeto?

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
   
// objetivo: deletar a propriedade 'alidado'

delete objPersonagem.aliado
console.log(objPersonagem.aliado)

// return: undefined
// não terá mais nada dentro da propriedade 'aliado'

// para utilizar a notação de colchetes:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

// Importante: O delete remove do objeto o valor da propriedade, assim como a chave.

// O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação
// Ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

// heranças em objetos: (POO)
// o operador delete não remove propriedades herdadas de outro objeto