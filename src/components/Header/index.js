import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagem from '../Imagens/transparente.png';
import '../../StyleComponents/Header.css';
import Button from "react-bootstrap/Button";
function Index() {


  // const usuarioLogadoString =  localStorage.getItem('_user_logado')
  // const usuarioLogado = JSON.parse(usuarioLogadoString)

  // console.log(usuarioLogado)
  // const user = usuarioLogado
  async function logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/Login';
  }

  return (
    <>
      <div>
        <Navbar bg="white" expand="lg" className='cont-nav'>
          <div className='logo-name'>
            <Link to='/' className="HeaderLogo"><img className="HeaderLogo" src={Imagem} /></Link>
            <Link to='/' className="HeaderTittle"><h4 className="HeaderLink">INTEC</h4></Link>
          </div>
          {localStorage.getItem("_user_logado") !== null ?
            <Button type="submit" onClick={logout} className='Header-cad' variant="light">DESLOGAR</Button>
            : ''}
          {localStorage.getItem("_user_logado") == null ?
            <div className='cont-login-cadastro'>
              <Nav.Link><Link to='/Login' className='Header-cad'>Login</Link></Nav.Link>
              <Nav.Link><Link to='/Cadastro' className='Header-log'>Cadastrar</Link></Nav.Link>
            </div>
            : ''}
        </Navbar>
      </div>
    </>
  )
}

export default Index