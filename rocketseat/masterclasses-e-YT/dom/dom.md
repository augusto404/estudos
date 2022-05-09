# DOM
- Modelo padrão de documento criado pelo browser para o **JavaScript se conectar ao HTML**
- Os comandos em JS percorrem e selecionam caminhos dentro da árvore DOM
- Além de `document.querySelector("")` para localizar com um seletor CSS, podemos usar `document.querySelectorAll("")` para **selecionar todas as tags** de um tipo no HTML.
    ```js
        document.querySelectorAll("a") // Selecionando todos as tags 'a'.
    ```
- Propriedades de CSS podem ser alteradas dentro do HTML
- Quando um elemento é criado usando `let elemento = document.createElement("")`, **o elemento em sí fica dentro da variável**, ele é formatado dentro da mesma e só depois é adicionado no HTML

## Exercício feito
[Repositório](https://github.com/augusto404/masterclass018-rocketseat)

## Referências
[Manipulação de DOM com JavaScript, do zero, na prática | Masterclass 18](https://youtu.be/UftSB4DaRU4)