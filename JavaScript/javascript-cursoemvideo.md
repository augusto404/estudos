- [Curso](https://youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
- [MDN Web Docs](https://developer.mozilla.org)
- [ECMA](https://www.ecma-international.org/)
<br><br>

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

## Operadores
De modo geral, os operadores básicos matemáticos são utilizáveis de forma normal em JS, as excessões são:
- Para o sinal de `*` que serve para divisão
- `%` é usado para o resto da divisão inteira
    > A `/` é usada normalmente para divisão com números reais
- `**` é usado para potênciação

### Precendência de Operadores
Os operadores seguem uma ordem de resolução específica que não séra alterada, independente da posição dos mesmos em uma conta. **Essa ordem se aplica a qualquer linguagem de programação.**

A ordem geral de precedência de operadores é: **aritméticos -> relacionais -> lógicos**.

### Operadores Aritméticos
- Ordem de precedência:
    > Se aparecem mais de um deles na mesma conta, a ordem de resolção é da **esquerda** para **direita**.
    - `()`
    - `**`
    - `*` | `/` | `%`
    - `+` | `-`

#### Fazendo média entre valores:
    ```
    5 + 3 / 2 = 6.5
    ```
    > A prioridade será a divisão.

    Use módulo para priorizar a soma e fazer a média entre valores.

    ```
    (5 + 3) / 2 = 4
    ```

#### Auto Atribuição
Auto atribuição é quando a variável recebe um valor novo, atualizando o antigo.

```js
    var n = 3
    n = n + 4 // Auto atribuição
    // Somando um valor com a auto atribuição
    // n vale 7, agora.
```

- Para simplificar a auto atribuição, use `n+=4`, por exemplo. Omitir a variável que **seria repetida** na soma é permitido.
    > Isso serve para os outros operadores: `n-=5`, `n*=4`, `n/=2`, `n**=2`, `n%=5`.
    
    > A maioria das linguagens aceitam esse tipo de *sintaxe*.
    - Uma segunda maneira de simplificação de auto atribuição é usando os **pós incrementos** `var++` ou `var--`.
        - Isso incrementa o valor **1** á variável.
        - Em algumas linguagens pode ser feita o **pré incremento**: `++var` ou `--var`.

### Operadores Relacionais
Os operadores relacionais fazem comparação entre dois elementos, possibilitando que haja uma ação dependendo do que seja o resultado da comparação.

Os operadores relacionais **não** tem ordem de precedência, apenas devem ser resolvidos da **esquerda para a direita**.

- Os operadores:
    - `>` = Maior que
    - `<` = Menor que
    - `>=` = Maior ou igual
    - `<=` = Menor ou igual
    - `==` = Igual a
    - `!=` = Diferente de

- Os operadores relacionais podem ser usados na comparação de `strings` e `variáveis`.
    - As comparações **não consideram os tipos**, por exemplo:
        ```js
        5 == '5' -> true
        ```
        > Eles tem o mesmo valor, mas são de tipos diferentes.
    - Para a comparação **considerando os tipos**, use o `===` ou `!==` (comparador de identidade).
        ```js
        5 === 5 -> true
        ```
        > Eles tem o mesmo valor e mesmo tipo. São idênticos.

### Operadores Lógicos
- Os operadores lógicos são:
    > A listagem está na **ordem de resolução** dos operadores.
    - `!` = negação
        - Especificação do que **não quero**
        - Operador *unário*
    - `&&` = conjunção
        - Quero as **duas coisas** especificadas, **sem excessão**.
            > As repostas devem ser `true` e `true`.
        - Operador *binário* (true / false)
    - `||` = disjunção
        - Três opções, **ou uma, ou outra, mas também podem ser as duas juntas**.
            > Se as respostas forem `true` e `false`, `false` e `true`, ou `true` e `true`, serão aceitas. Só um `true` já é o suficiente.

### Operadores Ternários
Esses operadores constituem uma sequência de três passos, sendo eles: **teste** `?` **true** `:` **false**.
> Ou seja: variável recebe um valor, se for verdadeiro, faça a opção 01, senão, opção 02.

```js
    var idade = 18
    var resposta = idade >= 18 ? 'MAIOR' : 'MENOR'
    // O resultado será 'MAIOR'
```

# Módulo C
## Extensões
- watch chrome
    > Use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), ela é mais simples de manusear. Ao criar um documento, clique com o botão direito em cima dele (na parte das pastas) e selecione a opção de abrir com Live Server.
- node exec

## DOM - Document Object Model

O DOM é um modelo de estrutura de documento que fica dentro dos navegadores, ele dita em forma de árvore onde está posicionado cada elemento que constitui uma página web. Ele não funciona no Node.JS, apenas no navegador.

### Árvore DOM
A árvore DOM é constituída em objetos que podem ser representados em formato cascata, eles são colocados um dentro do outro, o objeto raíz de todos é o `window`.

```md
- window
    - location
    - document
        - html
            - head
                - meta
                - title
            - body
                - h1
                - p
                    - strong
                - div
    - history
```
- Qualquer coisa na árvore é um elemento
- Quando um elemento contém outro dentro de sí, ele se chama `parent`.
    > `html` é `parent` de `head` e `body`.
- Já quando um elemento é contido por outro, ele se chama `child`.
    > `body` é `child` de `html`.

Quando é digitado `window.` no JS, está sendo usada a estrutura de DOM, por exemplo. Os comandos são uma **navegação dentro dos elementos** no DOM, da mesma forma que é **percorrido um caminho** no gerênciador de arquivos para achar um documento.

```js
    window.document.write(window.document.URL)
    // Mostrando a URL do site no documento HTML.
```

### Selecionando Elementos
Para selecionar elementos, o funcionamento é semelhante aos seletores em CSS.

O elemento `window` que é colocado inicialmente pode ser omitido.

- **Marca**: O elemento é selecionado pela sua tag HTML.
    - Quando um comando do tipo `getElement` estiver no plural, é definido o posicionamento do elemento no HTML:
        ```js
            getElementsByTagName('p')[n]
        ```
        > O número que é colocado dentro dos parênteses inicia em zero e é referente a qual tag que será selecionada se o documento tiver mais de uma.

    - `innerText` pega o conteúdo sem formatação, `innerHTML` pega o conteúdo com a formatação.
- **ID**: Use `id=""` na tag e selecione ele no script com `getElementById('nome_da_id')`.
    > IDs são únicos, não podem ser repetidos em outras tags.
- **Nome**: `getElementsByName()[n]`.
- **Classe**: Mesma forma que o ID, usando `class=""` no lugar.
    > As mesma classe podem ser utilizada várias vezes em diferentes tags.
- **Seletor**: Usando essa forma, o espaço de seleção fica disponível para o uso de seletores CSS.
    
    ```js
        var seletor = window.document.querySelector('div#nome_da_id')
        // O mesmo comando serve para classes, é só mudar a # por ponto.

        seletor.style.color = 'green' // Alterando a cor do elemento
    ```

    > Esse método não é compatível com navegadores antigos.

### Eventos DOM
Os eventos acontecem dependendo do gatilho externo que algum elemento de sua página recebe: passar o mouse em cima de um quadrado, por exemplo.

#### Tipos de Eventos
- `mouseenter` = Ao passar o mouse
- `mousemove` = Ao mover continuamente o mouse sobre o elemento
- `mouseout` = Ao mover o mouse para fora do elemento
- `mousedown` = Clicar e segurar
- `mouseup` = Após clicar e segurar, soltar
- `click` = Clique rápido sobre o elemento

> Ha mais eventos no [site da MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events).

#### Funções
As funções são um bloco de inatruções que só iniciam quando há um gatilho, sendo esse gatilho os eventos DOM. A criação de uma função terá os seguintes passos:

1. Criar um bloco `function`
2. Definir nome da função
    - As **funções amônimas** são as que não tem nome
3. A definição de parâmetros é opcional

```js
    function ação(parametros) {
        
        }
```
**Os eventos podem ser configurados de duas formas: Pelo JS ou por HTML.**

##### Pelo HTML - onclick, onmouseup, etc...
1. Digite `on` dentro da tag e espere o auto completar sugerir as opções
2. Escolha o tipo de evento que deseja
3. Dentro das aspas, defina o nome da **ação** que será colocada na `function`

```js
    function ação() {
        var nome_do_id = document.getElementByID('id_da_tag')
        // Além da ação ser definida, deve ser definido pelo id da tag, também.
    } 
```

##### Pelo JS - Event Listener
Essa função serve para evitar a poluição de código nas tags HTML. No lugar de colocar as ações diretamente na tag, podem ser colocadas no script `var.addEventListener('nome_do_evento', nome_da_função)`. A identificação acontece pela variável pegar o elemento pela id, e os Events Listeners são direcionados á variável.

```js
    var test = document.getElementById('id') // Variável marcando a tag pelo ID
    var.addEventListener('evento', função) // Event Listener localizando a variável que localiza o ID

    function função() { // Função localizando o Event Listener

    }
```
> Não precisa colocar o `on` antes do nome do evento, como no HTML.

# Módulo D
## Condições
As estruturas condicionais trabalham com **se** e **senão** (if or else) para executar ações dependendo de qual o resultado dado por alguma influência exterior no código.

```js
    if {
        // Valor true
    } else {
        // Valor false
    }
```
> Quando uma estrutura tem apenas o `if`, ela se chama condição simples.



<br><br><br>
# Anotações extras
- Estudar frameworks apenas após entender bem os conceitos básicos de JavaScript.
- Ao usar `node` no terminal do *vscode*, o *node.js* estará rodando internamente no editor. Para sair do terminal, use `.exit`.
- Para detectar erros no código, use o console do Dev Tools em seu navegador.