import React from 'react';
import { Link } from 'react-router-dom';
import '../../StyleComponents/btn.css';
import Imagem from '../Imagens/branco.png';
import { BsFillHouseFill } from "react-icons/bs";



function index() {
  return (
    <>
      <div className='cont-btn'>
        <Link to='/' className='btnLink'>
          <BsFillHouseFill size={'3em'}  className='btn-color'/>
        </Link>
        <p className='p-style'>Sair</p>
      </div>

    </>
  )
}

export default index