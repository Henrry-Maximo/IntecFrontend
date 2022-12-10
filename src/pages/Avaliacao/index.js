import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TextArea from '../../components/TextArea/index.js';
import '../../styles/avaliacao.css';
import { MdPictureAsPdf } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import api from '../../service/api';



//function Index() {



//   function gerarPdf(){}
const App = () => {

  const [ano, setAno] = useState('');
  const [aluno, setAluno] = useState('');
  const [modulo, setModulo] = useState('');
  const [turma, setTurma] = useState('');
  const [hab, setHab] = useState('');
  const [professor, setProfessor] = useState('');
  const [tema, setTema] = useState('');
  const [analise, setAnalise] = useState('');
  const [rm, setRm] = useState('');
  const [dia, setDia] = useState('');
  const [validacao, setValidacao] = useState('');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Btn />
      <div className='cont-pai'>
        <div ref={componentRef} className='doc-pag'>
          <header className='doc-header'>
            <h2 className='doc-name'>FICHA DE AVALIAÇÃO DO TCC </h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>AVALIAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC - ANO:</InputGroup.Text>
              <Form.Control
                type='date'
                value={ano}
                onChange={e => setAno(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Aluno(a):</InputGroup.Text>
              <Form.Control
                value={aluno}
                onChange={e => setAluno(e.target.value)}
              />
            </InputGroup>
            <div className='aluno-mod-turm'>
              <InputGroup className="mb-3" >
                <InputGroup.Text>Módulo:</InputGroup.Text>
                <Form.Control
                  value={modulo}
                  onChange={e => setModulo(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3" >
                <InputGroup.Text>Turma:</InputGroup.Text>
                <Form.Control
                  value={turma}
                  onChange={e => setTurma(e.target.value)}
                />
              </InputGroup>
            </div>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Habilitação Profissional Técnica de Nível Médio de Técnico em:</InputGroup.Text>
              <Form.Control
                value={hab}
                onChange={e => setHab(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Professor Responsável:</InputGroup.Text>
              <Form.Control
                value={professor}
                onChange={e => setProfessor(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Tema do Trabalho:</InputGroup.Text>
              <Form.Control
                value={tema}
                onChange={e => setTema(e.target.value)}
              />
            </InputGroup>
          </header>
          <div >
            <p className='doc-text-obg'>Trabalho Escrito (obrigatório) </p>
            <p className='doc-text'>Análise (Considerando os critérios adotados):</p>
            <TextArea
              value={analise}
              onChange={e => setAnalise(e.target.value)}
            />
            <p className='doc-text'>O Trabalho de Conclusão de Curso – TCC, submetido à avaliação
              docente, atendeu as exigências estabelecidas no Plano de Curso da Habilitação
              Profissional, correspondendo à carga horária suplementar de 120 horas a
              serem certificadas no Histórico Escolar.
            </p>
            <InputGroup className="mb-3" >
              <InputGroup.Text>RM do Professor Responsável:</InputGroup.Text>
              <Form.Control
                value={rm}
                onChange={e => setRm(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Data:</InputGroup.Text>
              <Form.Control
                type='date'
                value={dia}
                onChange={e => setDia(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>VALIDAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC – ANO:
              </InputGroup.Text>
              <Form.Control
                value={validacao}
                onChange={e => setValidacao(e.target.value)}
              />
            </InputGroup>

          </div>
        </div>
        <Button className='btn-avaliacao' onClick={handlePrint}> <MdPictureAsPdf /> Gerar PDF </Button>
        <Button className='btn-avaliacao-env'> Enviar </Button>
      </div>

    </>
  )
}

export default App;

