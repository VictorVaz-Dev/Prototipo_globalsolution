import './Dicas.css'
import '../../Pages/Home/Home.css'
import React from 'react'
import Cards from '../../Componentes/Cards/Cards'
import prevencao from '../../assets/Img/img_dicas/prevencao.png'
import diabete1 from '../../assets/Img/img_cards/diabete1.png'
import diabete2 from '../../assets/Img/img_cards/diabete2.png'
import diabete3 from '../../assets/Img/img_cards/diabete3.png'
import diabete4 from '../../assets/Img/img_cards/diabete4.png'

const Dicas = () => {

    return(
        <section>
            <div className='bloco_diabetes' >
                <div className='quarto_bloco' >
                    <h2>Prevenção da diabetes<br/>O que você pode fazer:</h2>
                    <p className='paragrafo' >
                    A diabetes é uma doença crônica que afeta o metabolismo 
                    da glicose. Quando uma pessoa tem diabetes, o corpo não 
                    consegue produzir insulina ou não usa a insulina de forma 
                    eficaz. A insulina é um hormônio que ajuda o corpo a usar 
                    a glicose como energia.
                    </p>
                    <p className='paragrafo' >
                    <b>Mantenha um peso saudável</b> O excesso de peso ou a obesidade
                    são fatores de risco para a diabetes tipo 2.
                    </p>
                    <p className='paragrafo' >
                    <b>Faça exercícios regularmente</b> O exercício ajuda a manter o 
                    peso saudável e melhora a sensibilidade à insulina.
                    </p>
                    <p className='paragrafo' > 
                    <b>Alimente-se de forma saudável</b> Uma dieta saudável inclui 
                    muitas frutas, vegetais, grãos integrais e proteínas magras.
                    </p>
                    <p className='paragrafo' >
                    <b>Controle o colesterol e a pressão arterial</b> O colesterol a
                    lto e a pressão alta também são fatores de risco para a 
                    diabetes tipo 2.  
                    </p>
                </div>
                <div>
                    <img src={prevencao} alt="imagem com diversas" height="750px" />
                </div>
            </div>
            <div>
                <div className='card_diabetes'>
                    <h2 className='titulo_diabetes' >Como identificar os diferentes tipos de diabetes</h2>
                    <div className='conjunto_diabetes'>
                        <Cards src={diabete1} alt="Diabetes tipo 1" width="290px" h2="Diabetes tipo 1:" p="É uma doença autoimune, o que significa que o corpo ataca e destrói as células do pâncreas que produzem insulina. A insulina é um hormônio que ajuda o corpo a usar a glicose como energia."/>
                        <Cards src={diabete2} alt="Diabetes tipo 2" width="290px" h2="Diabetes tipo 2:" p="É o tipo mais comum de diabetes. É causado pela combinação de resistência à insulina e deficiência de insulina. A resistência à insulina ocorre quando as células do corpo não respondem adequadamente à insulina."/>
                        <Cards src={diabete3} alt="Diabetes tipo gestacional" width="290px" h2="Diabetes gestacional:" p="É um tipo de diabetes que ocorre durante a gravidez. É causada por uma combinação de fatores, incluindo resistência à insulina e aumento da produção de hormônios pelo corpo da mulher durante a gravidez."/>
                        <Cards src={diabete4} alt="Diabetes outro tipo" width="290px" h2="Outros tipos de diabetes:" p="Existem outros tipos de diabetes menos comuns, como diabetes tipo 3c, diabetes monogênico e diabetes secundária."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dicas