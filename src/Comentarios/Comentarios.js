import './Comentarios.css' //importando o css
import React from "react";  //importando o react 

//Meu primeiro componente
const Comentario = (props) => ( //passando o props como argumento -> obrigatorio
    /*Passando as propriedades ao DOM */
    <div className="Comp">
        <div>{props.nome}</div>
        <div>{props.email}</div>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
);

export default Comentario; //exportando meu primeiro componente