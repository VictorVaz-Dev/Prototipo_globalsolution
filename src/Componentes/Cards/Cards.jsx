import './Cards.css'
import imagem1 from '../../assets/Img/img_segundo_bloco/imagem01.jpg'
import imagem2 from '../../assets/Img/img_segundo_bloco/imagem02.jpg'
import imagem3 from '../../assets/Img/img_segundo_bloco/imagem03.jpg'
import imagem4 from '../../assets/Img/img_segundo_bloco/imagem04.jpg'

const Cards = () => {

    return (
        <section className='div_2'>
            <h2>Utilização de FHIR no tratamento de diabetes</h2>
            <div className='segundo_bloco'>
                <div>
                    <img src={imagem1} alt="Maquina de colher sangue"/>
                    <h2>Autogestão do diabetes:</h2>
                    <p>FHIR pode ser usado para fornecer informações sobre o 
                    diabetes aos pacientes em um formato fácil de entender. Isso
                    pode ajudar os pacientes a gerenciar sua condição de forma 
                    mais eficaz.</p>
                </div>
                <div className='segunda_imagem' >
                    <img src={imagem2} alt=""/>
                    <h2>Melhoria da eficiência do atendimento ao diabetes:</h2>
                    <p>O FHIR pode ser usado para automatizar tarefas 
                    administrativas relacionadas ao atendimento ao diabetes. 
                    Isso pode liberar tempo para os profissionais de saúde 
                    se concentrarem no cuidado dos pacientes.</p>
                </div>
                <div>
                    <img src={imagem3} alt=""/>
                    <h2>Melhoria da qualidade do atendimento ao diabetes:</h2>
                    <p>O FHIR pode ajudar a melhorar a qualidade do atendimento
                    ao diabetes, fornecendo informações precisas e atualizadas 
                    aos profissionais de saúde.</p>
                </div>
                <div>
                    <img src={imagem4} alt=""/>
                    <h2>Promoção da inovação no atendimento ao diabetes:</h2>
                    <p>O FHIR pode ajudar a promover a inovação no atendimento
                    ao diabetes, fornecendo um padrão aberto para o desenvolvimento 
                    de novos produtos e serviços.</p>
                </div>
            </div>
        </section>
    )
}

export default Cards