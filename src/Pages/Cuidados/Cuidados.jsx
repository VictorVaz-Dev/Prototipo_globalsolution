import './Cuidados.css'
import { NavLink } from 'react-router-dom'
import cuidados1 from '../../assets/Img/img_cuidados/cuidados1.png'
import grafico1 from '../../assets/Img/img_cuidados/grafico_cuidados.jpeg'

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
                    <img src={cuidados1} height="400px" alt="imagem animada com um doutor" />
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
                        to="/Monitoramento"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Bem-estar
                    </NavLink>
                </div>

            </div>

            <div className='area_saude'>
                <div>
                    <img src={grafico1} alt="graficos de saude"/>
                </div>
                <div className='paragrafo_saude' >
                    <h2>Sua saúde é mais importante</h2>
                    <p>&nbsp;Com base nas informações detalhadas no formulário, 
                    desenvolvemos um sistema abrangente de monitoramento 
                    personalizado, projetado especificamente para atender 
                    às suas necessidades de saúde. <br/>&nbsp;Nosso inovador gráfico 
                    consolidado oferece uma visão clara e acessível de 
                    todas as suas informações de saúde, proporcionando 
                    uma compreensão abrangente do seu bem-estar.<br/>&nbsp;Navegue 
                    pelas diversas categorias e métricas de maneira 
                    intuitiva, permitindo que você acompanhe seu progresso
                    ao longo do tempo.
                     
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default Cuidados