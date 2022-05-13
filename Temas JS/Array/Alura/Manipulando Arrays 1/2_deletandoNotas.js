// DELETANDO ELEMENTOS EM UM ARRAY

// desafio: professor lançou acidentalmente 5 notas no sistema
// 10, 6, 8, 5,5, e 10

// Para corrigir, remova a última nota e refaça corretamente a conta

const notas = [10, 6, 8, 5.5, 10]
notas.pop()
console.log(notas)

// recebi como retorno: [ 10, 6, 8, 5.5 ]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`)
// recebi como retorno: 7.375