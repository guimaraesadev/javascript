// MÉTODO map( )
//DESAFIO: ponto extra

// Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas;

const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
 // dar um ponto a mais;

console.log(notasAtualizadas)

// return: [ 10, 10, 9, 8, 7 ]

//O QUE O MAP FAZ:
// o map ( ) RETORNA novos arrays; 



