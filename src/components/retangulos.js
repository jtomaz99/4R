import React from "react"

import retangulo1 from '../assets/Rectangle2.1.svg';
import retangulo2 from '../assets/Rectangle2.2.svg';
import retangulo3 from '../assets/Rectangle2.3.svg';
import retangulo4 from '../assets/Rectangle2.svg';

function Retangulos() {
	return (
	<div>
    <div className="rect1"><img src={retangulo1} alt="RetanguloInferiorEsquerdo" /></div>
    <div className="rect2"><img src={retangulo2} alt="RetanguloSuperiorEsquerdo" /></div>
    <div className="rect3"><img src={retangulo3} alt="RetanguloInferiorDireito" /></div>
    <div className="rect4"><img src={retangulo4} alt="RetanguloSuperiorDireito" /></div>
    </div> 
    )
}

export default Retangulos