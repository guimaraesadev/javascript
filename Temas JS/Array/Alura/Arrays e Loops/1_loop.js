// LOCALIZANDO ALUNOS

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos] //array de duas dimensões.

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {

        //includes sempre retornar um boolean 
        // indexOf sempre retorna um número

        let indice = listaDeNotasEAlunos[0].indexOf 

        return listaDeNotasEAlunos[0][indice] + ', sua media é' + listaDeNotasEAlunos[1][indice]


    } else {
        return "Aluno não está cadastrado"
    }
}


//indexOf = índice DE // índice de ALGO // também é um método de array  

console.log(exibeNomeNota("Nemo"))


//REFAZER E CORRIGIR
// https://cursos.alura.com.br/course/fundamentos-javascript-arrays/task/94720

