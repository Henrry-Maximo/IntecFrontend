import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../StyleComponents/itemobs.css';
import ModalObservatorio from '../ModalObservatorio/index.js';


function Index({ title, titleSub, text }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <>
      <div className='coll'>
        <Card style={{ width: '22rem', margin: '90px' }} >
          {/* <Card.Img variant="top" src={src} /> */}
          <Card.Body >
            <Card.Title>{title}</Card.Title>
            <Card.Title>{titleSub}</Card.Title>
            <Card.Text>{text}</Card.Text>
            {/* <Link to='/Observatorio/Detalhes'><Button variant="primary" >Acessar</Button></Link> */}
            <Button
              variant="primary"
              onClick={() => {setmodalIsOpen(true)}}
            >
              Acessar
            </Button>
          </Card.Body>
        </Card>
      </div>
      <ModalObservatorio
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        title = {title}
      />
    </>
  )
}

export default Index