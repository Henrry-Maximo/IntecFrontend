import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../StyleComponents/ModalConsultarCurso.css';
import api from '../../config/configApi.js';
import Img from '../../components/Imagens/branco.png';

Modal.setAppElement('#root')

function Index(isOpen) {


    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('')
    const [period, setPeriod] = useState('')

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


    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    data-backdrop='static'
                    className="modal-Consultar"
                >
                    <h2>Consulta de curso adicionado</h2>
                    <div className="row">
                        <form className="col s12">
                            <div>
                                <div className="cont-modal-consultar">
                                    <fieldset
                                        class="">
                                        <div class="">
                                            <h6 className='label-periodo'>Período do curso:</h6>
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
                                                        />
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
                                                        />
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
                                                        />
                                                        Noite
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </fieldset>
                                    <h6 class="">Cursos adicionados:</h6>
                                    <Form.Select
                                        disabled={allCourses.length === 0 ? true : false}
                                        onChange={e => setSelectedCourse(e.target.value)}
                                    >
                                        {allCourses.map(course => {
                                            return (
                                                <>
                                                    <option className='separa-curso-consulta'></option>
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
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='btn-sair-consulta'></div>
                    <Button
                        variant='danger'
                        onClick={() => { window.location.reload(true) }}
                    >Sair</Button>
                </Modal>
            </div>
        </>
    )
}

export default Index