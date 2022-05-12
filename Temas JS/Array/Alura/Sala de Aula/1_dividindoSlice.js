const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vini', 'Renan', 'Renata', 'Daysi', 'Camilo']

// desafio: dividir todos esses nomes em DUAS salas;

const salaOne = nomes.slice(0, nomes.length/2) // vai do índice '0' até a metade: length/2 (tamanho do array divido por 2)
const salaTwo = nomes.slice(nomes.length / 2) // vai da metade até o FINAL do array (onde termina)

console.log(`Alunos da SALA 1: ${salaOne}`);
console.log(`Alunos da SALA 2: ${salaTwo}`); 

// rodar com nodeJS => F8

// recebi:

// Alunos da SALA 1: João,Juliana,Ana,Caio,Lara,Marjorie,Guilherme,Aline,Fabiana,André
// Alunos da SALA 2: Carlos,Paulo,Bia,Vivian,Isabela,Vini,Renan,Renata,Daysi,Camilo

console.log("quantidade de alunos total:", nomes.length) // descobrindo o tamanho da array

console.log("quantidade de alunos em casa sala:", nomes.length / 2)

