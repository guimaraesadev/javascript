/*

// REFERÊNCIA PARA A AULA: //notion // https://www.notion.so/Masterclass-DOM-48ef7efae2ad4e0c8f9b462b675d2b0d



// Manipulação de DOM com JavaScript | Masterclass 18;
// Document Object Model // Estrutura de árvore criada pelo browser;
// Tem propriedades // métodos // funcionalidades;
// Se não existisse a DOM o JavaScript não conseguiria se conectar ao HTML

// As ramificações do DOM podem ser chamadas de: ramificações // branches // node (nó)
// Os elementos vão criando "filhos"

// Root element: Elemento RAIZ
// Frameworks utilizam VIRTUAL DOM (diferente da DOM o browser)

// PROJETO: Piano Virtual

// ANALISANDO O CONSOLE:



Objetos em JavaScript:

    doc: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects (o que são objetos)

    document.location => vejo a URL

    console.dir(document) => vejo TODAS as propriedades do documento, por exemplo;

    console.dir(document.head) // por exemplo => consigo ver as propriedades especificas do que eu estou selecionando, no caso, o "HEAD"; 

    documents.links => pegue todos os links que eu tenho, por exemplo;
    documents.forms => pegue todos os formulários que eu tenho;
    documents.images => mostra as imagens que eu tenho, qual o SOURCE da imagem; 



Buscando elementos em JavaScript no HTML 

    document.getElementById("notion-app") // ou
    console.dir(document.getElementById)

    document.getElementsByClassName (returns HTML collection)

    IMPORTANTE: quando eu busco pela classe, ele me retorna um HTML collection, ou seja, todo o conjunto que está junto com a classe, para eu pegar APENAS o elemento pela classe, é necessário guardar dentro de uma variável; 

    let intercoms = document.getElementsByClassName (-nome-da-classe)

    document.getElementByTagName (return HTML collection); 

    .querySelector (returns element) // RETORNA UM ELEMENTO

            document.querySelector("#idElement")
            document.querySelector(".classElement")


    .querySelectorAll (returns NodeList) // RETORNA TODOS OS ELEMENTOS 


Você sabia?

    - Cada ramificação da  árvore, é um nó (node, element) e cada nó contém um objeto.
    - É possível aplicar o método .forEach em NodeList, mas não em HTMLCollection (ver compatibilidade do navegador)
    - Você pode converter uma NodeList em um Array, usando Array.from() (ver compatibilidade do navegador)


Manipulando conteúdo em HTML com JS

// tenho uma nav na minha página chamada "SHARE", e agora vamos manipula-la com DOM

let share = document.querySelector(".notion-topbar-share-menu") //salvando em uma variável 

share.textContent // mostra o que tenho escrito dentro dessa variável 

share.innerText = "Lauchbase" // na nav mudou de SHARE para LAUNCHBASE

share.innerHTML "<h1>EXAGERADO!</h1>" 

O QUE O CONSOLE RESPONDE SOBRE CADA UM:
share.innerText // responde apenas o texto; //textContent também funciona dessa forma // content = conteúdo
share.innerHTML // responde a TAG HTML utilizada => <a> SHARE </a>, por exemplo; 


ALTERANDO ESTILOS COM JAVASCRIPT
// a propriedade que eu vou mudar precisa estar escrita no padrão cammelCase 
// 
app.style.backgroundColor OU salvar dentro de uma variável 

let frame = app.querySelector(".notion-frame")

frame.style.backgroundColor = white; 

no CSS "!importante" define uma propriedade de REVELÂNCIA no código; 

.classLIst 
    => .add( )
    => .remove ( )
    => .toggle ( ) // se existe, REMOVE, se não existe, adiciona; 


NAVEGADAR PELOS ELEMENTOS: 

    => children:

frame.children[0] //mostra os filhos 
frame.children[0].style.backgroundColor = yellow 

    => parentNode:
frame.parentNode // o documento INTEIRO // para resetar o CSS estilizado do console: WINDOWS + R 

    parentElement: 
frame.parentElement

frame.childElementCount => me mostra o tamanho do elemento OU 
frame.childElement.lenght => tem a mesma funcionalidade 


next.Sibling // irmãos                                                                                                                                                                                                                                




*/