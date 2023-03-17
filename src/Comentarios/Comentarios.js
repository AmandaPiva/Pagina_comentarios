import './Comentarios.css' //importando o css
import React from "react";  //importando o react 

//Meu primeiro componente
const Comentario = (props) => { //passando o props como argumento -> obrigatorio
    /*Trazendo as propriedades ao DOM */
   return <div className="Comp">
        <div class="nome">{props.nome}</div>
        <div class="email">{props.email}</div>
        <p class="mensagem">{props.children}</p>
        <p class="data">{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button> 
    </div>
};

export default Comentario; //exportando meu primeiro componente