// DESAFIO: ESTRUTURAS CONDICIONAIS IF (SE) & ELSE (SENÃO).
// SORTEIO E NÚMEROS RANDÔMICOS

//fazer jogador1 digitar um número;
//fazer jogador2 digitar outro número;
//se forem iguais, mostrar a mensagem empate;
//sortear um número entre 0 e 1;


// se o número sorteado for 0, ganha quem escolher o número MENOR
// se o número sorteado for 1, ganha quem escolher o número MAIOR

// RESOLUÇÃO DO DESAFIO:

n1 = parseInt(prompt("Digite um número")); 
n2 = parseInt(prompt("Digite outro número")); 

if (n1===n2) {
    alert("Puts, empatou!")
} else { //fazer o sorteio.

    var nSorteado = parseInt(Math.random()*2)
    if (nSorteado === 0) {
        
        if (n1 < n2) {
            alert("Jogador 1 ganhou!");
        } else {
            alert("Quem ganhou foi o jogador 2!");
        }
    } else {
        if (n1 > n2) {
            alert("Ganhou o jogador 1!")
        } else {
            alert("Ganhou o jogador 2!")
        }
    }
}
// PARA REALIZAR SORTEIOS: 

Math.random() 
// esse é um comando que sorteia um número aleátorio de 0 até 0.99...
// mas nunca chegando ao 1
// se eu quiser que passe de 1, basta multiplicar:

Math.random() * 2 

// para transformar o número DECIMAL recebido pelo Math.random():
// basta utilizar parseInt nele.

parseInt(Math.random() * 2)
// se for 1.87549 vai retornar 1
// se for 0.85743 vai retornar 0

// EXEMPLO RECEBIDO NO CONSOLE:

parseInt(Math.random() * 2) // 0
parseInt(Math.random() * 2) // 1
parseInt(Math.random() * 2) // 1
parseInt(Math.random() * 2) // 0

