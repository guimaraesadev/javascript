// DESAFIO: calcular a média entre as seguintes notas utilizando FOR
// notas: 10, 6.5, 8, 7.5

const notas = [10, 6.5, 8, 7.5] //array com notas 

let somaNotas = 0 // somar TODOS e tirar uma média
// essa variável jamais poderia estar DENTRO do FOR, porque a cada iteração ele iria descarta-la; 



for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
        //somando ela própia + o que eu quero somar
        // o FOR nesse contexto está percorrendo cada nota do array 
        // só para o looping quando o I for MENOR do que 4; 
}

let media = somaNotas / notas.length

console.log(media)

// return = média 8 