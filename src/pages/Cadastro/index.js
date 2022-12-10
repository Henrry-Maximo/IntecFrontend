import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import api from '../../service/api';
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';
import '../../styles/cadastro.css';



function Index(e) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [regClass, setRegClass] = useState('');
    const [userName, setUserName] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('')
    const [period, setPeriod] = useState('')

    let navigate = useNavigate();




    async function findCourses(scheduleName) {

        try {
            const courses = await api.post('/course', {
                scheduleName
            })


            setAllCourses(courses.data)
            setPeriod(scheduleName)
        }
        catch (err) {
            alert(`Houve um erro: ${err}`)
        }

    }

    async function createUser(e) {
        e.preventDefault()
        if (!selectedCourse) {
            alert('selecione seu curso')
            return
        }
        if (isNaN(regNumber)) {
            alert('insira um registro válido')
            return
        }
        if (phone.length !== 11) {
            alert('numero inválido')
            return
        }
        if (isNaN(phone)) {
            alert('numero inválido')
            return
        }
        if (birth)
            console.log(birth)
        try {
            await api.post('/user', {
                email, password, userName, regClass,
                regNumber, birth, phone, selectedCourse, period
            })
            navigate("/login");
        }
        catch (err) {
            if (err.response.status === 400) {
                alert('Email ja existente')
            } else {
                alert(`Houve um erro: ${err}`)
            }
        }
    }
    return (
        <>
            <div className='cadastro-cont'>
                <img className="cadastro-Logo" src={Imagem} />
                <h3 className='tittle-cad'>Faça seu cadastro</h3>
                <Form onSubmit={createUser}>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                maxLength={50}
                                onChange={e => setUserName(e.target.value)}
                                required />
                        </Form.Group>
                    </div>
                    <fieldset class=""
                        value={regClass}
                        onChange={e => setRegClass(e.target.value)}>
                        <div class="" >
                            <h6 class="">Tipo de conta:</h6>
                            <div class="" className='cont-tipo'>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="RM" required></input>
                                    <label class="" for="gridRadios1">
                                        Professor
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="RA" required></input>
                                    <label class="" for="gridRadios2">
                                        Aluno
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="GT" required></input>
                                    <label class="" for="gridRadios2">
                                        Convidado Banca
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de registro:</Form.Label>
                            <Form.Control
                                type="text"
                                value={regNumber}
                                maxLength={5}
                                onChange={e => setRegNumber(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Data de nascimento:</Form.Label>
                            <Form.Control
                                type="date"
                                value={birth}
                                min="1950-01-01"
                                max="2006-01-01"
                                onChange={e => setBirth(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control
                                type="text"
                                // as={InputMask}
                                // mask="(99)99999-9999"
                                maxLength={11}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required />
                        </Form.Group>
                    </div>
                    <fieldset
                        class="">
                        <div class="">
                            <h6 class="">Horário de curso:</h6>
                            <div class="" className='cont-tipo'>
                                <div class="" >
                                    <label class="" for="gridRadios2">
                                        <input
                                            class=""
                                            type="radio"
                                            name="Periodo"
                                            id=""
                                            value="Manhã"
                                            onChange={event => findCourses(event.currentTarget.value)}
                                            required />
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            class=""
                                            type="radio"
                                            name="Periodo"
                                            id=""
                                            value="Tarde"
                                            onChange={event => findCourses(event.currentTarget.value)}
                                            required />
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            class=""
                                            type="radio"
                                            name="Periodo"
                                            id=""
                                            value="Noite"
                                            onChange={event => findCourses(event.currentTarget.value)}
                                            required />
                                        Noite
                                    </label>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <h6 class="">Selecione seu curso:</h6>
                    <Form.Select
                        disabled={allCourses.length === 0 ? true : false}
                        onChange={e => setSelectedCourse(e.target.value)}
                    >
                        {allCourses.map(course => {
                            return (
                                <>
                                    <option className='separa-curso'></option>
                                    <option
                                        key={course.id_course}
                                        value={course.id_course}
                                    >
                                        {course.course_name}
                                    </option>
                                </>
                            )
                        })}
                    </Form.Select>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check label=" Li e concordo com os termos de uso" id="box-check" required />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Cadastrar-se
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Index