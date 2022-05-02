alert("Olá, mundo");

    
// → não é obrigatório utilizar a “;”, porém, é uma boa prática.
// → alert é uma caixa de diálogo.


// INCLUINDO VARIÁVEIS

var nome = prompt("Qual o seu nome?");
alert("bem vindo" + nome); //CONCATENAÇÃO.

/* 

SOBRE JS: TIPOS DE DADOS & VARIÁVEIS

tipos de dados que podem conter em uma variável: 

→ string = texto 

→ numero inteiro → 1, 2, 1000, 56852 

→ número real → 1.2; 22.22; 568.69 → *decimal*

→ boleano → true or false 

→ array

→ objetos 

→ null (tipo vazio)

→ undefined (não foi atribuído nenhum valor à ela)

→ NaN (Not a Number) 

💫  nome de variável **NÃO** pode conter **caractere especial** (os únicos permitidos são “$” e “_” )

💫  nome de variável **NÃO** pode começar com **números** 

💫  no JS tanto faz ser aspas duplas “..” ou aspas simples ‘..’

💫  não envolvo os números entre aspas, se eu envolver, ele vai virar um **texto/string**

*/

