import React from 'react';
import { useEffect, useState } from 'react';
import Pesquisa from '../../components/Pesquisa/index.js';
import Btn from '../../components/BotaoFlutuante';
import ItemObs from '../../components/ItemObesrvatorio/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { items } from './items.js';
import ModalAddDoc from '../../components/ModalAddDoc/index.js';
import api from '../../service/api';

import '../../styles/observatorio.css';



function Index() {

  const [obsers, setObsers] = useState([]);

  const [loadModalAdd, setModalAdd] = useState(false);

  function showAddModal() {
    setModalAdd(true);
  }


  useEffect(() => {
    async function getObser() {
      const { data } = await api.get('/obser');

      setObsers(data);
      console.log(setObsers);
    }

    getObser();
  }, []);


  return (
    <>
      {loadModalAdd && <ModalAddDoc data-backdrop='static' isOpen={loadModalAdd} />}

      <Btn />
      <div className='contanier-obs'>
        <h1 className='IntecObs'>INTEC OBSERVATÓRIO</h1>
        <div className='divHeader'>
          <header className='header-obs'>
            <Pesquisa />       
              <Button variant="primary" className='btn-criar' onClick={showAddModal} >
                Criar Documento
              </Button>
          </header>
        </div>
        <main className='main-obs' >
          <body className='body-obs'>
            <Container fluid >
              <Row xs={1} md={4} >
                {obsers.map((obser) => {
                  return (
                    <ItemObs
                      // src={obser.obs_name}
                      title={obser.obs_name}
                      titleSub={obser.obs_subject}
                      text={obser.obs_desc}
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

