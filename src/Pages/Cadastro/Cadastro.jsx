import { NavLink } from "react-router-dom";
import Campotexto from "../../Componentes/Campotexto/Campotexto";
import './Cadastro.css'

const Cadastro = () =>{

    return(
        <section className='cadastro' >
            <div className='tela_cadastro' >
                <h1>Cadastro</h1>
                <Campotexto label="Nome:" placeholder="..." />
                <Campotexto label="Idade:" placeholder="..." />
                <Campotexto label="Nome de usuário:" placeholder="..." />
                <Campotexto label="Senha:" placeholder="..." />
                <Campotexto label="Confirmar Senha:" placeholder="..." />
                <div className='botao_cadastrar' >
                    <NavLink
                        to="/Home"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Criar
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Cadastro