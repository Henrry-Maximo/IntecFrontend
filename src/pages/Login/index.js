import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Imagem from "../../components/Imagens/transparente.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api.js";
import "../../styles/login.css";
import jwt_decode from "jwt-decode";

function Index() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState(null);
  const [regNumber, setRegNumber] = useState(null);
  const [regClass, setRegClass] = useState(null);

  // um objeto para ter acesso as todas funcionalidades do useNavigate
  let navigate = useNavigate();

  async function handleLogin(e) {
    // evitar um re-carregamento da página ao enviar os dados, só atualiza se os dados estiverem certo.
    e.preventDefault();


    try {
      const dataLogin = {
        "email":userEmail,
        "senha": password,
        "registro_numero": regNumber,
        "registro_classe": regClass,
      };

      const { data } = await api.post("/login", dataLogin);
      console.log("Results >>>test " + JSON.stringify(data))
      const name = jwt_decode(data.token);
      // exibir os dados após a decodificação do token
      // console.log(name, 'test aqui');
      // alert(name.infoUser.user_name);

      // inserindo na variável '_user_logado' o id do usuário e o nome
      localStorage.setItem('_user_logado', name.infoUser.user_name);

      // inserção da classe e do número de registro, informado no front-end
      sessionStorage.setItem('regClass', JSON.stringify(dataLogin.registro_classe));
      sessionStorage.setItem('regNumber', JSON.stringify(dataLogin.registro_numero));


      // armazena os dados do usuário no navegador para não precisar logar novamente
      sessionStorage.setItem("login", true);

      // Criando a criptografia
      sessionStorage.setItem("jwt", data.token);

      // Pega o nome do usuário do front-end
      // sessionStorage.setItem('_user_logado', JSON.stringify(dataLogin.user_name)); //stringify transforma objeto em string

      // para qual página o usuário será redirecionado
      window.location.href = '/';
    } catch (err) {
      if (err.response.status === 401) {
        alert('Algo esta incorreto no seu login')
      } else {
        alert("erro na requisição" + err);
      }
    }
  }
  return (
    <>
      <div className="login-cont">
        <img className="Login-Logo" src={Imagem} />
        <Form>
          <div className="form-text">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </Form.Group>
            <fieldset class=""
              value={regClass}
              onChange={e => setRegClass(e.target.value)}>
              <div class="" >
                <h6 class="">Tipo de conta:</h6>
                <div class="" className='cont-tipo'>
                  <div class="">
                    <label class="" for="gridRadios1">
                      Professor
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="RM" required></input>
                  </div>
                  <div class="">
                    <label class="" for="gridRadios2">
                      Aluno
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="RA" required></input>
                  </div>
                  <div class="">
                    <label class="" for="gridRadios2">
                      Convidado
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="GT" required></input>
                  </div>
                </div>
              </div>
            </fieldset>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Número de registro:</Form.Label>
              <Form.Control
                type="text"
                value={regNumber}
                maxLength={5}
                onChange={e => setRegNumber(e.target.value)}
                required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Index;
