import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
import '../../StyleComponents/btnCoord.css';



function index() {
  return (
    <>
      {sessionStorage.getItem("useregClass") !== 'RM' || 'GT' &&(
        <div className='cont-btn-coord'>
          <Link to='/CoordFunc'>
            <AiFillSetting size={'3em'} className='btn-color' />
          </Link>
          <p className='p-style'>Coordenador</p>
        </div>
        )}
    </>
  )
}

export default index