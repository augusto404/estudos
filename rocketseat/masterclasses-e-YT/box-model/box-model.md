# Box Model
- O browser enxerga os elementos como **caixas**.
- A inversão do padding para o conteúdo interno é feito com `box-sizing: border-box;`. Os valores aplicados ao padding **subtraem do valor do elemento pai.**
    - Essa configuração pode ser usada em projetos que o elemento pai não deve mudar de tamanho independente do tamanho dos componentes internos.
- A propriedade `overflow: hidden;` especifica que o conteúdo interno do elemento **não deve passar da margem do elemento pai**.
- Preferêncialmente usar shorthands, elas deixam o código mais limpo. Na [documentação da MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Shorthand_properties) tem todos os detalhes sobre as shorthands.
- No caso da centralização de elementos no body, além de usar as prorpiedades de flexbox, deve ser aplicada `margin: 0px;` para **não haver a barra de rolagem na página**.
    - Definir `margin: 0px;` no root (`*{}`) também é uma opção.
- Elementos **inline** como `<span></span>` não são influênciados por propriedades de width e height, pois eles **ficam do tamanho da linha**.
    - A especificação `display: inline-block;` faz com que o elemento possa ser formatado normalmente, ela é usada para **colocar conteúdo ao lado** do bloco.

## Referência
[Espaçamentos e a mágica do CSS Box Model | Masterclass](https://youtu.be/nhW70H9H4gU)