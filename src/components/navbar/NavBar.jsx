import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const NavBar = () => {
  const {setTheme} = useContext(ThemeContext);
    return (
      <div className="navbar-container">
        <div>
        <Link to={'/'} className='logo' >Pet Shop</Link>
        </div>

        <div >
            
                
                    <ul className="list-container">

                <li><NavLink to={"/category/Ropa"} className='button'>Ropa</NavLink></li>
            
                <li><NavLink to={"/category/Juguete"} className='button'>Juguete</NavLink></li>

                <li><NavLink to={"/category/Medicamento"} className='button'>Medicamento</NavLink></li>
           
                    </ul>
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 