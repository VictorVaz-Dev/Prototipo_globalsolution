import './Button.css'
import logo_button from '../../assets/Logos/Logo_button.png'

const Button = () =>{

    return(
        <div>
            <button><img src={logo_button} alt="logo para o botao" height="30px"/>Login</button>
        </div>
    )

}

export default Button