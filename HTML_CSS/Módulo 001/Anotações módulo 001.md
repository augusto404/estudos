# Modulo 001
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
<p>
  Exemplo de parágrafo
</p>
<img src="foto.png" alt="Exemplo de foto">
```
> Não pode ter espaco entre a tag e o texto.
> Algumas tags não tem fechamento.

## Conteúdo CSS
```css
h1 {
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

<p></p>
= parágrafo
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
<p>
Podemos criar também <mark style="background-color:#11ff45;">um texto marcado</mark> usando a tag MARK.
</p>
```

Para deixar a marcação de forma padronizada no documento, use um seletor (tag `<style>`) na parte da head.
```html
<style>
mark {
background-color: #ca71ff;
}
</style>
```

> Evitar a tag `<u>`, pois ela é obsoleta. Usar `<ins>` no lugar.

## Citações e Códigos
### Códigos
A tag `<code>` serve para citar um código dentro de um texto, porém ele não mostra de maneira identada, serve apenas para linhas únicas de citação.

Se quiser colocar a identação no código, deve colocar a tag `<pre>` envelopando a tag `<code>`.

Selecione **apenas o código** e use `Shift` + `TAB` para recuar a identação para trás, e apenas `TAB` para recuar a identação para frente.

```html
<pre>
<code>
num = int(imput('Digite um número))
if num % 2 == 0:
print(f'O número {num} é PAR}
else:
print(f'O número {num} é IMPAR)
print('Fim Do Programa')
</code>
</pre>
```

### Citação
Ao fazer uma citação, usar a tag `<q>` no lugar das aspas.

Para citação de parágrafos, usar a tag `<blockquote>`.

### Abreviação
Use a tag `<abbr>` para referenciar siglas e abreviações no texto.

### Texto invertido
A tag `<bdo dir="rtl">` inverte o texto em uma frase.

## Listas OL e UL [Exercício 009]
> Colocarei os números dos exercícios no título para ficar mais fácil a consulta futura.

### Listas ordenadas
A tag `<ol>` cria uma lista ordenada, possibilitando a adição de intens entre os já existentes.

Exemplo em **HTML4**:
```html
<ol>
<li>ítem</li>
<li>ítem</li>
<li>ítem</li>
<li>ítem</li>
</ol>
```

Exemplo em **HTML5**:
```html
<ol>
<li>ítem
<li>ítem
<li>ítem
</ol>
<!--- No html5 não é necessário a tag `<li>`. Ela se torna opcional. --->
```

#### Tipos OL
Pode ser colocado um parâmetro na tag `<ol>` para especificar o tipo de lista que será exibida.

```html
<ol type="1" start="4">
<li>ítem
<li>ítem
<li>ítem
</ol>
<!--- `type` especifica o tipo de lista, e `start` diz de onde deve começar a contagem. --->
```
##### Variações OL
- A // a === Lista com letras do alfabeto
- I // i === Lista em algarismos romanos

### Listas Não Ordenadas
Listas que não tem uma demarcação ordenando-as. Usamos a tag `<ul>`.

```html
<ul type="square">
<li>ítem
<li>ítem
<li>ítem
</ul>
```

#### Variações UL
- Circle === •
- Disk === °
- Square === □

### Listas dentro de listas
Pode ser criadas sublistas, também são validos parâmetros de personalização que foram citados anteriormente.

### Listas de Definições
As tags `<dt>` e `<dd>` servem para colocar um termo e sua respectiva descrição.

## Links e Âncoras em HTML5 [Exercício 010]
### Links Externos
A tag `<a>` (âncora) serve para redirecionar de um texto para um link.

Usar também a propriedade `target:"_blank"`, e `rel="external"`.

```html
<p>
Exemplo de <a href="https://github.com/augusto404" target="_blank" rel="external">link exerno.</a>
</p>
```

### Links Internos
Use o sistema de referências internas para criar páginas de navegação dentro do seu site.

Use `target:"nofollow"` para links que não tem o seu aval {anunciantes, sites que você não garante a veracidade do conteúdo, etc.}

Usar `<rel="next">` na página principal para outras páginas. E usar `<rel="prev">` dentro de páginas secundárias. Isso ajuda ao buscador indexar melhor as páginas do seu site.

A propriedade `<target="self">` equivale a dizer pra o site abrir a página terciária (dentro de uma pasta) na mesma guia, para que não fique abrindo guias no navegador do usuário sem necessidade.

Sempre ter em mente que o sistema de diretórios na contrução de um site é o mesmo que o do Linux. Quando se quer referênciar um arquivo dentro de uma subpasta da pasta principal onde está o **index.html**, cite o diretório.
```html
<p>
Você também pode acessar nossa <a

href="noticias/pag003.html"

rel="next" target="self">página de notícias.</a>
</p>
```
> O diretório root é `<href="../index.html">`. Para cada sequência de `../` o site volta uma pasta no diretório.

### Links para download
Usar a propriedade `<type="application/tipo_de_midia">` na tag de referência ao download, isso serve para forçar o download se o site apresentar problemas no processo, como o de abrir o arquivo ao invés de baixá-lo.

Usar [este site](http://www.iana.org/assignments/media-types/media-types.xhtml) para a consulta dos tipos de mídia para serem citados na propriedade `type`.

[Para ver os principais formatos de midia para colocar no parâmetro, clique aqui e acesse o pdf do Gustavo Guanabara](https://github.com/gustavoguanabara/html-css/blob/master/aulas-pdf/10%20-%20Liga%C3%A7%C3%B5es%20em%20toda%20parte.pdf)

## Imagens Dinâmicas [Exercício 11]
> Imagens menores ficam acima hierarquicamente.
