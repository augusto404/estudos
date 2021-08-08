# Exemplos
// VisualG
// Portugol

```
Algoritmo "MeuNome"
var
    Nome: Caractere
Inicio
    Escreva ("Digite seu nome: ")
    Leia (Nome)
    Escreva ("Muito prazer ", Nome)
FimAlforitmo

---

algoritmo "valores"
    var N1, N2: Inteiro
    var M: Real
inicio
    Escreva("Informe um numero: ")
    Leia(N1)
    Escreva("Informe outro numero: ")
    Leia:(N2)
    M <- (N1 + N2)/2
    Escreva("A media entre", N1, " e ", N2, "é igual a",  M)
fimalforitmo

---

algoritmo "conversor"
var
	angulo, S: Real
inicio
	Escreva("Informe um angulo: ")
	Leia(angulo)
	S <- Sen(GraupRad(angulo))
	Escreva("O seno de ", angulo, "e igual a ", S)
finalgoritmo

---

alforitmo "temperatura"
var
	F, C: Real
início
	Escreva("Qual é a temperatura aqui?"
	Leia(F)
	C <- (F-32)/1.8
	Escreva("No Brasil estaria ", C:4:1)
finalgoritmo

---

alforitmo "imposto"
var
	preco, imposto: Real
início
	Escreva("Qual é o produto? US")
	Leia(preco)
	imposto <- (preco * 60)/100
	Escreva("O imposto será de US", imposto:5:2)
finalgoritmo

```

# Informações

Operadores aritméticos
+ Adição
- Subtração
* Multiplicação
/ Divisão
\ Divisão Inteira
^ Exponenciação
% Módulo

---

`Escreva (" texto ")` = texto na mesma linha
`Escreval (" texto ")` = pula linha
`Escreval (texto)` imprime a variável 'texto'

> Quando é dentro dos parênteses é para chamar variável. Tudo que estiver dentro das áspas é texto.

## Identificadores
- Deve começar com uma letra
- Os outros caracteres podem ser letras ou números
- Não pode utilizar nenhum símbolo, exceto _ (underline)
- Não pode conter espaços em branco
- Não podem conter letras com acentos
- Não podem ser palavras reservadas (var, algoritmo, início)

## Tipos primitivos
- Inteiro = 1 3 -5 198 0
- Real = 0.5 5.0 9.8 -77.3 3.1415
- Caractere = "Gustavo" "Algoritmo" "123"
- Lógico = verdadeiro falso

# Anotações
// Fazer o curso do code.org, ele usa o mesmo sistema do Scratch de blocos ligados uns aos outros.