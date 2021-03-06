# Módulo 002
- [Playlist - YT](https://youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s)
- [Material em PDFs](https://github.com/gustavoguanabara/html-css/tree/master/aulas-pdf)
- https://gustavoguanabara.github.io

## Fundamentos Básicos do Design [Exercício 016]
### Maneiras de representar cores em CSS
- Por nome
- Hexadecimal (Escala que vai de 1 - 9 e A - F)
- RGB (Red, Green, Blue)
- Características de cores (hsl = matiz, saturação e luminosidade)

> Passando o mouse pela cor predefinida permite a escolha de tonalidade e luminosidade. Clicando na barra com o formatado de representação das cores, há a possibilidade de mudar os modos de exibição.

### Armonia de cores
[Vídeo falando sobre a armonia de cores](https://www.youtube.com/embed/E2gaDa4ZaTc)
<br><br>
<img src="https://www.sessions.edu/wp-content/uploads/2-12.jpg" width="200">

| NOME | DEFINIÇÃO |
|------|-----------|
| Cores Primárias             | Amarelo, Vermelho, Azul |
| Cores Secundárias           | Verde, Laranja, Violeta |
| Cores terciárias            | Mistura de todas as cores citadas anteriormente
| Cores complementares        | Cores opostas no círculo cromático |
| Cores análogas              | Cores próximas no círculo |
| Cores análogas relacionadas | Duas cores próximas e pula uma cor no círculo |
| cores intercaladas          | Pula uma cor após outra |
| Cores triádicas             | Pula de três em três cores |
| Cores em quadrado           | Pula de duas em duas cores |
| Cores tetrádicas            | Formam um retangulo no círculo cromático |
| Cores monocromáticas        | Escolha uma única cor e trabalhem com a saturação e luminosidade |
<br>

> - As cores são nomeadas hierárquicamente a partir da cor primária. Ex: Amarelo-esverdeado.
> - Paletas de cores tem de **3 a 5 cores** em sua composição.
> - Os conceitos podem ser misturados: cores análogas e uma cor complementar na mesma paleta.

### Paleta de cores
#### Ferramentas
- [Coolors](coolors.co)
- [Adobe color](color.adobe.com)
- [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
- [Colorzilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-BR)

### Gradiente
```css
body {
    background-image: linear gradient(to right, white, blue);
}
```
> - Direção, vírgula, cores
> - A direção pode ser indicada em graus (90deg)
> - `*` é um seletor global

## Tipografia [Exercício 017]
> Procurar sempre a simetria e hamonia de cores na construção de um site, pois isso gera conforto visual.

- Ao desenvolver uma fonte tipográfica, usasse a letra `x` como referêcia principal da altura base e formato.
- Existe a altura das minúsculas (definida pela letra `x`) e a altura das maiúsculas.
- A altura do vasamento de letras como g e b se chamam `ascendente` para a parte superior e `descendente` para a parte inferior.
- A altura total se chamam `corpo`.
- Use cores contrastantes (complementares) para elaborar um layout de leitura confortável.
    > O padrão mais comum é fundo branco e letra preta.

### Categoria de fontes
- Fontes `monoespaçadas` são ótimas para representação de codigo.
- Fontes `com e sem serifa` geralmente são direcionadas a textos longos e coisas de teor formal.
- Fontes `display` são fontes comemorativas e usadas com o teor decorativo, não seguem tanto as regras aplicadas nas categorias citadas anteiormente.

> Procurar por "css safe font combinations" para saber mais as combinações de fontes que não dão problemas de incompatibilidade entre dispositivos.

> Para colocar o nome de fontes que tem mais de uma palavra, utiliza-se ('). Exemplo: `'work sans'`

> [Site citado no vídeo](https://www.w3schools.com/)

- Usando parâmetros como `sans-serif` ou `serif` no estilo em `font-family:` no css fazem com que o dispositivi reproduza qualquer **fonte genérica** que ele tiver dentro dos parâmetros pré-estabalecidos.


### Tamanho de fontes e suas medidas
#### Medidas absolutas
cm, mm, in, px, pt, pc
> A representação dessas medidas em diferentes dispositivos pode variar.

#### Medidas relativas
em (altura da letra maiúscula), ex (altura da letra minúscula), rem, vw (relativo ao width da tela), vh (relativo ao height da tela), %

- Para `medida de fontes`, recomenda-se o uso do **px** ou **em**.
- A nomeclatura em **px** é usada para `layout de impressão.`
- A medição em `em` se baseia no tamanho padrão da fonte.

### Peso, estilo e shorthand
Quando for mexer com o peso da fonte, use `font-weight` + `lighter`/ `normal` / `bold` / `bolder`
Para deixar a fonte em itálico use `font-style: italic;`

> - Nem todas as fontas tem essas variações.
> - Podem ser usados valores entre **100** a **900** para representar a variação entre esses estilos.

> Essas formas de peso e estilo podem ser usadas como melhores substituições das tags em HTML de negrito e itálico.

#### Shorthand
São formas de encurtar e resumir o código.

A forma de aplicar esse atalho segue uma ordem especifica. 

Exemplo:
```css
h1 {
    font: italic bolder 3em 'Work Sans', sans-serif;
    /* shorthand font 
    Hierarquia: font-style -> font-weight -> font-size -> font-family */
}
```

### Usando fontes externas
- [Google Fonts](fonts.google.com)
    > Dentre as alternativas, Google fonts é a melhor. Tanto pela maior facilidade de adicionar as fontes, quanto por ser uma forma mais leve que o site carregar um arquivo local.
- [Dafont](https://www.dafont.com/pt/)

Ao baixar uma fonte, coloque o `@font-face` na folha css de forma manual.

```css
@font-face {
    font-family: 'Nome de referência da fonte';
    src: url('love larry.otf') format('opentype'), url('love larry.ttf') format('truetype');
    /*
    Tipos de `format()`
    - opentype (otf)
    - truetype (ttf)
    - embedded-opentype
    - truetype-aat (Apple Advanced Typography)
    - svg
    */
    font-weight: normal;
    font-style: normal;
}
```
Conforme mostrado no exemplo, se for adicionar mais de um formato da mesma fonte, use uma vírgula após citar o `format()`.

> Lembre-se de sempre colocar uma fonte genérica como ultima opção dentre as fontes personalizadas que forem selecionadas.

> Se for colocar a fonte em uma pasta separada, lembrar de citar o diretório.

> Preferêncialmente, escolha os formatos **.otf** e **.ttf**. Há um menor risco de incompatibilidades.

### Capturando fontes
#### Pegar fontes diretamente do site
- [Fonts Ninja](https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh)

#### Pegar fontes de imagens
- [Mais acertivo - Font Finder](https://www.whatfontis.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)
- [Myfonts](https://www.myfonts.com/)

## Alinhamento dos textos em CSS [Exercício 017]
Para alinhar um texto, use `text-align: ;` em css.

Identação / afastamento do início de um parágrafo:
```css
 p {
    text-indent: 30px;
    }
```

## Usando id [Exercício 019]
- Seletor de id = #

    Ao colocar um id em um elemento, ele poderá ser formatado individualmente em uma folha css.
    ```html
    <h1 id="principal">Criando sites com HTML e CSS</h1>
    ```
    ```css
    h1#principal {
    text-align: center;
    }
    ```
    > Pode ser usado `#principal` também, mas quando não é especificado o elemento, qualquer outro elemento que tiver o mesmo id será formatado em conjunto.
    
    IDs devem ser únicos em um documento.
- Seletor de classe = .
    
    As classes podem ser usadas repetidas vezes dentro do mesmo documento, diferente dos IDs.
    > Dê nomes aos seus IDs e Classes baseados na função, e não na forma. Isso pode gerar confusões futuras.
    
    Para aplicar várias classes ao mesmo elemento, apenas coloque um espaço:
    ```html
    <h2 class="avancado destaque"></h2>
    ```
    IDs e classes podem ser misturados no mesmo elemento:
    ```html
    <h1 id="principal" class="destaque"></h1>
    ```

> A tag `<span>texto</span>` pode ser usada para selecionar um fragmento de texto e aplicar uma formatação específica a ele.
```html
<span class="classe">texto</span>
```

## Pseudo Classes [Exercício 020]
As pseudo classes trabalham com estados de um elemento. Ex: ao passar o mouse em determinada área.
> Pseudo-classes são representadas por `:` dois pontos após o seletor.

- `height` e `width` são usados para ajuste de altura e largura de um elemento em CSS.
- Uma `<div>` é um espaço que pode ser formatado com CSS.

> As classes podem ter sub-elementos, usando o sinal `>` dentro do seletor da div podem ser formatados elementos dentro de outros elementos.

### Pseudo Elementos
Os pseudo-elementos modificam diretamente o conteúdo da tag. Podem ser usados para colocar um conteúdo repetitivo em alguma categoria de tag específica.
> Pseudo-elementos são representadas por `::` dois pontos duas vezes após o seletor.

## Modelo de Caixas [Exercício 021]
- Elementos em **box-level** pulam uma linha do conteúdo anterior e do posterior, ocupando a largura da tela inteira.
> Para a criação de elementos box-level use a tag `<div>`, por exemplo.
- Elementos em **inline-level** são alocados dentro do conteúdo presente, sem pular linha.
> A tag `<span>` é um exemplo.
- User agent = configurações padrão do navegador
- Todas as configurações dos parâentros de seletores para as caixas devem ser feitas a partir do sentido horário.
- Para centralizar **uma caixa** no meio da tela, utilize `margin: auto;` no seletor em CSS.
- A ordem para as shorthands é: valor, estilo e cor. (Passe o mouse no parâmetro da shorthand para saber a ordem)

### Grouping Tags
As grouping tags são usadas para uma melhor organização do seu site. Ao invés de usar divs para tudo, usando as grouping tags seu site fica mais fácil de trabalhar e terá mais sentido semântico.

- Tags: `<header>`, `<main>`, `<footer>`, `<span>`, `<nav>`, `<section>`, etc...

> A maneira mais fácil de criar uma sombra é utilizando o dev tools do seu navegador.

> A tag <aside> é usada para conteúdo periférico no site. Ex: Algo que não tem relação direta com o texto.

### Bordas Decoradas
[Vídeo falando sobre as bordas decoradas](https://youtu.be/n0rjAs_Im4w)

## Variáveis em CSS
Uma variável muito útil que permite a padronização de cores em uma folha CSS, por exemplo, é a `:root`.

As cores ficam registradas como padrão dentro da folha CSS.

```css
/* A variável sempre inicia com os dois traços. OS NOMES DAS VARIÁVEIS MÃO DEVEM CONTER ESPAÇOS. */
:root {
    --cor0: #c5ebd6;
    --cor1: #83e1ad;
    --cor2: #3ddc84;
    --cor3: #2fa866;
    --cor4: #1a5c37;
    --cor5: #063d1e;
}
```

Para usar a cor, coloque o parâmetro `background-color: var(nome da variável);`

> O exemplo é com cores, mas pode ser usado para definição de fontes, também.

> Abrindo a função de inspecionar do navegador e minimizando-a, você irá ver no canto superior direito quantos pixels a janela do seu navegador está ocupando. Assim, você poderá ajustar a responisividade do seu site baseando-se nesses valores.


---

# Anotações extras
## Listas
- `list-style-position: inside;`
    > Define a lista para ficar na parte de dentro da caixa
- `columns: 2`
    > Divide a lista em uma quantidade determinada de coluna
- `list-style-type: '\2714\00A0\00A0';`
    > - Coloca emoji no lugar dos bullet poins da lista
        > - Não há compatibilidade com todos os navegadores
    - Usar `\00A0` para dar espaços em branco

## Margens
- `margin: -10px -10px 0px -10px;`
    > Margens negativas podem ser utilizadas para sobreposição de elementos em html

## Dev tools
- `F12` > `Ctrl` + `Shift` + `M`
    > Emulação de dispositivo. Use para ver o site em diferentes formatos de tela.


## Links
- `a::after { content: '\1F517'; }` 
    > No fim da palavra referente ao link, aparecerá um emoji predefinido em `content: ;`

## Iframes
1. Coloque o iframe dentro de uma div e dê uma classe
    ```html
    <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/l2UDgpLz20M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    ```
2. Ajuste o fundo como relativo e o iframe como absoluto. As medidas são baseadas em porcentagens, assim ficará como uma forma de responsividade.
    ```css
    div.video {
        background-color: var(--cor5);
        margin: 0px -20px 30px -20px;
        padding: 20px;
        padding-bottom: 58%;
        position: relative;
    }

    div.video iframe {
        position: absolute;
        top: 5%;
        left: 5%;
        width: 90%;
        height: 90%;
    }
    ```