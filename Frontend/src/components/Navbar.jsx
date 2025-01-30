import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()    
  return (
    <nav className='navbar'> 
        {/* <ul className='navul'>
            <li className='navli' onClick={() => navigate('/create')}>Mern</li>
            <li className='navli' onClick={() => navigate('/update')}>AddNew</li>
            <li className='navli' onClick={() => navigate('/all')}>AllItems</li>   
        </ul> */}

        <ul className='navul'>
            <li className='navli'>
                <Link to='/' className='link'>Mern</Link>
            </li>

            <li className='navli'>
                <Link to='/create' className='link'>Add_Post</Link>
            </li>

            <li className='navli'>
                <Link to='/all' className='link'>All_Post</Link>
            </li>

        </ul>

    </nav>
  )
}

export default Navbar