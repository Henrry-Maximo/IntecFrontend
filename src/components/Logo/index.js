import React from 'react';
import { Card, } from 'react-bootstrap';
import Imagem from '../Imagens/logo_loading.gif';
import '../../StyleComponents/Logo.css';



function index() {
  return (

    <Card className='CardLogo'>
      <Card.Body>
        <img src={Imagem} className='LogoIntec' />
        <Card.Title className="TittleName">INTEC</Card.Title>
      </Card.Body>
    </Card>

  )
}

export default index
