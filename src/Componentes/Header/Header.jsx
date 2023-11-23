import { NavLink } from 'react-router-dom'
import './Header.css'
import Button from '../Button/Button.jsx'
import logo from '../../assets/Logos/LOGO.png'

const Cabecalho = () => {

    return (
        <header>
            <div className='cabecalho'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <img src={logo} alt="Logo do site com nome 'D-FHIR'" height="100px" />
                </NavLink>
                <div className='links' >
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/Dicas"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Dicas
                    </NavLink>
                </div>
                <Button />
            </div>
        </header>
    )

}

export default Cabecalho