// OPERADORES DE COMPARAÇÃO.

/* 
PROBLEMA: 
Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for MAIOR que 5.
*/

/* 

FORMA INTEIRA: 
var n1 = prompt ('digite um número); 
n1 = parseFloat(n1); 

*/ 

// FORMA RESUMIDA. 
var n1 = parseFloat(prompt("Digite um número!"));
var n2 = parseFloat(prompt("Digite outro número.")); 

var media = (n1 + n2) / 2 

alert(media > 5)

// sempre que você realiza uma comparação, console retorna um BOOLEANO (true or false);

// boolean = true or false
// doc: developer.mozilla.org/pt-BR/docs/Glossary/Boolean

/*

RESUMO: OP de comparação 
==  igualdade (valor)
!=  diferente (valor)
=== igualdade (valor e tipo)
!== diferente (valor e tipo)
>   maior
>=  maior ou igual
<   menor
<=  menor ou igual 

EXEMPLOS: 

    // COMPARAÇÕES 
 2 == 2 // true 
 3 == 2 // false 
'2' == 2 // true 
'2' === 2 // false (esse operador leva em conta VALOR e TIPO do dado) // nesse caso STRING vs NUMBER
 2 != 2 // false (2 não é DIFERENTE de 2)
 2 != 3 // true 
 '2' != 2 // false (VALOR de 2 não é diferente de VALOR de 2)
 '2' !== 2 // true (valor e de 2 não é diferente de valor de 2, porém o TIPO é diferente)
 2 === 2 // true (mesmo valor E TIPO)
 
    // MAIOR OU IGUAL

 2 > 5 // false 
 5 > 2 // true 
 2 < 5 // true 
 2 < 2 // false (2 não é menor, é igual)
 2 > 2 // false (2 não é maior, é igual)
 2 >= 2 // true (por conta do "igual")
 2 <= 2 // true 


    // OPERADOR "IGUALL" ➞ = 
Não é operador de comparação, mas sim, de ATRIBUIÇÃO

2 = 3 // isso não é uma COMPARAÇÃO, e da ERRO no console. 

*/

