// DESAFIO PROPOSTO:

// pedir para o usuário digitar um número

var n1 = prompt("Digite um número");
n1 = parseInt(n1)

// converter em número inteiro

// pedir para o usuário digitar outro número
var n2 = prompt("Digite outro número");
n2 = parseInt(n2)
// converter em número inteiro

/*
mostrar em um alert o seguinte texto:
o resto da divisão de (n1) por (n2) é: (resultado);
*/

alert("O resto da divisão de " + n1 + " por " + n2 + " é:" + (n1 % n2)); 

/* 
mostrar em um alert o seguinte texto:
o número (n1) elevado a (n2) é: (resultado); 
*/
alert("O número" + n1 + "elevado a" + n2 + "é:" + (n1 ** n2)); 
