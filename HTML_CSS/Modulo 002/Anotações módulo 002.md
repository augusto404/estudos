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
<iframe width="560" height="315" src="https://www.youtube.com/embed/E2gaDa4ZaTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

