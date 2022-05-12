/* 
ALGORITMO DO DESAFIO

🐱 pedir para o usuário digitar um número

🐱 converter em um número inteiro

🐱 pedir para o usuário digitar outro número 

🐱 converter em número inteiro 

🐱 mostrar a subtração concatenando com o texto “a subtração é:.....” 

🐱 mostrar a multiplicação concatenando com o texto “a multiplicação é...”

🐱 mostrar a divisão concatenando com texto “a divisão é...”

🐱 mostrar a soma concatenando com o texto “a soma é...”

*/

// 1º tentativa:

// pedir para o usuário digitar um número
var n1 = prompt("Digite um número");
// converter em um número inteiro
n1 = parseInt(n1);
// pedir para o usuário digitar outro número 
var n2 = prompt("Digite outro número")
// converter em número inteiro 
n2 = parseInt(n2)
//  mostrar a subtração concatenando com o texto “a subtração é:.....”
alert("A subtração é:" + n1 - n2);

//ERRO: ➞ na função "alert", o browser está compreendendo tudo como UMA string, e não está realizando a soma!
//ERRO: ➞ o browser retorna: NaN (Not a Number)
//ERRO: ➞ para resolver, é preciso que a função CONTA, seja resolvida antes ➞ para isso, basta colocar em parenteses.

// CÓDIGO INTEIRO:

// pedir para o usuário digitar um número

var n1 = prompt("Digite um número");

// converter em um número inteiro

n1 = parseInt(n1);

// pedir para o usuário digitar outro número

var n2 = prompt("Digite outro número")

// converter em número inteiro

n2 = parseInt(n2)

//  mostrar a subtração concatenando com o texto “a subtração é:.....”

alert("A subtração é:"  + (n1 - n2) );

// mostrar a multiplicação concatenando com o texto “a multiplicação é...”

alert("A multiplicação é:" + (n1*n2))

// mostrar a divisão concatenando com texto “a divisão é...”

alert("A divisão é:" + (n1/n2))

//  mostrar a soma concatenando com o texto “a soma é...”

alert("A soma é:" + (n1 + n2)) // ERRO CORRIGIDO. 

