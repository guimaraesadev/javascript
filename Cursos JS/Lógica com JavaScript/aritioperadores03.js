// SITUAÇÃO-PROBLEMA

// Pedir para o usuário digitar dois números e mostrar a média.


//algoritmo:
//pedir para o usuário digitar um número:
var n1 = prompt('Digite dois números'); //pedi e salvei o número na VAR n1.
n1 = parseFloat(n1);
var n2 = prompt('Digite outro número');
n2 = parseFloat(n2);

//imprimir a média:
var media = (n1 + n2)/2 //precisa do "()" para respeitar a ordem de operações.

alert(`A média é: ${media}`) //preciso do alert para mostrar a soma na tela//precedencia de operadores
// ${} == TEMPLATE STRING. // template string substitui a concatenação.

// MÓDULO: 
// se sobra 0 é par, se sobra 1 é ímpar. 

5 % 2 
// 1

6 % 2 
// 0

10 % 9 
// 1

// EXPONENCIAÇÃO:

2 ** 3 
// 8
3 ** 2 
// 9

// INCREMENTO E DECREMENTO

// INCREMENTO
var n = 2 
n = 2
n++ // = 2 também;
// n (outra vez) = 3 // é sempre somando e subtraindo UM


// OUTRO EXEMPLO:

var idade = 10
idade++;
alert(idade)
// vai exibir na tela 11, porque eu adicionei +1, e se eu jogar isso em um looping, vai ir incrementando sempre.

// DECREMENTO

var idade = 10;
idade--; 
alert(idade)

// vai exibir na tela o 9, porque estou decrementando

var idade = idade - 1 // é igual a: var idade = 10; idade--;

// OPERADOR "+="

idade += 10; 
alert(idade) //vai exibir: 20 ➞ que significa: a idade que eu tenho + 10.  



/*
OPERADORES ARITIMÉTICOS: RESUMO

“+” adição

“-” subtração

“*” multiplicação 

“/” divisão 

“%” módulo 

“**” exponenciação 

“++” incremento 

“--” decremento

*/

