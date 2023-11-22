import { NavLink } from "react-router-dom";
import Campotexto from '../../Componentes/Campotexto/Campotexto.jsx'
import './Login.css'

const Login = () => {

    return (
        <div className='div_login' >
            <div className='tela_login' >
                <h2>Login</h2>
                <Campotexto label="Usuário" placeholder="Digite seu usuário" />
                <Campotexto label="Senha" placeholder="Digite sua senha" />
                <div className="botao_login" >
                    <NavLink
                        to="/Formulario"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </div>
                <div className="botao_cadastro" >
                    <NavLink
                        to="/Cadastro"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            }
                    >
                        Cadastrar
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login