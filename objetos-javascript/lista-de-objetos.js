// desafio: lista de dependentes
// verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente

const cliente = {
    nome: "Sabrina", 
    idade: 20,
    cpf: "12345678",
    email: "sabri@email.com",
    fone: ["559914754", "448899554"],
    dependentes: [{ 
        nome: 'Sara',
        parentesco: 'Irmã',
        dataNasc: '20/03/2011'
    }]
// transformei esse objeto em um array, para que eu pudesse trabalhar com métodos de array
}

// por maior que seja o objeto, ele ainda é apenas um índice só dentro do array.

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'Irmã',
    dataNasc: '25/05/2014'
})

console.log(cliente)

// como selecionar o nome da dependente MAIS nova?
// fazer um filtro com o parametro da data de nascimento;

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "25/05/2014")
// return: Samia Maria


console.log(filhaMaisNova[0].nome)

// filter é um método de array que sempre vai retornar outro array com os resultados
// mesmo que ele não encontre nada, ele vai retornar um método de array VAZIO


