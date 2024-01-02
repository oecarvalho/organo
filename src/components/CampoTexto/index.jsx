import { useState } from "react";

const CampoTexto = (props)=> {

    const [valor, setValor] = useState('');

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campo-texto">
            <label >{props.label}</label>
            <input
                value = {props.valor}
                onChange={aoDigitado} 
                required = {props.obrigatorio} 
                type="text" 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto;