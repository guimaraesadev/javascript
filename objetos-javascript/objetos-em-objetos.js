// objetos dentro de objetos;

// desafio: compondo um objeto
// adicionar dependentes para um dos clientes cadastrados
// com: nome, idade, parentesco;

const cliente = {
    nome: "Sabrina", 
    idade: 20,
    cpf: "12345678",
    email: "sabri@email.com",
    fone: ["559914754", "448899554"]
}

//adicionar 1 dependente

cliente.dependetes = {
    nome: 'Sara',
    parentesco: 'Irmã',
    dataNasc: '20/03/2011'
}

console.log(cliente)

// acessando a propriedade 'dependentes' que é um objeto dentro de outro objeto;

console.log(cliente.dependetes.nome); // Sara

//alterando a propriedade de dependentes

cliente.dependetes.nome = 'Samanta'



