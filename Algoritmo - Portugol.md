# Exemplos

[Curso - Playlist YouTube](https://youtu.be/7gGFHzqh4d8?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV)

// Ferramenta que uso: Acode (Editor de código mobile)

// Linguagen: Portugol

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

## Estruturas condicionais
// Sempre usar identação no código.

```
alforitmo "ParOuImpar"
var
	N: Inteiro
inicio
	Escreva("Digite um número qualquer: ")
	Leia (N)
	Se (N % 2 = 0) entao
		Escreval("O número ", N, "é PAR")
	senao
		Escreval("O número ", N, "é ÍMPAR")
	FimSe
finalgoritmo

---

algoritmo "CalculoIMC"
var
	M, A, IMC: Real
inicio
		Escreva("Massa (Kg): ")
		Leia(M)
		Escreva ("Altura (M): ")
		Leia(A)
		IMC <- M / (A ^ 2)
		Escreval("IMC: ", IMC:5:2)
		Se(IMC >= 18.5) e (IMC < 25) entao
				Escreva("Parabéns! Você está no seu peso ideal")
		senao
				Escreva("Você não está na sua faixa de peso ideal")
		FimSe
finalgoritmo
```

---

### Estruturas Condicionais Alinhadas

```

algoritmo "Aluno"
var
	N1, N2, M: Real
inicio
	Escreva("Primeira nota: ")
	Leia(N1)
	Escreva("Segunda nota: ")
	Leia(N2)
	M <- (N1 + N2) / 2
	Se (M >=7) entao
		Escreva("Aluno APROVADO")
	senao
		Se (M >= 5)
			Escreval ("Aluno em RECUPERAÇÃO")
		senao
			Escreval ("Aluno REPROVADO")
		FimSe
	FimSe
finalgoritmo

---

algoritmo "CalculoIMC_V2"
var
	M, A, IMC: Real
inicio
	Escreva("Massa (Kg): ")
	Leia(M)
	Escreva ("Altura (M): ")
	Leia(A)
	IMC <- M / (A ^ 2)
	Escreval("IMC: ", IMC:5:2)
	Se (IMC < 17) entao
		Escreval ("Muito abaixo do peso")
	senao
			Se (IMC >= 17) e (IMC < 18.5)
				Escreval ("Abaixo do peso")
				senao
					Se (IMC >= 18.5) e (IMC < 25) entao
						Escreval ("Peso ideal")
						senao
							se (IMC >= 25) e (IMC < 30) entao
								Escreval ("Sobrepeso")
							senao
								Se (IMC >= 30) e (IMC < 35) entao
									Escreval ("Obesidade")
								senao
									Se (IMC >= 35) e (IMC < 40)
										Escreval ("Obesidade severa")
									senao
										Escreval ("Obesidade mórbida")
									FimSe
								FimSe
							FimSe
					FimSe
				FimSe
		FimSe
finalgoritmo

---

algoritmo "Salário"
var
	Nome: Caractere
	Sal, NSal: Real
	Dep: Inteiro
inicio
	Escreva ("Qual o nome do funcionário? ")
	Leia (Nome)
	Escreva ("Qual o salário? R$ ")
	Leia (Sal)
	Escreva ("Qual a quantidade de dependente? ")
	Leia (Dep)
	Escolha (Dep)
		Caso 0
			NSal <- (Sal * 5 / 100)
		Caso 1, 2, 3
			NSal <- (Sal * 10 / 100)
		Caso 4, 5, 6
			NSal <- (Sal * 15 / 100)
		OutroCaso
			NSal <- (Sal * 18 / 100)
	FimEscolha
finalgoritmo


```

---

### Estruturas De Repetição

### Enquanto
```
algoritmo "ConteAte10"
var
	contador: inteiro
inicio
	Enquanto (contador <- 0) faca
		Escreval (contador)
		contador <- contador + 1
	FimEnquanto
finalgoritmo
```
#### Repita
```
algoritmo "ConteAte10_V2"
var
	cont: inteiro
inicio
	cont <- 1
	Repita
		Escreval (cont)
		cont <- cont + 1
	Ate (cont > 10)
finalgoritmo

---

algoritmo "ContarNegativos"
var
	N, C, TotN: Inteiro
inicio
	C <- 1
	TotN <- 0
	Repita
		Escreva ("Digite um número: ")
		Leia (N)
		Se (N < 0) entao
			TotN <- TotN + 1
		FimSe
		C <- C + 1
	Ate (C > 5)
	Escreval ("Foram digitados ", TorN, " valores negativos.")
finalgoritmo

---

algoritmo "NumeroPrimo"
var
	C, N, ContDiv: inteiro
Inicio
	C <- 1
	ContDiv <- 0
	Escreva ("Digite um número: ")
	Leia (N)
	Repita
		Se (N % C = 0) entao
			ContDiv <- ContDiv + 1
		FimSe
		C <- C + 1
	Ate (C > N)
	Se (ContDiv > 2) entao
		Escreval ("O valor ", N, " não é primo")
	senao
		Escreval ("O valor ", N, "é primo")
	FimSe
FimAlforitmo
```

#### Para

```
Algoritmo "Contar"
Var
	C: Inteiro
Inicio
	Para C + 1 ate 10
FimAlgoritmo

---

Algoritmo "ValoresPares"
Var
	Cont, V: Inteiro
Inicio
	Escreva ("Digite um valor: ")
	Leia (V)
	Se (V % 2 = 1) então
		V <- V - 1
	FimSe
	Para Cont <- V ate 0 passo -2 faca
		Escreval (Cont)
	FimPara
FimAlgoritmo

---

Algoritmo "Combinações"
Var
	C1, C2: Inteiro
Inicio
	Para C1 <- 1 ate 3 faca
		Para C2 <- 1 ate 3 faca
			Escreval (C1, C2)
		FimPara
	FimPara
FimAlgoritmo

```

---

### Rotinas
#### Procedimentos

```
Algoritmo "DetectorPesado"
Var
	I: inteiro
	N, Pesado: Caractere
	P, Mai: Real
Procedimento Topo()
Inicio
	LimpaTela
	Escreval ("---------------------------------")
	Escreval ("D E T E C T O R  D E  P E S A D O")
	Escreval ("Maior peso até agora: ", Mai, "KG")
	Escreval ("---------------------------------")
FimProcedimento
Inicio
	Topo()
		Para I receve 1 ate 5 faca
			Escreval ("Digite o nome: ")
			Leia (N)
			Escreval ("Digite um peso de ", N, ": ")
			Leia (P)
			Se (P>Mai) entao
				Mai <- P
				Pesado <- N
			FimSe
			Topo()
		FimPara
Topo()
Escreval ("A pessoa mais pesada foi ", Pesado, ", com ", Mai, "Kg ")
FimAlgoritmo
```

# Anotações
- [ ] Fazer o curso do code.org, ele usa o mesmo sistema do Scratch de blocos ligados uns aos outros.