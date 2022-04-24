// OPERADOS LÓGICOS EM JS
/*
DESAFIO:

Pedir para o usuário digitar dois números e mostrar uma mensagem
informando se foi aprovado ou não. 
A nota de corte é 5. 
Contudo, se qualquer uma das notas for ZERO, reprova automaticamente. 
*/

/*
INSIGHT DE RESOLUÇÃO:

Se nota1 > 0 E nota2> 0 E media > 5
    Mostra mensagem de parabéns 
Senão
    Mostra mensagem de reprovação
*/

//RESOLUÇÃO.


// OPERADORES: LISTA
// ! não (not)
// && E  (and)
// || ou (or)

var x = 1; var y = 2 
x < y && x > 3 // FALSE

x < y && x < 3 // TRUE

// no operador &&, tudo precisa ser TRUE para ser VERDADEIRO

x < y || x > 3 // TRUE

// no operador ||, apenas UMA precisa ser TRUE para tudo ser TRUE

