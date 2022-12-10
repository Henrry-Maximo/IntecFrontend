import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../StyleComponents/ModalAdd.css';
import api from '../../config/configApi.js';
import Img from '../../components/Imagens/branco.png';

Modal.setAppElement('#root')

function Index(isOpen) {

    const criador_string = sessionStorage.getItem("_user_logado")
    const criadorCordenador = JSON.parse(criador_string)
    
    var nomeCriador = criadorCordenador;

    console.log(nomeCriador)

    const [modalIsOpen, setIsOpen] = useState(isOpen);

    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    
    const criador = nomeCriador

    async function CreateDoc() {
        if(titulo, subtitulo, descricao == ""){
            alert("insira as informações nos campos")
            return
        }
        try {
          const test = {
            "titulo": titulo,
            "subtitulo": subtitulo,
            "descricao": descricao,
            "criador": criador,
          };
          console.log("Sucesso: ", test)
          await api.post("/obser", test);
          alert(`Documento ${titulo} criado com sucesso! ${criador}`);
        }catch (err) {
            if (err.response.status === 401) {
                alert('formulário vazio')
            }else{    
          alert(`Houve um erro: ${err}`);
            }
        }
    }
    
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
                                        <Form.Label>Título</Form.Label>
                                        <Form.Control type="text" 
                                           placeholder="Digite aqui" 
                                           value={titulo} 
                                           onChange={e => setTitulo(e.target.value)}
                                           required
                                           />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Subtítulo</Form.Label>
                                        <Form.Control 
                                           type="text"
                                           placeholder="Digite aqui" 
                                           value={subtitulo} 
                                           onChange={e => setSubtitulo(e.target.value)}
                                           required
                                           />
                                    </Form.Group>

                                    <label>Descrição:</label><br />
                                    <textarea 
                                       className='textarea-modal'
                                       type="text"
                                       value={descricao} 
                                       onChange={e => setDescricao(e.target.value)}
                                       required>
                                    </textarea>
                                </div>

                                <Button 
                                    type="submit"
                                    name="action"
                                    className='btn-criar-modal'
                                    onClick={CreateDoc}
                                >Continuar</Button >

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
