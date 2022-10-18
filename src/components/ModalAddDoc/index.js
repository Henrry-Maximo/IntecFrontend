import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../StyleComponents/ModalAdd.css';
import api from '../../config/configApi.js';
import Img from '../../components/Imagens/branco.png';

Modal.setAppElement('#root')

function Index(isOpen) {
    

    const [modalIsOpen, setIsOpen] = useState(isOpen);

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
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    data-backdrop ='static'
                    className="modal-add-Doc"
                >
                    <h2>Criar Documento</h2>
                    <div className="row">
                        <form className="col s12">
                            <div>
                                <div className="cont-modal">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Titulo</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Sub-Titulo</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    {status.type === 'success' ? <alert style={{ color: "#fff" }}>{status.mensagem}</alert> : ""}
                                    {status.type === 'error' ? < alert style={{ color: "#ff0000" }}>{status.mensagem}</alert> : ""}

                                    <form onSubmit={UploadImage} className='Modal-upload-form'>
                                        <label for="inputTag" className="Modal-upload">
                                            <p>Clique aqui</p>
                                            {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img src={Img} alt="Imagem" className='Modal-img' />}
                                            <p>Para adicionar uma imagem</p>
                                            <input id="inputTag" type="file" onChange={e => setImage(e.target.files[0])} />
                                        </label>
                                    </form>
                                    <label>Descrição:</label><br />
                                    <textarea className='textarea-modal'></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    name="action"
                                    className='btn-criar-modal'
                                    
                                >Criar doc</Button>

                                <Button
                                    variant='danger'
                                    onClick={() => { window.location.reload(true) }}
                                >Cancelar</Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Index
