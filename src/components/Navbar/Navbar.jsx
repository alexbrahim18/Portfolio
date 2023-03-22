import React from "react";
import "./Navbar.css";


const Navbar = () =>{
    
    
    
    
    
    return(
        <nav className="row d-flex justify-content-between  align-items-center p-3 ">
            <div className="col-md-3"><a className="nav__link" href="#tit">Alex Brahim</a></div>
            <ul className="col-md-3 d-flex justify-content-end align-items-end m-0">
                <li><a href="/#contacto" className="mx-2 items nav__link">Contacto</a></li>
                <li><a href="/#portfolio" className="mx-2 items nav__link">Proyectos</a></li>
                <li><a href="/#sobremi" className="mx-2 items nav__link">Sobre mí</a></li>
            </ul>
        </nav>
    )
}


export default Navbar;