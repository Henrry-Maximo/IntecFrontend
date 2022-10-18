import React,{useState} from 'react';
import Pesquisa from '../../components/Pesquisa/index.js';
import Btn from '../../components/BotaoFlutuante';
import ItemObs from '../../components/ItemObesrvatorio/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { items } from './items.js';
import ModalAddDoc from '../../components/ModalAddDoc/index.js';

import '../../styles/observatorio.css';



function Index() {

  const [loadModalAdd, setModalAdd] = useState(false);

  function showAddModal() {
    setModalAdd(true);
    console.log('sssss')
  }


  return (
    <> 
     {loadModalAdd && <ModalAddDoc data-backdrop ='static' isOpen={loadModalAdd}  />}
     
    <Btn/>
      <div className='contanier-obs'>
        <main className='main-obs' >
          <header className='header-obs'>
            <Pesquisa />
            <Button variant="primary" className='btn-criar' onClick={showAddModal} >
              Criar Documento
            </Button>

          </header>
          <body className='body-obs'>
            <Container fluid >
              <Row xs={1} md={4} >
                {items.map(item => {
                  return (
                    <ItemObs
                      src={item.src}
                      title={item.title}
                      text={item.text}
                    />
                  );
                })}
              </Row>
            </Container>
          </body>
        </main>
      </div>
      
    </>
  )
}

export default Index

