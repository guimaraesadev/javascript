// desafio: fazendo depósitos
// adicionar uma propriedade que permita "ações"
// para que os clientes que estão cadastrados consigam fazer opr. bancárias;

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
    },
    {
        nome: 'Samia Maria',
        parentesco: 'Irmã',
        dataNasc: '25/05/2014'
    }
    ],

        // criando uma função que permita depositar um valor através do parametro passado;

    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor; 
    }
}

// depositar: também é uma chave
// o valor da chave 'depositar' é uma função
// a função recebe como parametro valor (o usuário vai passar)
// this.saldo para referenciar o contexto
// += que é para somar o que já existe (100) com o que vamos receber (valor)

console.log(cliente.saldo) //100
cliente.depositar(30)
console.log(cliente.saldo) //130








