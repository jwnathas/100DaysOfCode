export default [
    {
        question: "O que é Git?",
        answers: [
            { option: "Um sistema de gerenciamento de bancos de dados", correct: false },
            { option: "Uma linguagem de programação", correct: false },
            { option: "Um sistema de controle de versão", correct: true },
            { option: "Um servidor web", correct: false },
        ],
    },
    {
        question: "Como você cria um novo repositório no Git localmente?",
        answers: [
            { option: "git new", correct: false },
            { option: "git init", correct: true },
            { option: "git create", correct: false },
            { option: "git make", correct: false },
        ],
    },
    {
        question: "O que é um 'commit' no Git?",
        answers: [
            { option: "Uma nova branch", correct: false },
            { option: "Uma alteração no repositório local", correct: true },
            { option: "Um novo repositório remoto", correct: false },
            { option: "Um arquivo de configuração", correct: false },
        ],
    },
    {
        question: "Como você adiciona todos os arquivos modificados no seu diretório de trabalho ao próximo commit?",
        answers: [
            { option: "git add -A", correct: true },
            { option: "git stage -m", correct: false },
            { option: "git commit -a", correct: false },
            { option: "git push origin", correct: false },
        ],
    },
    {
        question: "Qual comando é usado para criar uma nova branch no Git?",
        answers: [
            { option: "git branch new-branch", correct: false },
            { option: "git new-branch", correct: false },
            { option: "git create-branch", correct: false },
            { option: "git checkout -b new-branch", correct: true },
        ],
    },
    {
        question: "Como você mescla uma branch em outra no Git?",
        answers: [
            { option: "git merge branch-name", correct: true },
            { option: "git switch branch-name", correct: false },
            { option: "git combine branch-name", correct: false },
            { option: "git pull branch-name", correct: false },
        ],
    },
    {
        question: "O que é um conflito de merge no Git?",
        answers: [
            { option: "Uma mensagem de erro", correct: false },
            { option: "Quando duas branches têm commits incompatíveis", correct: true },
            { option: "Uma funcionalidade desativada", correct: false },
            { option: "Uma atualização automática", correct: false },
        ],
    },
    {
        question: "Qual comando é usado para enviar alterações para um repositório remoto no GitHub?",
        answers: [
            { option: "git upload", correct: false },
            { option: "git send", correct: false },
            { option: "git push", correct: true },
            { option: "git share", correct: false },
        ],
    },
    {
        question: "O que é um 'fork' no contexto do GitHub?",
        answers: [
            { option: "Uma atualização de software", correct: false },
            { option: "Uma cópia de um repositório de outra pessoa", correct: true },
            { option: "Uma nova branch", correct: false },
            { option: "Uma versão antiga de um repositório", correct: false },
        ],
    },
    {
        question: "Como você clona um repositório remoto no Git?",
        answers: [
            { option: "git clone <url-do-repositorio>", correct: true },
            { option: "git pull <url-do-repositorio>", correct: false },
            { option: "git copy <url-do-repositorio>", correct: false },
            { option: "git download <url-do-repositorio>", correct: false },
        ],
    },
    {
        question: "O que é um repositório git local?",
        answers: [
            { option: "Uma cópia de backup do repositório remoto.", correct: false },
            { option: "Uma cópia do repositório no servidor.", correct: false },
            { option: "Uma cópia do repositório no computador local.", correct: true },
            { option: "Um espelho do repositório remoto.", correct: false },
        ],
    },
    {
        question: "Qual comando é usado para criar uma nova branch no Git??",
        answers: [
            { option: "git checkout branch-nome", correct: false },
            { option: "git branch-nome", correct: false },
            { option: "git checkout -b branch-nome", correct: true },
            { option: "git create-branch branch-nome", correct: false },
        ],
    },
    {
        question: "Como você descarta as alterações não commitadas em sua branch local?",
        answers: [
            { option: "git reset --hard HEAD", correct: true },
            { option: "git revert HEAD", correct: false },
            { option: "git clean -f", correct: false },
            { option: "git discard", correct: false },
        ],
    },
    {
        question: "O que é um pull request no GitHub?",
        answers: [
            { option: "Um pedido para puxar as últimas alterações do repositório remoto.", correct: false },
            { option: "Um pedido para mesclar uma branch com a branch principal.", correct: true },
            { option: "Um pedido para clonar um repositório.", correct: false },
            { option: "Um pedido para reverter alterações.", correct: false },
        ],
    },
    {
        question: "Qual comando é usado para enviar alterações locais para o repositório remoto?",
        answers: [
            { option: "git send", correct: false },
            { option: "git push", correct: true },
            { option: "git publish", correct: false },
            { option: "git commit -m 'enviar'", correct: false },
        ],
    },
    {
        question: "Como desfazer o último commit no Git?",
        answers: [
            { option: "git reset HEAD~1", correct: true },
            { option: "git revert HEAD~1", correct: false },
            { option: "git remove HEAD~1", correct: false },
            { option: "git undo", correct: false },
        ],
    },
    {
        question: "O que é um conflito de merge no Git?",
        answers: [
            { option: "Um erro que ocorre durante o push.", correct: false },
            { option: "Uma situação em que duas branches têm alterações conflitantes que não podem ser automaticamente mescladas.", correct: true },
            { option: "Uma mensagem de erro ao criar uma nova branch.", correct: false },
            { option: "Uma mensagem de erro ao fazer pull.", correct: false },
        ],
    },
    {
        question: "Como criar uma tag no Git?",
        answers: [
            { option: "git tag nome-da-tag", correct: true },
            { option: "git create-tag nome-da-tag", correct: false },
            { option: "git branch nome-da-tag", correct: false },
            { option: "git add-tag nome-da-tag", correct: false },
        ],
    },
    {
        question: "Qual comando é usado para listar todas as branches locais e remotas no Git?",
        answers: [
            { option: "git list", correct: false },
            { option: "git branches", correct: false },
            { option: "git branch -a", correct: true },
            { option: "git show-branches", correct: false },
        ],
    },
    {
        question: "O que é o arquivo .gitignore",
        answers: [
            { option: "a) Um arquivo que contém informações de configuração do repositório.", correct: false },
            { option: "Um arquivo que lista os arquivos e diretórios que devem ser ignorados pelo Git.", correct: true },
            { option: "Um arquivo que armazena credenciais de usuário.", correct: false },
            { option: "Um arquivo de log do Git.", correct: false },
        ],
    },
]