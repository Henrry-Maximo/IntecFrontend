import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaUserLock } from "react-icons/fa";
import Btn from '../../components/BotaoFlutuante';
import '../../styles/coordFunc.css';



function Index() {
    return (
        <>
            <Btn />
            <div className='pai-coord'>
                <h1 className='textFunc'>ESPAÇO DO COORDENADOR</h1>
                <div className='Card-Group'>
                    <Link to='/Addcurso'>
                        <div className='cont-btn-curso'>
                            <FaClipboardList size={'5em'} className='btn-logo' />
                            <p className='p-coord-curso'>Adicionar Curso</p>
                        </div>
                    </Link>
                    <Link to='/Permuser'>
                        <div className='cont-btn-curso'>
                            <FaUserLock size={'5em'} className='btn-logo' />
                            <p className='p-coord-curso'>Permitir usuário</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Index