//Page PermUser: Autorizar Usuário.
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import '../../styles/PermUser.css';
import api from '../../service/api.js';
import axios from 'axios';


function Index() {

    const [users, setUsers] = useState([]);
    const [regClass, setRegClass] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [authority, setAuthority] = useState("");

    //sessionStorage.setItem("useregClass", 'RM'); //Atenção Provisório. Enquanto Login não carrega RM e num na sessão.
    //sessionStorage.setItem("useregNumber", '12011');

    // Envio de dados de usuário para checar nome antes de incluir autorizações.
    function handleSubmit(e) {
        alert(`The register was submitted: ${regClass}: ${regNumber}`);
        e.preventDefault(); //evita que formulário envie o dado e recarregue.
        const dataUser = {
            "regClass": regClass,
            "regNumber": regNumber
        }
        async function searchUser(dataUser) {
            console.log(dataUser);
            const {data} = await api.post('/userp', dataUser); //Faz a consulta do número de RM e recebe nome.
            //const data = [{ user_name: 'Joao da Silva' }];  // Atenção: const criada para teste sem back-end. Correta linha acima.
            setUsers(data[0].user_name);
        }
        searchUser(dataUser);
    }

    // Envio dos dados do solicitante logado e do usuário que receberá autorização.
    async function inhandleSubmit(e) {
        e.preventDefault();
        const authData = {
            "useregClass": sessionStorage.getItem("useregClass"),
            "useregNumber": sessionStorage.getItem("useregNumber"),
            "regClass": regClass[0],
            "regNumber": regNumber[1],
            "authority": authority
    }

    const { data } = await axios.post('/setPermUser', authData);
    alert(data.message);
    alert('Authorização solicitada: '+ authority);
}

return (
    <>
        <Btn />
        <div className='pai-Perm'>
            <h1 className='text-Perm'>Permitir Usuário</h1>
            <div className='Perm-container'>
                <div className='justfy-perm'>
                    <fieldset class="">
                        <div className='perm-left'>
                            <h6>Dados do usuário:</h6>
                            <Form.Label className='rm-gt-n'>Selecione RM/GT e digite o número do registro.</Form.Label>
                            <div class="" className='Perm-rm'>
                                <div class="" >
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Dados"
                                            value="RM"
                                            onClick={({ target }) => setRegClass(target.value)}
                                            required />
                                        RM
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Dados"
                                            value="GT"
                                            onClick={({ target }) => setRegClass(target.value)}
                                            required />
                                        GT
                                    </label>
                                </div>
                                <div className='reg-number'>
                                    <Form.Label className='nr'>Numero: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Number"
                                        onChange={({ target }) => setRegNumber(target.value)}
                                        required />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='perm-left-result'>
                        <Form.Label className='rm-gt-n'>Resultado:</Form.Label>
                        <div className='cont-perm-form'>
                            <Form.Control
                                type="text"
                                value={users}
                                required />
                        </div>
                        <div className='btn-perm-excluir'>
                            <Button variant='warning' onClick={handleSubmit}>Consultar</Button>
                            <Button onClick={inhandleSubmit}>Adicionar</Button>
                        </div>
                    </div>
                </div>
                <div className='justfy-perm'>
                    <fieldset class="">
                        <div className='perm-left'>
                            <h6>Selecione a autorização:</h6>
                            <Form.Label className='rm-gt-n'>Autorização que será atribuida ao usuário.</Form.Label>
                            <div class="" className='Perm-aut'>
                                <div class="" >
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Administrador"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Administrador
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Coord pedagogico"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Coordenador pedagógico
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Coordenador"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Coordenador
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Professor"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Professor
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Especialista"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Especialista
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="auto"
                                            value="Curador"
                                            onClick={({ target }) => setAuthority(target.value)}
                                            required />
                                        Curador
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='btn-consultar'>
                        <Button variant='warning'> Consultar autorizados</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Index