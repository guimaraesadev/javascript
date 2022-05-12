// DESAFIO:
// Crie uma lista de chamada com os seguintes alunos:
// 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou na lista. Utilizando métodos de Array, atualize-a.

const listaChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
// Ana e Caio => sairam
// Rodrigo => Entrou
// Inserir Rodrigo no seu lugar correto de chamada.

listaChamada.splice(1, 2, 'Rodrigo')


// No lugar 1 e 2 eu adicionei o 'Rodrigo'

console.log(`Lista de chamada: ${listaChamada}`)

// recebi -> Lista de chamada: João,Rodrigo,Lara,Marjorie,Leo