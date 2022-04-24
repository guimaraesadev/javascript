/*
    //console.log NÃO recebe informações 
 → prompt para RECEBER as informações 
 → guardar essas informações em uma VAR 
 → // criar uma função. 
 → colocar a VAR dentro do array 
 → WHILE → enquanto os elementos fornecidos não forem impares.
 → prompt para perguntar novamente;
 →      // como fazer validações no JS // nas strings. 
 → inserir um alert no ELSE (caso dê "errado")
 → BREAK → quando eu receber os elementos impares necessários.
 → inserir um document.write para mostrar na tela a lista
 →
*/

criarLista() //chamei minha função; 

function criarLista() { //criei minha função; 
    var quantItems = parseInt(prompt("Quantos itens deseja adicionar na lista?")); //variável para armazenar a função | prompt para perguntar ao usuário
    var lista = [] //guardar dentro de um array 

    while (lista.length !== qtdItens) {
        
        var elemento = prompt('Qual é o elemento?')
        if (elemento.length % 2 === 1) {
            lista.push(elemento)
            alert(`elemento ${elemento} adicionado a lista`)
        } else {
            alert('Elemento inválido')
        }


    }

    criarLista(); //chamando a função. 
    console.log(typeof quantItems) // exibir no console os itens guardados na minha var // porém eu quero que isso seja um número
    // os consoles "logs" são apenas para mostrar.
}

