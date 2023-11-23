import { NavLink } from 'react-router-dom';
import Campotexto from '../../Componentes/Campotexto/Campotexto';
import './Formulario.css'

const Formulario = () =>{

    return(
        <div className='formulario' >
            <div className='tela_formulario' >
                    <h1>Cadastro:</h1>
                    <Campotexto label="Nome:" placeholder="..." />
                    <Campotexto label="Idade:" placeholder="..." />
                    <Campotexto label="Sexo:" placeholder="..." />
                    <Campotexto label="Histórico Médico:" placeholder="..." />
                    <h2>Sintomas:</h2>
                    <Campotexto label="Sede excessiva:" placeholder="..." />
                    <Campotexto label="Fome excessiva:" placeholder="..." />
                    <Campotexto label="perda de peso inxeplicada:" placeholder="..." />
                    <h2>Fatores de risco:</h2>
                    <Campotexto label="Histórico familiar de diabetes:" placeholder="... " />
                    <Campotexto label="Sedentarismo:" placeholder="... " />
                    <div className='botao_enviar' >
                        <NavLink
                            to="/Cuidados"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Enviar
                        </NavLink>
                    </div>
            </div>
        </div>
    )
}

export default Formulario