import './Home.css'
import foto_Carla from '../../assets/Img/foto_Carla.png'
import Button from '../../Componentes/Button/Button.jsx'
import Cards from '../../Componentes/Cards/Cards.jsx'

const Home = () => {

    return (
        <div>
            <section className='div_1'>
                <div className='primeiro_bloco'>
                    <h2>D-FHIR seu sistema integrado de cuidados com a Diabetes</h2>
                    <p>O objetivo do D-FHIR é melhorar a qualidade e a eficiência dos cuidados com a diabetes, 
                        permitindo que os profissionais de saúde compartilhem informações de forma segura e consistente.
                    </p>
                    <Button/>
                </div>
                <div>
                    <img src={foto_Carla} alt="foto de uma garota amarrando o cabelo" height="650px"/>
                </div>
            </section>
            <Cards/>
        </div>
    )
}

export default Home