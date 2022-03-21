> **Anotações do curso de JavaScript da Digital Innovation One. Fiz inicialmente o do CursoemVideo, então vou anotar menos coisas, esse curso foi apenas para revisão.**

<br><br><br>

## Definições
- Uma linguagem script é interpretada em tempo real pelo dispositivo que está executando-a.
- Client-side = Executada na máquina do usuário.

## Listas / Arrays
- `var.push()` = adiciona um elemento a lista
- `var.pop()` = remove um elemento
- **Mudando espaçamento** na apresentação de uma array:
    ```js
        console.log(lista.join(" - ")) // Use join dentro do console.log
    ```
- Dicionários podem ser **colocados dentro de listas**:
    ```js
        var var001 = [
            {nome:'nome', idade:'idade'},
            {sexo:'sexo', origem:'país'}
        ]

        console.log(var001[1].origem) // Para chamar os conteúdos, devem ser especificados o posicionamento deles.
    ```
- No uso de métodos que formatam o conteúdo da variável ou do html, pode ser **declarado tudo na mesma linha**:
    ```js
        document.querySelector('#id').innerHTML = 'Texto'
        // O conteúdo de um elemento em html está sendo selecionado e sendo modificado para um novo texto com innerHTML.
    ```
- **Redirecionamento** feito por JS: `open('linkdosite')`
- O elemento pode ser colocado como a própria referência:
    - **HTML**:
        ```html
            <div onmouseover="over(this)" onmouseout="out(this)">Texto...</div>
        ```
        > O próprio elemento se torna a referência, não necessitando de um id, por exemplo.
    - **JavaScript**:
        ```js
            function teste(elemento){
                elemento.innerHTML = 'Texto'
            }
        ```
        > Isso dá margem pra qualquer elemento que tenha a o mesmo parâmetro  de função em html automaticamente receba as configurações estabelecidas.

        > Função útil para vários elementos que devem se comportar da mesma forma.