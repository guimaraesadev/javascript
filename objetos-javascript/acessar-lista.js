// desafio: acessar chaves
// consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela;

// acessando objeto com a notação de colchetes; 


const cliente = {
    nome: "Sabrina", 
    idade: 20,
    cpf: "12345678",
    email: "sabri@email.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])
// utilizando estrutura de colchetes para acessar um objeto;
// vai retornar o dado que está no índice 0;
// o índice 0 se refere ao nome;


// forEach para percorrer o array;
// forEach precisa de uma callback;

chaves.forEach(info => {
    console.log(cliente[info])
})


