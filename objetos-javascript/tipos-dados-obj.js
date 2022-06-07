// desafio: lista de telefones;
// acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la
// verificando se há de um número em algum cadastro

const cliente = {
    nome: "Sabrina", 
    idade: 20,
    cpf: "12345678",
    email: "sabri@email.com",
    fone: ["559914754", "448899554"]
}

cliente.fone.forEach(fone => console.log(fone))

// arrays também podem ser valores de chaves;
// e utilizamos métodos de arrays para busca-los;

