import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Imagem from "../../components/Imagens/transparente.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api.js";
import "../../styles/login.css";

function Index() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(userName, password);

    try {
      const dataLogin = {
        userName,
        password,
      };

      const { data } = await api.post("/login", dataLogin);
      alert("Login efetuado com sucesso");
      sessionStorage.setItem("login", true);
      sessionStorage.setItem("jwt", data.token);
      navigate("/");
    } catch (err) {
      alert("erro na requisição");
    }
  }

  return (
    <>
      <div className="login-cont">
        <img className="Login-Logo" src={Imagem} />
        <Form>
          <div className="form-text">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
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
