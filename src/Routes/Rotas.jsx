import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Dicas from "../Pages/Dicas/Dicas.jsx";
import Login from "../Pages/Login/Login.jsx";
import Formulario from "../Pages/Formulario/Formulario.jsx";
import Cadastro from "../Pages/Cadastro/Cadastro.jsx";
import Cuidados from "../Pages/Cuidados/Cuidados.jsx";
import Agendar from "../Pages/Agendar/Agendar.jsx";

const Rotas =() =>{

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dicas' element={<Dicas/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Formulario' element={<Formulario/>}/>
            <Route path='/Cadastro' element={<Cadastro/>}/>
            <Route path='/Cuidados' element={<Cuidados/>}/>
            <Route path='/Agendar' element={<Agendar/>}/>
        </Routes>
    )
}

export default Rotas