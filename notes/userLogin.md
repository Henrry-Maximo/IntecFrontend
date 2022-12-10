função que retorna o nome do usuario logado

# armazenar o nome do usuario

caminho: ./src/pages/login/index.js

Linha 37: "sessionStorage.setItem('_user_logado', JSON.stringify(dataLogin.nome))"
esta pegando "nome" do array "dataLogin" e setando no localStorage('_user_logado')

# coletar o nome do usuario para mensagem de boas vindas

caminho: ./src/pages/Main/index.js

    const usuarioLogadoString =  sessionStorage.getItem('_user_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString)

    console.log(usuarioLogado)
    const user = usuarioLogado

--- Mensaggem
    <h1>Bem vindo {user}</h1> 