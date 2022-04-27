function abrir() { //relacionada com o botão onclick
    var paragrafo = document.createElement('p') // criei a  tag 'p' para adicionar meu texto e guardei ela na tag VAR
    paragrafo.innerText = "estamos abertos!" // dentro do paragrafo ADICIONEI meu texto
    var pai = document.querySelector('#estado') // a variável pai recebeu o ID da div que eu criei e dessa forma, adicionou o texto lá
    pai.append(paragrafo) 

    // append() Esta função insere um conteúdo (recebido como parâmetro) no formato HTML ao final de um controle alvo

    // O método append() permite adicionar conteúdo ao final de um elemento HTML. Este conteúdo pode ser um seletor, um elemento HTML, uma string HTML ou um objeto jQuery. O método append() opera em todos os elementos HTML retornados sob uma determinação condição.
}


function fechar() { //relacionada com o botão onclick

    var paragrafo1 = document.querySelector('p') //
    paragrafo11.innerText = "estamos fechados!" // 
    
}


//LINK: https://www.arquivodecodigos.com.br/dicas/2108--como-adicionar-conteudo-ao-final-de-um-elemento-html-usando-append.html