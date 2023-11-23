import './Agendar.css'
import { NavLink } from 'react-router-dom'
import Campotexto from '../../Componentes/Campotexto/Campotexto.jsx'

const Agendar = () => {

    return (
        <section>
            <div className='agendamento' >
                <div className='texto_agendamento' >
                    <h2>Obrigado pelas informações</h2>
                    <p>Agende sua consulta com um profissional
                        de saúde<br /> qualificado para obter mais informações
                        sobre como o <br /> Glic pode ajudá-lo a gerenciar seu
                        diabetes.</p>
                </div>
                <div className='formulario_agendamento'>
                    <h2>Agende sua consulta:</h2>
                    <div className='campos_agendamento'>
                        <div>
                            <Campotexto label="Nome:" />
                            <Campotexto label="Unidade Médica:" />
                            <Campotexto label="Data" />
                        </div>
                        <div>
                            <Campotexto label="E-mail" />
                            <Campotexto label="Médico" />
                            <Campotexto label="Horário" />
                        </div>
                    </div>
                    <div className='link_agendamento' >
                        <NavLink
                            to="/Home"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Agendar
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agendar