import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <>
            <Link to={`home`}> Home </Link>
            <Link to={`login`}></Link>
            <Link to={`cadastro`}> Cadastro </Link>
        </>
    )
}

export default NavBar