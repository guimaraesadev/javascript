//método substring() para extrair uma sequência de caracteres de uma string.

// Valor retornado: "Script é na DevMedia!"
stringExemplo = "JavaScript é na DevMedia!";
resultado = stringExemplo.substring(4);

// Valor retornado: "Aprenda a utilizar"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado = stringExemplo.substring(13, 31);

// Valor retornado: "subs"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado = stringExemplo.substring(4, -5);

// Valor retornado: "subs"
stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado = stringExemplo.substring(4, 0);

// Valor retornado: "Texto em destaque"
htmlExemplo = "<b>Texto em destaque</b>";
resultado = htmlExemplo.substring(3, htmlExemplo.length - 4);

// Valor retornado: "devmedia.com.br"
emailExemplo = "exemplo@devmedia.com.br";
resultado = emailExemplo.substring(emailExemplo.indexOf("@") + 1);