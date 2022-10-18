import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Btn from '../../components/BotaoFlutuante';
import TextArea from '../../components/TextArea/index.js';
import Img from '../../components/Imagens/branco.png';
import '../../styles/observatorio2.css';
import '../../styles/main.css';
import api from '../../config/configApi.js'


function Index() {

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
        'Content-Type': 'application/json'
      }
    }

    await api.post("/upload-image", formData, headers)
      .then((response) => {
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem
        });
      }).catch((err) => {
        if (err.response) {
          setStatus({
            type: 'error',
            mensagem: err.response.data.mensagem
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

    await api.get("/list-image")
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

  return (
    <>
      <Btn />
      <div className='contanier-obs2'>
        <h1 className='IntecObs'>INTEC OBSERVATÓRIO</h1>
        <header className='header-obs2'>
          {status.type === 'success' ? <alert style={{ color: "#fff" }}>{status.mensagem}</alert> : ""}
          {status.type === 'error' ? < alert style={{ color: "#ff0000" }}>{status.mensagem}</alert> : ""}

          <form onSubmit={UploadImage} className='form-upload'>
            <label for="inputTag" className="label-upload">
              <p>Clique aqui</p>
              {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img src={Img} alt="Imagem" className='upload-img' />}
              <p>Para adicionar uma imagem</p>
              <input id="inputTag" type="file" onChange={e => setImage(e.target.files[0])} />
            </label>
            <Button variant="primary" type="submit" >Cofirmar envio</Button>
          </form>
        </header>
        <main>
          <Container fluid >
            <div className="img">

              {data.map(image => (
                <div key={image.id}>
                  <img src={url + image.image} alt={image.id} width="150" />
                  <hr />
                </div>
              ))}

            </div>
          </Container>
          <TextArea />
        </main>
      </div>
    </>
  );

}


export default Index;

