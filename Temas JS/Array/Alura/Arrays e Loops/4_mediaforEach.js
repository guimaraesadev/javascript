// DESAFIO: Média com ForEach
// Calcular a média entre as seguintes notas utilizando o forEach
// Notas: 10, 6.5, 8, 7.5

const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

notas.forEach(nota => {
    somaNotas += nota
}); 

// PARA CADA nota iremos execultar algo;
// forEach é o que chamamos de callback;
// callback: função que chama OUTRA função; 

let media = somaNotas / notas.length
console.log(media)

//return = 8
// forEach é uma estrutura/método mais MODERNA 
// forEach significa no literal 'para cada'