import React from "react";
import Container from "../Container/Container";
import {mock} from "../mock";




const Portfolio = () =>{

    
    

    return(
        <div>
            <h2 className="tit__color" id="portfolio">Portfolio</h2>
                {mock.map(proyect => <Container key={proyect.key} tit={proyect.titulo} tipo={proyect.tipo} link={proyect.link} img={proyect.img} desc={proyect.descripcion} />)}
        </div>
    )
}


export default Portfolio;