import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import CV from '.././cv/BENETELA.pdf'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='Header'>
            <Link to='/'>
                <h1>
                    ⚡ Bene Tesla ⚡
                </h1>
            </Link>
            <ul className={click ? "nav-links active" : "nav-links"}>
                <li className='ICONES'>
                    <Link to='/'>
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li className='ICONES'>
                    <Link to='/project'>
                        <i className="fas fa-project-diagram"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <i className="fas fa-user"></i>
                    </Link>
                </li>
                <li className='ICONES'>
                    <Link to='/contact'>
                        <i className="fas fa-envelope"></i>
                    </Link>
                </li>

                <li className='nav-links__resume'>
                    <a href={CV} target="_blank" rel="noreferrer">
                        <i className="fas fa-file"></i>
                    </a>
                </li>

            </ul>
            <div className='hambuger' onClick={handleClick}>
                {click ? (
                    <FaTimes
                        size={30}
                        style={{ color: 'white' }}
                        
                    />
                ) : (
                    <FaBars
                        size={30}
                        style={{ color: 'white' }}
                    />
                )
                }
            </div>
        </div>
    )
}

export default Navbar