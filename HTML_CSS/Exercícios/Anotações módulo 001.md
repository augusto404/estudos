## Domínio e Hospedagem
```
www.github.com/augusto404
---
www - subdomínio
github - domínio
com - TLD
augusto404 - caminho
```

## HTML vs CSS
> Não se programa em `HTML/CSS`, se `desenvolve`.

> Linguagem focada em conteúdo.

> `CSS` é focado em design.

> `Javascript` é focado em interações.

## Conteúdo HTML
```html
<h1>Exemplo de título</h1>
<p>Exemplo de parágrafo</p>
<img src="foto.png" alt="Exemplo de foto">
```
> Não pode ter espaco entre a tag e o texto.
> Algumas tags não tem fechamento.

## Conteúdo CSS
```css
h1{
  font-family: Arial;
  font-size: 20pt;
  color: blue;
}
```
> No `CSS` há `seletores` e dentro dos seletores há `declarações` e cada declaração tem `propriedades` e `valores`.

## Estrutura básica de um documento HTML
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    // Compatibilidade com os símbolos de acentuação em ptbr.
    <meta name="viewport"
    content="width=device-width,
    inicial-scale=1.0">
    // Especificação do autoajuste em 100% da tela.
    <title>Document</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```
> Todos esses parâmetros podem ser definidos automaticamente dependendo de qual editor a pessoa vai usar.

## Front-end, Back-end, Full stack
### Front-end
> Tecnologias `client-side` funcionam no dispositivo do cliente.

Quem produz em `HTML`, `CSS`, `JavaScrip` para `client-side`.
- Parte visual e user experience.

### Back-end
> Serve-side são tecnologias que funcionam do lado do servidor.

Desenvolvedor `back-end` é quem produz para `server-side`.
- Parte focada na interação com o servidor.

### Full stack
Desenvolvedor que é `front-end` e `back-end`.

## Ferramentas
[Video ensinando a instalação das ferramentas](https://youtu.be/UForX7ehChM)
> Uso o editor `Acode` (android) e o `Brave Browser`.

---
## Parágrafos e Quebras
> Tudo qhe fica no `<head>` aparece no topo da aba do site (tirando os parametros do `meta`, por exemplo.) e tudo que fica no `<body>` aparece no corpo do site em sí.

```html
Headers:
<h1></h1>
<h2></h2>
...
<h6></h6>
> Os títulos vão até h6.

<p></p> = parágrafo
<br /> = quebra de linha

&lt; = <
&gt; = >
<!-- comentário --> = comentário
```

## Símbolos e emojis
> Se quiser uma quebra de linha maior que a padrão, vai pro CSS.

[Link do PDF com a tabela de símbolos](https://github.com/gustavoguanabara/html-css/blob/89442c71a783ec77ec511b0898c1ffba841030d4/aulas-pdf/05%20-%20Caracteres,%20par%C3%A1grafos%20e%20quebras%20de%20linha.pdf)

> Para adicionar emojis, usar `&#x` + código do emoji + `;`
[Emojipedia | Tabela de emojis](emojipedia.org)

## Imagens
### Direitos autorais
> Se atentar aos direitos de reutilização de imagens.

### Sites
- [Unsplash](unsplash.com)
- [Pexels](pexels.com)

### Formatos
> Usar o Gimp.

> Sempre usar ferramentas de compressão pra diminuir o tamanho das imagens. 

> Ícones são geralmente 200 de largura.

## FavIcons
Para mudar o icone do site, usar o formato ICO.
```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

- [Icon Archive](https://iconarchive.com/)
- [Criar icones em pixel art](https://www.favicon.cc/)
- [Criar icones com palavras, png e emojis](https://favicon.io/)

## Semântica na HTML5
Tomar cuidado para não usar as tags obsoletas. Tudo que é forma se reserva ao CSS, HTML apenas para tags semânticas. Ou seja, HTML = significado, CSS = formas e estilos.

---
## Formatação textual
> Selencione o texto e aperte Ctrl + Shift + P. Clique em "Wrap With Abbreviation" / "Envelope com abreviatura".

> Evitar usar as tags `<b>` e `<i>`, elas podem virar obsoletas por existir `<strong>` e `<em>`.

> Verificar sempre o site oficial do html e ver quais tags podem virar obsoletas. Evitar usar essas tags.

Para marcação de texto, utilizar a tag `<mark>`. Também podendo ser utilizada de um parâmetro em CSS dentro da própria tag individualmente para mudar a cor da marcação.
```html
<p>Podemos criar também <mark style="background-color:#11ff45;">um texto marcado</mark> usando a tag MARK.</p>
```

Para deixar a marcação de forma padronizada no documento, use um seletor (tag `<style>`) na parte da head.
```html
<style>
  mark {
    background-color: #ca71ff;
  }
</style>
```

> Evitat a tag `<u>`, pois ela é obsoleta. Usar `<ins>` no lugar.

