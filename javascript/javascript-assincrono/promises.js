// promises:
// dão suporte para operações assíncronas
// guardam as operações que precisamos dentro de um objeto cuja a classe é chamada de promise;
// quando precisamos executar, basta chamar este objeto

// promise possui 4 estados:

// pendente: quando ela é criada mas ainda não foi executada
// realizada: quando teve sucesso na operação
// recusada: quando teve falha na operação
// estabelecida: quando foi realizada ou recusada

// pendente: é o status inicial

let komodoShip = {
    name: 'Komodo', 
    velocity: 80,
    acceleration: 10
}

// a Promise envia 2 parametros: resolve e reject (que também são funções)
// resolve: chamamos quando queremos que a Promise seja encerrada com sucesso = realizada
// reject: chamamos quando queremos a Promise seja encerrada com falha = rejeitada


// criei um método que recebe a minha classe Promise 
const velocityAfter2Seconds = (velocity, acceleration) => {
    new Promise(function (resolve, reject) {
        if (acceleration > 0) {
            velocity += acceleration * 2 // quero a velocidade depois que se passaram 2 segundos 
            console.log(`New Velocity: ${velocity}`)
            resolve(velocity)
        } else {
            console.log("Aceleração inválida")
            reject("Não possui aceleração")
        }
})
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)