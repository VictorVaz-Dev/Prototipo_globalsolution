import './Home.css'
import React from 'react'
import imagem1 from '../../assets/Img/img_cards/imagem01.jpg'
import imagem2 from '../../assets/Img/img_cards/imagem02.jpg'
import imagem3 from '../../assets/Img/img_cards/imagem03.jpg'
import imagem4 from '../../assets/Img/img_cards/imagem04.jpg'
import relacionamentos from '../../assets/Img/relacionamentos.png'
import foto_Carla from '../../assets/Img/foto_Carla.jpeg'
import Button from '../../Componentes/Button/Button.jsx'
import Cards from '../../Componentes/Cards/Cards.jsx'

const Home = () => {

    return (
        <div>
            <section className='div_1'>
                <div className='primeiro_bloco'>
                    <h2>Glic seu sistema integrado de cuidados com a Diabetes</h2>
                    <p>O aplicativo Glic é uma ferramenta digital que pode ajudar
                        pessoas com diabetes a controlar sua doença de forma mais
                        eficaz. O Glic oferece uma variedade de recursos que podem
                        ajudar os usuários a rastrear seus níveis de glicose, fazer
                        escolhas alimentares saudáveis, manter um cronograma de tratamento
                        consistente e se manterem ativos.
                    </p>
                    <Button/>
                </div>
                <div>
                    <img src={foto_Carla} alt="foto de uma garota amarrando o cabelo" height="650px" />
                </div>
            </section>
            <section className='section_card'>
                <h2>Utilização de Glic no tratamento de diabetes</h2>
                <div className='conjunto_cards' >
                    <Cards src={imagem1} alt="imagem de uma maquina analisando uma gota de sangue" width="290px" h2="Rastreamento avançado de glicose:" p="Nosso aplicativo permite que os usuários rastreiem seus níveis de glicose com mais facilidade e precisão. Isso pode ajudar os usuários a identificar tendências e padrões em seus níveis de glicose, o que pode ser útil para tomar decisões sobre seu tratamento."/>
                    <Cards src={imagem2} alt="imagem de um aperto de mãos" width="290px" h2="Melhoria da eficiência do atendimento ao diabetes" p="O Glic pode ser usado para automatizar tarefas administrativas relacionadas ao atendimento ao diabetes. Isso pode liberar tempo para os profissionais de saúde se concentrarem no cuidado dos pacientes."/>
                    <Cards src={imagem3} alt="Um individuo amarrando o tênis" width="290px" h2="Integração de atividade física" p="Aplicativos de diabetes podem fornecer recursos para rastrear a atividade física e fornecer sugestões de exercícios adequados para pessoas com diabetes. Isso pode ajudar os usuários a se manterem ativos, o que é importante para o controle da diabetes."/>
                    <Cards src={imagem4} alt="Diversos icones indicando que o glic possui uma diversidade de dispositivos" width="290px" h2="Integração de disposiivos" p="O Glic integra dispositivos de monitoramento de glicose e outros dispositivos de saúde conectados. Isso pode tornar mais fácil para os usuários acompanhar seu tratamento e receber alertas importantes."/>
                </div>
            </section>
            <section className='div_3' >
                <div className='terceiro_bloco' >
                    <h2>Glic: um aplicativo para melhorar o controle do diabetes</h2>
                    <p className='paragrafo' >
                        <b>Rastreamento avançado de glicose:</b> O Glic oferece um rastreamento
                         avançado de glicose que permite aos usuários registrar seus níveis 
                         de glicose com facilidade e precisão. O aplicativo também fornece 
                         gráficos de tendências, análises estatísticas e insights personalizados
                          para ajudar os usuários a entender melhor seus padrões de glicose e 
                          identificar tendências.
                    </p>
                    <p className='paragrafo' >
                        <b>Pesquisa sobre diabetes:</b> O Glic pode ser usado para coletar dados sobre o 
                        diabetes de uma maneira padronizada. Isso pode ajudar os pesquisadores a 
                        entender melhor a doença e desenvolver novos tratamentos.
                    </p>
                    <p className='paragrafo' >
                        O paciente com diabetes pode usar uma aplicação Web Glic para <b className='texto_azul' >rastrear níveis de 
                        açúcar no sangue.</b> O aplicativo pode enviar dados sobre os níveis de açúcar no 
                        sangue do paciente para o médico, que pode usá-los para monitorar o progresso do paciente.
                    </p>
                </div>
                <div>
                    <img src={relacionamentos} alt="uma imagem com diversos procedimentos médicos" height="600px" />
                </div>
            </section>
        </div>
    )
}

export default Home