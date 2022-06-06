import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi';
import './Last.css'
import { Link } from 'react-router-dom';

const Last = (props) => {
  return (
    <div className='a'>
        <div className='matna'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be</div>
        <div className='bb'><Link to="/another"><button>Another page</button></Link></div>
        <div><FiArrowLeftCircle className='lefta' onClick={props.left} /></div>
    </div>
  )
}

export default Last