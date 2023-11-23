import './Cuidados.css'
import { NavLink } from 'react-router-dom'
import cuidados1 from '../../assets/Img/img_cuidados/cuidados1.png'

const Cuidados = () => {

    return (

        <section>
            <div className='primeiro_bloco_cuidados'>
                <div>
                    <h2>Olá...</h2>
                    <p>Abaixo você encontrará algumas dicas de como
                        cuidar melhor da sua saúde baseado em suas
                        informações do formulario.</p>
                </div>
                <div>
                    <img src={cuidados1} height="400px"/>
                </div>
            </div>
            <div className='agendar_consulta'>
                <div>
                    <p>Aproveite para agendar uma consulta!</p>
                </div>
                <div className='links_agendar_consulta' >
                    <NavLink
                        to="/Agendar"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Agendar
                    </NavLink>
                    <NavLink
                        to="/Dicas"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Bem-estar
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default Cuidados