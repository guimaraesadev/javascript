// INSERIR dados na tela // Saída de dados // 4 tipos.
document.getElementById("texto").innerHTML = "Meu primeiro texto JS!";
 //peguei o elemento pelo ID no HTML (getElementById)
 //inseri conteúdo no HTML com o comando de saida ".innetHTML"

document.write('Oi, escrito com "document.write"')
document.write(5 + 5) //esse comando também aceita funções, como a de soma, vista no exemplo!

alert(10 + 5) // aparece um pop-up na TELA.

console.log("Oi, isso é um console.log") //aparece no console ou TERMINAL no dev tools no Google.
// o console.log é mais sucinto, e não atrapalha o fluxo da página


//DECLARAÇÕES JS == Intruções passadas por meio de código.
//No JS, nós separamos *declarações* por meio de ponto e vírgula (;)
// JS ignora espaços vazios.
//Exemplo:

let a, b, c; //declarei 3 variáveis // fiz 4 declarações 
a = 5;
b = 6;
c = 7;

// se eu fizer: 
let a, b, c; a = 5; b = 6; c = 7; // também estará correto, pois o (;) está separando as declarações

//JS aceita "quebra de linhas" livremente. Exemplo:

document.getElementById("texto").innerHTML =
    "Meu primeiro texto JS!"; //é recomendado quebrar linhas apenas depois de um sinal de "=", por exemplo

//outra forma de declarar código é por meio das FUNÇÕES:
function minhaFunction() {
    document.write(5 + 5)
    document.write(5 + 5)
    document.write(5 + 5)
    document.write(5 + 5)
    document.write(5 + 5)
}
//é um bloco de código exercendo uma atividade
//utiliza-se "()" para mostrar que é uma função, e "{}" para abrigar o código dentro da função.

// SINTAXE JS
console.log("5+5") //o JS entende isso como TEXTO, e não como uma função matemática
console.log(5 + 5)  // apenas dessa forma é entendido como função numérica

// para variáveis: var, let e const
/*

OPERADORES LÓGICOS:
! = not/inversão
&& = e/and
|| = ou/or

*/


/*
EXERCICIO COM: controle de decisão e operadores lógicos
Se nota1 > 0 E nota2 >0 E media >5
    Mostrar mensagem de parabéns
Senão
    Mostrar mensagem de reprovação
*/

//se tudo for TRUE, o IF é execultado, se UM deles for FALSE, o ELSE será execultado. EXEMPLO:

var x = 1; var y = 2

x < y && x > 3 //FALSE ➞ x é MENOR que y E x é MAIOR que três ➞ FALSO
x < y && x < 3 //TRUE  ➞ x é MENOR que y E x é menor que três ➞ VERDADEIRO
x < y || x > 3 //TRUE  ➞ x é MENOR que y OU x é maior que três ➞ VERDADEIRO // basta que apenas uma seja verdadeira!

x > y // FALSE, porém
!(x > y) // TRUE ➞ porque eu neguei, e ao negar, eu inverti a sentença.

/* RESOLUÇÃO DO PROBLEMA:
1. Pedir para o usuário digitar dois números e mostrar uma mensagem informando se ele foi aprovado ou não!
A nota de corte é 5. Contudo, se qualquer uma das notas for 0, ele reprova automaticamente
*/


