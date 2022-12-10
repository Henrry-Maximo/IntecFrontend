import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Btn from '../../components/BotaoFlutuante';
import TextArea from '../../components/TextArea/index.js';
import Img from '../../components/Imagens/branco.png';
import '../../styles/observatorio2.css';
import '../../styles/main.css';
import api2 from '../../config/configApi2.js'

function Index({ isOpen, onRequestClose, title }) {
  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
  const UploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'multipart/form-data'
      }
    }

    await api2.post(`/PostObs/${title}`, formData, headers)
      .then((response) => {
        console.log(title)
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem
        });
      }).catch((err) => {
        if (err.response) {
          setStatus({
            type: 'error',
            mensagem: err
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Tente mais tarde!"
          });
        }
      });
  }
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  const getImages = async () => {

    await api2.get("/ListObs", )
      .then((response) => {
        console.log(response.data);
        setData(response.data.images);
        setUrl(response.data.url);
      }).catch((err) => {
        console.log(err.response);
      })
  }

  useEffect(() => {
    getImages();
  }, []);

  // function refreshPage() {
  //   if(status.type === 'success' ){
  //   window.location.reload(false);
  // }else {
  //   alert( "This page is not reloaded");
  // }}
  

  return (
    <Modal
      show={isOpen}
      onHide={onRequestClose}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Altere as informações</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label for="inputTag">
          { image ?
            <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> :
            <img src={Img} alt="Imagem" className='upload-img' />
          }
          <p>Clique para adicionar uma imagem</p>
          <input id="inputTag" type="file" onChange={e => setImage(e.target.files[0])} />
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={UploadImage}>
          Confirmar envio
        </Button>
      </Modal.Footer>
    </Modal>
  );

}

export default Index;