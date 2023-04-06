import { Link } from '@remix-run/react'
import React from 'react'
import wLogo from '../../public/img/logo-black2.jpg'
import Navigation from './navigation'
const Header = () => {

    return (
        <header className='header'>
            <div className="contenedor barra">
                <Link className="logo" to='/'>
                    <img src={wLogo} alt="Logo" className='logo'/>
                    
                </Link>
                
                <Navigation />
            </div>
        </header>
    )
}

export default Header