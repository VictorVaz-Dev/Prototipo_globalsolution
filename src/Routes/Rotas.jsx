import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";

const Rotas =() =>{

    return(
        <Routes>
            <Route path='/Home' element={<Home/>}/>
        </Routes>
    )
}

export default Rotas