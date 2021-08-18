[Curso de Linux Mint](https://youtube.com/playlist?list=PLHz_AreHm4dlIXleu20uwPWFOSswqLYbV)

# Comandos

**Linguagem: Bash**

Todos os comandos são feitos em letra minúscula

`ls` = listar conteúdos de uma pasta.

`ls -h` = listar conteúdos com a numeração em MB/GB.

`ls -a` = listar todos os conteúdos da pasta (junto com ocultos).

## Comandos De Ajuda

`ls -- help` = ajuda do terminal / todos os comandos do ls.

`man ls` = "manual" dos comandos (mais completo).

Separar comando, parâmetro e agurmentos.

`.!` = procurar um comando anterior por número no histórico.

Começa a digitar, aperta TAB para autocompletar, se não funcionar, aperte TAB duas vezes que provavelmente vai ter mais de uma opção com nome parecido.

### Diretórios

`cd .` = Diretório atual.
`cd ..` = Diretório anterior.

`cd ~` = Diretório do usuário.

Windows chama de pasta, Linux de diretório.

### Gerênciar arquivos / pastas

`ls "Nome do arquivo"` = ver o arquivo.

Qualquer arquivo que começa com "." é oculto.

`mkdir "nome da pasta"` = criar pasta no diretório atual.

`touch "nome do arquivo".txt` = cria arquivo.

`nano "nome do arquivo"` = abre o arquivo.

```bash
touch Cursos/Hardware/Módulo\ 1/**exercicio.txt**
```

Criando várias pastas de uma vez com um arquivo dentro da última.

### Mover

```bash
cat /etc/services
```

`cat` = manda um arquivo para a saída padrão (geralmente tela, pode ser mudado).

`less` = versão mais organizada do cat. Paginação de arquivos.

```bash
man ls
```

Formata o manual no less (paginação).

`cp` = copiar.

```bash
cp aulalinux.txt Faculdade/
```

Copiar arquivo para outra pasta.

`mv` = mover

### Renomear

Para renomear um arquivo. Deve move-lo para o próprio local com um novo nome. Isso gera um novo arquivo com novo nome e apaga o antigo.

```bash
mv temporario/ Temp
```

Mudar o nome de "temporario" pra "Temp".

### Apagar

`rm` = remover.

`rm -I` = Ativa a pergunta sobre apagar vários arquivos.

`alias rm="rm -I"` = utiliza da função de cima para sempre que usar o comando 'rm' (remove).

Ao fechar o terminal, a alias é resetada.

# Referências Globais

[https://youtu.be/7XQ3Qt7EuWg](https://youtu.be/7XQ3Qt7EuWg)

Estrutura: Comando → Parâmetro → Argumento

```bash
ls /etc/*.conf
```

`ls` = comando

`/etc`/ = parâmetro (pasta do arquivo)

`*.conf` = Argumento (O '*' antes do .conf indica que deve se listar todos os arquivos da pasta '/etc/' que terminam na extensão '.conf')

O '*' no fim do argumento significa "que comece com...". Ele substitui uma ou mais letras.

```bash
ls /etc/f*
```

A '?' faz referência a uma letra em específico.

```bash
ls /etc/?as*
```

O primeiro caractere pode ser qualquer um, segundo tem que ser "as", e depois disso, o '*' pode ter qualquer coisa.

Ou seja: arquivos que tem 'as' como segunda e terceira letra.

```bash
ls /etc/???a*
```

Quero arquivos com letra "a" na quarta posição.

```bash
ls /etc/f[a-i]*
```

Arquivos que começam com "f", segunda letra é de "a" até "i", depois pode ser qualquer coisa.

```bash
ls /etc/p[a,c]*
```

Começa com "p", tem ou "a" ou "c".

" - **"** = intervalo | " , **"** = separador de grupos

```bash
ls /etc/?{am, ul}*
```

O segundo e terceiro caractere pode ser "am" ou "ul".

{Chaves} são usadas para referência de padrões de caracteres.