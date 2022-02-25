- [Curso](https://youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
- [MDN Web Docs](https://developer.mozilla.org)
- [ECMA](https://www.ecma-international.org/)

# Módulo A
## Funcionalidades
- HTML = Conteúdo
- CSS = Estilo
- JS = Interação

## ECMA
As versões do ECMA mais recentes podem não ser compatíveis com todos os navegadores. A versão que será estudada nesse curso é a 6. Nem sempre a versão mais recente significará que as antigas são inúteis, as versões atuais trazem novidades e as antigas contém estabilidade.

## Node.js
O Node.js serve para criar e executar aplicações javascript sem a necessidade de um browser.

## Janelas
A parte `window.` pode ser omitida, se quiser.

- `alert` = alerta apenas com a opção de confirmação
- `confirm` = janela com opção de confirmação e cancelamento
- `prompt` = janela com caixa de texto

```js
    window.alert('texto')
```

O script é executado em sequencia, ou seja, o que está em cima vem primeiro. A ordem dos comandos altera o resultado final.

# Módulo B
## Comentários
```js
    // Comentário de linha única
```

```javascript
    /* Comentário
    de
    varias linhas */
```

## Variáveis
- Variáveis são espaços na memória do computador destinados a receber valores que deverão ser guardados. O processo de colocar valores em uma variável se chama **atribuição**.
    - Além do `var`, podemos utilizar `let`
        > `let`, quando criado dentro de um bloco de váriaveis age diferente de `var`. **Pesquisar as diferenças entre os dois.**
    - Toda variável deve ter um identificador, ou seja, um nome
        - O nome pode começar com **letra**, **$**, ou **_**
        - Não podem começar com **números**
        - Podem ser usados **letras e números**
        - Podem ser usados **acentos e símbolos**
        - Não podem conter **espaços**
            > Use_underline_para_substítuir_os_espaços
        - Não pode conter palavras reservadas
        - Letras maiúsculas e minúsculas fazem diferença
        - Crie variáveis com nomes condizentes, que sejam de fácil reconhecimento
- O sinal único de `=` é chamado de **recebe**
- `null` é o valor designado para coisas **nulas** em javascript, ou seja, *Not A Number*

## Tipos de Dados
- Uma cadeia de caracteres se chama `string`, elas também são valores que podem ser alocados em variáveis
    > Se algo não é um **valor**, é uma `string`, toda `string` é uma **informação**.
    - As `strings` sempre são colocadas `"entre aspas"`, podendo ser `'aspas simples'` ou `acentos graves(``)`, também
- `float` são números reais/com ponto flutuante. Para o JavaScript não há diferênciação nisso, tudo é categorizado como `number`
- `boolean` são valores *binários*: **verdadeiro** ou **falso**
- Usando `typeof` no *node.js*, dá para saber como que o valor está se comportando no momento; se ele é `string` ou `number`, por exemplo

## Tratamento de Dados
Para o recebimento de dados usando o comando `window.prompt('')`, dever ser *concatenado* com o comando `var nome_da_var =`.

```js
    var nome = window.prompt("texto exemplo.")
    // Variável nome recebe o conteúdo do comando prompt.
```

Para apresentar a inormação, o texto que for colocado em um `alert` deve ser *concatenado* com o nome da variável na parte de fora da `string`.

```js
    var nome = window.prompt("texto exemplo.")
    window.alert('É um grande prazer em te conhecer, ' + nome)
    // A concatenação de strings é feita usando `+` entre elas.
```

### Conversão
#### Número Para String
Por padrão, o JS concatena dados, e para que seja feita uma soma, deve ser utilizado uma conversão de strings.

Para converter as strings em numbers dentro de uma variável de soma, deve ser feita a conversão do tipo da string. Isso será feito com `Number.parseInt()` para números inteiros, ou `Number.parseFloat()` para números reais com vírgula (ponto flutuante). `parse` serve para converter formatos de strings numa variável.

```js
    var n1 = Number.parseInt(window.prompt('texto'))
    // Você deve digitar os nomes de funções com suas maiúsculas e minúsculas exatamente como deve ser para não dar problemas.

    var n2 = Number.parseFloat(window.prompt('texto'))
    // Ao usar float, será considerado o resultado com vírgula, se for necessário.
```

Para tratar qualquer número, seja *inteiro* ou *real*, pode ser utilizado apenas `Number()` para ser feita a conversão. As duas formas citadas anteriormente são usadas para quando os números a serem tratados devem ser de um tipo específico (inteiro ou real).

#### String Para Número
Para fazer a conversão de `string` para número, usamos `String()` da mesma forma que nos exemplos anteriores. 

```js
    var n1 = String(window.prompt('texto'))
```

Também pode ser feita a conversão pelo final da linha: `n.toString()`

## Formatando Strings
**Template String** é uma forma mais fácil de formatar uma string grande. Nesse caso, são usados os **placeholders**, que são formas de colocar uma variável diretamente numa string. As **placeholders** são representadas por `${var}` e o texto da string é colocado entre acentos graves (``).

```js
    var n1 = window.prompt('texto')
    window.alert(`texto ${n1}!`)
```

- Para formatar a fonte da string diretamente, pode ser usados `var.toUpperCase()` para converter em maiúsculas ou `var.toLowerCase` para minúsculas.
- Para saber quantos caracteres a string tem, usamos `var.length`
- Ao invés de usar `alert` na hora de mostrar um resultado de alguma variável, pode ser usado `document.write(``)`. A diferença é que essa alternativa escreve o conteúdo diretamente na página.
    ```js
        document.write(`texto`) // Tudo na mesma linha

        document.writeln('texto') // Pula linha após o conteúdo
    ```
    - Podem ser usadas tags HTML dentro da string.
        ```js
            document.writeln('<strong>texto</strong>')
        ```
- Duas casas decimais ou mais em um número podem ser representados usando `var.toFixed(2)`. 
    > O valor dentro dos parênteses pode ser mudado para a quantidade de casas decimais que desejar.
    - Para trocar o ponto por vírgula, concatene a função de substituição `var.toFixed(2).replace('.', ',')`.
- Na especificação de valores monetários, usar `var.toLocalString('pt-BR', {style: 'currency', currency: 'BRL'})`. Isso irá deixar os valores na moeda brasileira.
    > Não precisa usar o replace nesse caso.

<br><br><br>
# Anotações extras
- Estudar frameworks apenas após entender bem os conceitos básicos de JavaScript.
- Ao usar `node` no terminal do *vscode*, o *node.js* estará rodando internamente no editor. Para sair do terminal, use `.exit`.