CLI = programas que executam no terminal
GUI = Programs que tem interface gráfica

# Comandos para terminal
> Todos os comandos tem flags, que são formas de formatar a apresentação do resultado do comando.

- `cd` = navegar entre diretórios
  - `..` = voltar um diretório
- `ls` = lista de diretórios contidos na pastas
- `mkdir` = Criar pastas
- `rm -rf` = Deletar pasta + arquivos dentro dela

# Gerando Chave SSH e Token
1. A chave deve ser gerada para registrar a máquina na qual você está fazendo os commits.

```bash
ssh-keygen -t ed25519 -C seu_email
```

2. Após gerar a chave, use o comando para visualizar o conteúdo da chave **pública**. 

```bash
cd /c/users/seu_user/.ssh/
```

```bash
ls
```

```bash
cat nome_do_arquivo.pub
```

3. Copie os caracteres da chave e cole no campo de registro de chaves ssh do Github (configurações/chaves ssh/adicionar novo).

## Inicializando o SSH Agent
4. Use os seguintes comandos dentro da pasta `.ssh`:

```bash
ela $(ssh-agent -s)
```

5. Irá retornar o valor do agent. Adicione esse valor a sua chave **privada**.

```bash
ssh add id_chaveprivada
```

Agora você pode clonar um repositório usando a chave ssh.

## Gerando token
Se for gerar um token, copie ele e cole em um lugar seguro, pois a página do Github só mostra uma vez por segurança.

Use o protocolo HTTPS para clonar os repositórios.

# Iniciar Git
> Os comandos de instalação do git podem variar dependendo da distro, então é melhor ver os disponíveis no site oficial.

## Criar repositório
1. Abrir a pasta workspace com o terminal
2. Criar pasta que será o repositório
3. Use `-git init` dentro da pasta que será o repositório para cria-lo

## Configurar User
1. Setando a configuração de forma global com o parâmetro `--global`
```bash
git config --global user.email "seuemail"
```

2. Colocando seu nome
```bash
git config --global user.name seunickname
```

### Para ver as configurações feitas
```bash
git config --list
```
> Preferencialmente, use o mesmo e-mail e nickame que o do GitHub para evitar incompatibilidades e confusões futuras.

#### Mudar o e-mail e nickname
1. Retirando as informações anteriores
```bash
git config --global --unset user.email
```

```bash
git config --global --unset user.name
```

2. Coloque as informações que deseja como foi feito na configuração do user.

# Commit
Use `git add *` e `git commit -m "mensagem do commit"` para fazer o commit diretamente pelo terminal.
> O parâmetro `*` serve para especificar que todas as alterações feitas no repositório devem ser trackeadas.

`git status` = mostra o status do arquivo


# Subindo repositório local para o GitHub
```bash
git remote add origin https://github.com/user/repositorio.git
```

```bash
git push origin master
```

