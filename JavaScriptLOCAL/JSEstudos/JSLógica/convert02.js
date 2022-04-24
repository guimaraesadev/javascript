// EXERCICIO LÓGICO:
// Pedir para o usuário digitar dois números e mostrar a soma.

// obs: todo dado que o usuário digitar no prompt sempre será interpretado como string;
// dessa forma, eu sempre terei que converter de string para número.

// TYPEOF 
var nome 
typeof nome // me diz qual o TIPO de variável que eu estou lidando;

// RESOLUÇÃO:

var n1 = prompt("Digite um número")
n1 = parseFloat(n1); //peguei esse número digitado e automáticamente transformei em FLOAT, antes era uma STRING.

var n2=  prompt("Digite outro número")
n2 = parseFloat(n2);

alert(n1 + n2); //depois de transformar eu consigo realizar a SOMA.

