import './Monitoramento.css'
import dispositivos from '../../assets/Img/img_monitoramento/img_dispositivos.png'
import relatos from '../../assets/Img/img_monitoramento/img_relatos.png'
import usuario from '../../assets/Img/img_monitoramento/usuarios/Usuario.jpeg'

const Monitoramento = () =>{

    return(
        <section>
            <div className='area_dispositivos'>
                <div className='paragrafo_dispositivos' >
                    <h2>Monitoramento contínuo da glicose com aparelhos CGM</h2>
                    <p>O aplicativo Glic é uma ferramenta de apoio ao 
                    gerenciamento da diabetes que permite o 
                    monitoramento contínuo da glicose (CGM) por meio 
                    de aparelhos CGM. O aplicativo é gratuito e está 
                    disponível para dispositivos Android e iOS.</p>
                </div>
                <div className='img_dispositivos'>
                    <img src={dispositivos} alt="dispositivos que podem baixar o aplicativo glic" height="440px" />
                </div>
            </div>
            <div className='area_duvidas'>
                <div className='card_duvidas' >
                    <h2>O que é CGM?</h2>
                    <p>CGM é a sigla para Continuous Glucose Monitoring, 
                    que significa monitoramento contínuo da glicose. É uma
                    tecnologia que permite medir a glicose no sangue a 
                    cada poucos minutos, durante 24 horas por dia.</p>
                </div>
                <div className='card_duvidas' >
                    <h2>Como o aplicativo funciona?</h2>
                    <p>O aplicativo Glic funciona em conjunto com um 
                    aparelho CGM. Para usar o aplicativo, é necessário 
                    conectar o aparelho CGM ao dispositivo móvel.</p>
                </div>
                <div className='card_duvidas' >
                    <h2>Benefícios do CGM</h2>
                    <ul>
                        <li>Melhor controle glicêmico</li>
                        <li>Redução do risco de hipoglicemia e hiperglicemia</li>
                        <li>Melhor qualidade de vida</li>
                    </ul>
                </div>
            </div>
            <div className='area_relatos'>
                <div className='realatos_cards' >
                    <div className='card_relatos'>
                        <div className='titulo_relatos' >
                            <img src={usuario} alt="imagem de usuario"/>
                            <h5>Ana, 35 anos, com diabetes tipo 1:</h5>
                        </div>
                        <p>O CGM mudou minha vida. Antes, eu tinha 
                        dificuldade em controlar a glicose, e vivia com 
                        medo de hipoglicemia. Com o CGM, consigo ver meus 
                        níveis de glicose em tempo real.</p>
                    </div>
                    
                    <div className='card_relatos'>
                        <div className='titulo_relatos' >
                            <img src={usuario} alt="imagem de usuario"/>
                            <h5>João, 50 anos, com diabetes tipo 2:</h5>
                        </div>
                        <p>O CGM me ajudou a entender melhor como a 
                        diabetes afeta meu corpo. Com os dados do CGM, 
                        consigo identificar padrões na glicose, e isso me 
                        ajuda a fazer mudanças no estilo de vida para 
                        melhorar o controle da glicose.</p>
                    </div>
                    
                    <div className='card_relatos'>
                        <div className='titulo_relatos' >
                            <img src={usuario} alt="imagem de usuario"/>
                            <h5>Maria, 20 anos, com diabetes gestacional:</h5>
                        </div>
                        <p>"O CGM foi essencial para me ajudar a controlar
                        a diabetes durante a gravidez. Com o CGM, consegui
                        manter a glicose mais estável, e isso ajudou a 
                        proteger meu bebê de complicações. </p>
                    </div>
                </div>
                <div className='banner_relatos'>
                    <img src={relatos} alt="Uma senhora utilizando o aplicativo glic" />
                </div>
            </div>
        </section>
    )
}

export default Monitoramento