// CONTROLE DE DECISÕES: IF E ELSE;

/* 
PROBLEMA: 
Pedir para o usuário digitar dois números e mostrar uma mensagem
informando se foi aprovado ou não. A nota de corte é 5!
*/

/* 
SE nota > 5
    Mostra uma mensagem de parabéns
SENÃO
    Mostra uma mensagem de reprovação
*/

var n1 = parseFloat(prompt("Digite um número!"));
var n2 = parseFloat(prompt("Digite outro número.")); 

var media = (n1 + n2) / 2
// condicionais:
if (media > 5) {
    alert("Parabéns, vocÊ foi aprovado") //bloco VERDADE 
} else {
    alert("Sorry, reprovado!") //bloco MENTIRA 
}