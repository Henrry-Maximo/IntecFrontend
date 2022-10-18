import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Imagem from "../Imagens/transparente.png";
import "../../StyleComponents/Header.css";

function index() {
  return (
    <>
      <Navbar bg="white" expand="lg" className="cont-nav">
        <Link to="/" className="HeaderLogo">
          <img className="HeaderLogo" src={Imagem} />
        </Link>
        <Link to="/" className="HeaderTittle">
          <div>
            <a id="HeaderLink">INTEC</a>
          </div>
        </Link>
        <Nav.Link>
          {" "}
          <Link to="/Login" className="Header-cad">
            Login
          </Link>{" "}
        </Nav.Link>
        <Nav.Link>
          {" "}
          <Link to="/Cadastro" className="Header-log">
            Cadastrar
          </Link>{" "}
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default index;
