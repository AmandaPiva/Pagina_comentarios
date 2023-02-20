import Comentario from './Comentarios/Comentarios';
import './App.css';
import { Component } from 'react';

class App extends Component{
  //criando o state
  //Um state é um objeto com as propriedades
  state = {
      //Aqui estamos criando um array no formato de objeto, ele trará os nossos dados dentro de outro objeto
      comentarios: [
        {
          key: "1245",
          nome: "João",
          email:"joao@gmail.com",
          data: new Date(2023, 2, 20),
          mensagem: "Olá, tudo bem?"
        },
        {
          key: "4562",
          nome: "Maria",
          email:"maria@gmail.com",
          data: new Date(2023, 2, 22),
          mensagem: "Tudo sim e com você?"
        }
      ]
  }

  //logo após chamamos o método render() que será responsável por chamar o nosso state e renderizar suas propriedades
  render(){
    
    return( //retorna o nosso state e utilizamos o metodo map para mapearmos o que acontece com cada propriedade do nosso objeto
      <div className="App">
        <h1>Meu projeto</h1>
        
        {this.state.comentarios.map((comentario, indice) =>(  //colocamos no formato de uma arrow function para realizar a operação do map
          <Comentario //trasendo consigo nosso componente pronto e com nossos dados 
            key= {comentario.key}
            nome= {comentario.nome} 
            email= {comentario.email} 
            data = {comentario.data}>
              {comentario.mensagem}
          </Comentario>  
        ))}

      </div>
    )
  }
}

export default App;
