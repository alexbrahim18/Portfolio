import React,{useEffect} from "react";
import alex1 from "../../img/alex2.png";
import "./SobreMi.css";
import "animate.css";
import useObserver from "../Context/useObserver";



const SobreMi = ()=>{

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
        <div className="m-5">
            <h2 className="tit__color m-5" id="sobremi">Un poco sobre mí</h2>
            <div className="row d-flex justify-content-evenly align-items-center mx-5">
                <div className="col-3 animated">
                    <img src={alex1} alt="" className="img-fluid img__sobremi" />
                </div>
                <div className="col-3 animated animate__delay-0.1s">
                    <h2 className="sub__tit"><b>Me Dicen Alex,</b></h2>
                    <p className="text__negro">Soy estudiante de ciencias ecónomicas, que durante la pandemia descubrioel mundo del desarrollo y la programación, despertando una gran pasion por el mismo, y el sueño de en algun momento poder trabajar de ello. Actualmente me encuentro estudiando Backend.</p>
                </div>
                </div>
        </div>
    )
}

export default SobreMi ;