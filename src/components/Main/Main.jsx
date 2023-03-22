import React, { useEffect } from "react";
import foto1 from "../../img/alex2.png";
import "./Main.css";
import "animate.css";
import useObserver from "../Context/useObserver";
import { Link } from "react-router-dom";





const Main = () =>{

    const [observer, setElements, entries] = useObserver({
        threshold:0.1,
        root:null,
    });

    useEffect (()=>{
        const elementos = document.querySelectorAll(".animated")
        setElements(elementos);
    },[setElements]);  
    
    useEffect(()=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                const animatedElement = entry.target;
                animatedElement.classList.add("animado");
                animatedElement.classList.remove("oculto");
            }else{
                const animatedElement = entry.target;
                animatedElement.classList.remove("animado");
                animatedElement.classList.add("oculto");
            }
        })
    },[entries,observer]);
    
    
    


return(
    <div className="row d-flex justify-content-around main m-5 ">
        <h1  className="col-4 text-start princ__tit animated align-self-center" id="tit">¡Hola!
            <br />
            Soy <span className="name">Alex,</span> 
            <br />
            Frontend Dev. Jr.</h1>
            <div className="col-4 animated foto align-self-center"><img src={foto1} alt="" className="img-fluid main__img " /></div>
            <div className="contacto__icons justify-self-start align-self-center">
                <Link to="https://www.linkedin.com/in/alexanderbrahim/"><i className="fa-brands fa-linkedin-in fa-2x animated"></i></Link>
                <Link to="https://github.com/alexbrahim18"><i className="fa-brands fa-github fa-2x animated "></i></Link>
                <Link to="https://www.instagram.com/alex.brahim12/"><i className="fa-brands fa-instagram fa-2x animated"></i></Link>
            </div>
    </div>
)

}


export default Main;
    