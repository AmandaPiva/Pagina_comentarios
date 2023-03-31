import './Comentarios.css'; //importando o css
import React from "react";  //importando o react 
import { formatRelative} from 'date-fns'; //importando a formatação de data do pacote date-fns
import imagemUsuario from './user.png'; //Como importar uma imagem

//Meu primeiro componente
const Comentario = (props) => { //passando o props como argumento -> obrigatorio
    /*Trazendo as propriedades ao DOM */
   return <div className="Comp">
        <img src={imagemUsuario} alt="img" class="avatar"/> 
    
        <div class="conteudo">
            <div class="nome">{props.nome}</div>        
            <div class="email">{props.email}</div>
            <p class="mensagem">{props.children}</p>
            <p class="data">{formatRelative(props.data, new Date())}</p>
            <button onClick={props.onRemove}>x</button>
        </div>
         
    </div>
};

export default Comentario; //exportando meu primeiro componente