import { NavLink } from "react-router-dom";
import './Button.css'

const Button = () => {

    return (
        <div className="botao_link" >
            <NavLink
                to="/Login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Login
            </NavLink>
        </div>
    )

}

export default Button