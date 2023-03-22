import React from "react";
import "./Contacto.css";

const Contacto =()=>{
    return(
        <div className="row">
            <h2 className="tit__color" id="contacto"> Contacto</h2>
            <div className="contacto__icons">
            <a href="https://www.linkedin.com/in/alexanderbrahim/"><i className="fa-brands fa-linkedin-in fa-2x animated"></i></a>
                <a href="https://github.com/alexbrahim18"><i className="fa-brands fa-github fa-2x animated "></i></a>
                <a href="https://www.instagram.com/alex.brahim12/"><i className="fa-brands fa-instagram fa-2x animated"></i></a>
            </div>
            <span className="contacto__mail">alex.brahim18@gmail.com</span>
        </div>
    )
}

export default Contacto;