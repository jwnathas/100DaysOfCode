export default [
    {
        questao: "O que é Git?",
        respostas: [
            { opcao: "Um sistema de gerenciamento de bancos de dados", correta: false },
            { opcao: "Uma linguagem de programação", correta: false },
            { opcao: "Um sistema de controle de versão", correta: true },
            { opcao: "Um servidor web", correta: false },
        ],
    },
    {
        questao: "Como você cria um novo repositório no Git localmente?",
        respostas: [
            { opcao: "git new", correta: false },
            { opcao: "git init", correta: true },
            { opcao: "git create", correta: false },
            { opcao: "git make", correta: false },
        ],
    },
    {
        questao: "O que é um 'commit' no Git?",
        respostas: [
            { opcao: "Uma nova branch", correta: false },
            { opcao: "Uma alteração no repositório local", correta: true },
            { opcao: "Um novo repositório remoto", correta: false },
            { opcao: "Um arquivo de configuração", correta: false },
        ],
    },
    {
        questao: "Como você adiciona todos os arquivos modificados no seu diretório de trabalho ao próximo commit?",
        respostas: [
            { opcao: "git add -A", correta: true },
            { opcao: "git stage -m", correta: false },
            { opcao: "git commit -a", correta: false },
            { opcao: "git push origin", correta: false },
        ],
    },
    {
        questao: "Qual comando é usado para criar uma nova branch no Git?",
        respostas: [
            { opcao: "git branch new-branch", correta: false },
            { opcao: "git new-branch", correta: false },
            { opcao: "git create-branch", correta: false },
            { opcao: "git checkout -b new-branch", correta: true },
        ],
    },
    {
        questao: "Como você mescla uma branch em outra no Git?",
        respostas: [
            { opcao: "git merge branch-name", correta: true },
            { opcao: "git switch branch-name", correta: false },
            { opcao: "git combine branch-name", correta: false },
            { opcao: "git pull branch-name", correta: false },
        ],
    },
    {
        questao: "O que é um conflito de merge no Git?",
        respostas: [
            { opcao: "Uma mensagem de erro", correta: false },
            { opcao: "Quando duas branches têm commits incompatíveis", correta: true },
            { opcao: "Uma funcionalidade desativada", correta: false },
            { opcao: "Uma atualização automática", correta: false },
        ],
    },
    {
        questao: "Qual comando é usado para enviar alterações para um repositório remoto no GitHub?",
        respostas: [
            { opcao: "git upload", correta: false },
            { opcao: "git send", correta: false },
            { opcao: "git push", correta: true },
            { opcao: "git share", correta: false },
        ],
    },
    {
        questao: "O que é um 'fork' no contexto do GitHub?",
        respostas: [
            { opcao: "Uma atualização de software", correta: false },
            { opcao: "Uma cópia de um repositório de outra pessoa", correta: true },
            { opcao: "Uma nova branch", correta: false },
            { opcao: "Uma versão antiga de um repositório", correta: false },
        ],
    },
    {
        questao: "Como você clona um repositório remoto no Git?",
        respostas: [
            { opcao: "git clone <url-do-repositorio>", correta: true },
            { opcao: "git pull <url-do-repositorio>", correta: false },
            { opcao: "git copy <url-do-repositorio>", correta: false },
            { opcao: "git download <url-do-repositorio>", correta: false },
        ],
    },
    {
        questao: "O que é um repositório git local?",
        respostas: [
            { opcao: "Uma cópia de backup do repositório remoto.", correta: false },
            { opcao: "Uma cópia do repositório no servidor.", correta: false },
            { opcao: "Uma cópia do repositório no computador local.", correta: true },
            { opcao: "Um espelho do repositório remoto.", correta: false },
        ],
    },
    {
        questao: "Qual comando é usado para criar uma nova branch no Git??",
        respostas: [
            { opcao: "git checkout branch-nome", correta: false },
            { opcao: "git branch-nome", correta: false },
            { opcao: "git checkout -b branch-nome", correta: true },
            { opcao: "git create-branch branch-nome", correta: false },
        ],
    },
    {
        questao: "Como você descarta as alterações não commitadas em sua branch local?",
        respostas: [
            { opcao: "git reset --hard HEAD", correta: true },
            { opcao: "git revert HEAD", correta: false },
            { opcao: "git clean -f", correta: false },
            { opcao: "git discard", correta: false },
        ],
    },
    {
        questao: "O que é um pull request no GitHub?",
        respostas: [
            { opcao: "Um pedido para puxar as últimas alterações do repositório remoto.", correta: false },
            { opcao: "Um pedido para mesclar uma branch com a branch principal.", correta: true },
            { opcao: "Um pedido para clonar um repositório.", correta: false },
            { opcao: "Um pedido para reverter alterações.", correta: false },
        ],
    },
    {
        questao: "Qual comando é usado para enviar alterações locais para o repositório remoto?",
        respostas: [
            { opcao: "git send", correta: false },
            { opcao: "git push", correta: true },
            { opcao: "git publish", correta: false },
            { opcao: "git commit -m 'enviar'", correta: false },
        ],
    },
    {
        questao: "Como desfazer o último commit no Git?",
        respostas: [
            { opcao: "git reset HEAD~1", correta: true },
            { opcao: "git revert HEAD~1", correta: false },
            { opcao: "git remove HEAD~1", correta: false },
            { opcao: "git undo", correta: false },
        ],
    },
    {
        questao: "O que é um conflito de merge no Git?",
        respostas: [
            { opcao: "Um erro que ocorre durante o push.", correta: false },
            { opcao: "Uma situação em que duas branches têm alterações conflitantes que não podem ser automaticamente mescladas.", correta: true },
            { opcao: "Uma mensagem de erro ao criar uma nova branch.", correta: false },
            { opcao: "Uma mensagem de erro ao fazer pull.", correta: false },
        ],
    },
    {
        questao: "Como criar uma tag no Git?",
        respostas: [
            { opcao: "git tag nome-da-tag", correta: true },
            { opcao: "git create-tag nome-da-tag", correta: false },
            { opcao: "git branch nome-da-tag", correta: false },
            { opcao: "git add-tag nome-da-tag", correta: false },
        ],
    },
    {
        questao: "Qual comando é usado para listar todas as branches locais e remotas no Git?",
        respostas: [
            { opcao: "git list", correta: false },
            { opcao: "git branches", correta: false },
            { opcao: "git branch -a", correta: true },
            { opcao: "git show-branches", correta: false },
        ],
    },
    {
        questao: "O que é o arquivo .gitignore",
        respostas: [
            { opcao: "a) Um arquivo que contém informações de configuração do repositório.", correta: false },
            { opcao: "Um arquivo que lista os arquivos e diretórios que devem ser ignorados pelo Git.", correta: true },
            { opcao: "Um arquivo que armazena credenciais de usuário.", correta: false },
            { opcao: "Um arquivo de log do Git.", correta: false },
        ],
    },
]