// desafio #1: printar infos
// acessar um objeto com informações de um cliente e exibir essas informações no console;

const cliente = {
    nome: "Sabrina", 
    idade: 20,
    cpf: "12345678",
    email: "sabri@email.com"
}

console.log(cliente.nome)
//através da notação de ponto
//output: Sabrina

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos!`)
// utilizando template string ${}

//mostrando apenas o três primeiro algarismos do CPF
console.log(cliente.cpf.substring(0, 3))
//o método substring(x,y) seleciona a parte de uma string;



