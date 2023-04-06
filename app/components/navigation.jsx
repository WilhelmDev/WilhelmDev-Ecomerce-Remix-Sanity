import { useLocation, Link} from '@remix-run/react'
import car from '../../public/img/carrito.png'
const Navigation = () => {
    const location = useLocation()
    return (
        <nav className="navegacion">
            <Link to='/' className={location.pathname === '/' ? 'active' : ''} >
                Inicio
            </Link>
            <Link to='/rum' className={location.pathname === '/rum' ? 'active' : ''} >
                Ron
            </Link>
            <Link to='/about' className={location.pathname === '/about' ? 'active' : ''} >
                Nosotros
            </Link>
            <Link to='/checkout'>
                <img src={car} alt="carrito" />
            </Link>
        </nav>
    )
}

export default Navigation