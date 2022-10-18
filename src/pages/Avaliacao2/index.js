import React from 'react';
import Btn from '../../components/BotaoFlutuante';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pesquisa from '../../components/Pesquisa/index.js';
import Table from 'react-bootstrap/Table';
import '../../styles/feedback1.css';
import '../../styles/avaliacao2.css';


function index() {
    return (
        <>
            <Btn/>
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC AVALIAÇÕES</h1>
                <div className='containerFeed'>
                    <header className='ava-header'>
                        <div className='pog'>
                            <Pesquisa className='pesquisa-avaliacao' />
                            <Link to='/avaliacao'>
                                <Button>Avaliar</Button>
                            </Link>
                        </div>
                    </header>
                    <body className='bodyForm1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Aluno</th>
                                    <th>Turma</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>João</td>
                                    <td>3 DSN</td>
                                    <td>2022</td>
                                    <td>
                                        <Link to='/avaliacao'>
                                            <Button>Acessar</Button>
                                        </Link>
                                    </td>
                                </tr>

                                {/* <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr> */}

                            </tbody>
                        </Table>
                    </body>
                </div>
            </div>
        </>
    )
}

export default index
