import React,{useEffect} from "react";
import useObserver from "../Context/useObserver";
import { Link } from "react-router-dom";
const Container =({link,img,desc,tit})=>{


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
        <div   className=" d-flex justify-content-center">
            <Link to={link} className="m-5 col-3 card"><img  className="img-fluid animated" src={img} alt={tit} /></Link>
            <div className="m-5 col-4 animated">
                <h3 className="sub__tit" ><b>{tit}</b></h3>
                <p className="text__negro ">{desc}</p>
            </div>
        </div>
    )
}


export default Container;