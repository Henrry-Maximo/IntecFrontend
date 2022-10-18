import React from 'react';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TextArea from '../../components/TextArea/index.js';
import '../../styles/avaliacao.css';




function index() {
  return (
    <>
      <Btn />
      <div className='cont-pai'>
        <div className='doc-pag'>
          <header className='doc-header'>
            <h2 className='doc-name'>FICHA DE AVALIAÇÃO DO TCC </h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>AVALIAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC - ANO:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <div>
              <InputGroup className="mb-3" >
                <InputGroup.Text>Aluno(a):</InputGroup.Text>
                <Form.Control />
              </InputGroup>
              <InputGroup className="mb-3" >
                <InputGroup.Text>Módulo:</InputGroup.Text>
                <Form.Control />
              </InputGroup>
              <InputGroup className="mb-3" >
                <InputGroup.Text>Turma:</InputGroup.Text>
                <Form.Control />
              </InputGroup>
            </div>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Habilitação Profissional Técnica de Nível Médio de Técnico em:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Professor Responsável:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Tema do Trabalho:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
          </header>
          <div>
            <p className='doc-text-obg'>Trabalho Escrito (obrigatório) </p>
            <p className='doc-text'>Análise (Considerando os critérios adotados):</p>
            <TextArea />
            <p className='doc-text'>O Trabalho de Conclusão de Curso – TCC, submetido à avaliação
              docente, atendeu as exigências estabelecidas no Plano de Curso da Habilitação
              Profissional, correspondendo à carga horária suplementar de 120 horas a
              serem certificadas no Histórico Escolar.
            </p>
            <InputGroup className="mb-3" >
              <InputGroup.Text>RS do Professor Responsável:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Data:</InputGroup.Text>
              <Form.Control type='date' />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>VALIDAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC – ANO:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <Button className='btn-avaliacao'>Enviar</Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default index

