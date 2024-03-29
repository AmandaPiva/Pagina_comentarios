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
      ],

      //nosso novo objeto que armazenará nosso novo comentário vindo dos inputs
      novoComentario: {
          nome: '',
          email: '',
          mensagem: ''
      }
  }

  /*função para o botão adiciona comentário */
  adicionarComentario = evento =>{
      console.log("Adicionando comentário");
      evento.preventDefault();
      
      const addComent = {...this.state.novoComentario, data: new Date()}

      //aqui estamos chamando o state e alterando ele, adicionando usando um Spread Operator, o novo comentário com os dados acima
      this.setState({ //manipulando o estado
        comentarios: [...this.state.comentarios, addComent],
        novoComentario: {nome: '', email: '', mensagem: ''}
      })
  }

  //criando a função que dispara o evento ao digitar nos campos
  digitando = evento => {
      const {name, value} = evento.target;
      this.setState({ novoComentario: {...this.state.novoComentario, [name]: value}}); //manipulando o estado adicionando o valor digitado no input pegando pelo seu value e atribuindo no nosso novo objeto
  }

  //criando a função de excluir comentario
  removerComentario = comentario => {
    let lista = this.state.comentarios; //pegando o comentario e armazenando nesta variável
    lista = lista.filter(c => c !== comentario);

    //atualizando nosso estado
    this.setState({comentarios: lista})
  }

  //logo após chamamos o método render() que será responsável por chamar o nosso state e renderizar suas propriedades
  render(){
    
    return( //retorna o nosso state e utilizamos o metodo map para mapearmos o que acontece com cada propriedade do nosso objeto
      <div className="App">
        <h1>Área de comentários!</h1>
        
        {this.state.comentarios.map((comentario, indice) =>(  //colocamos no formato de uma arrow function para realizar a operação do map
          <Comentario //trasendo consigo nosso componente pronto e com nossos dados 
            key= {comentario.key}
            nome= {comentario.nome} 
            email= {comentario.email} 
            data = {comentario.data}
            onRemove = {this.removerComentario.bind(this, comentario)} /*este método transforma qualquer coisa em uma nova função para que passemos argumentos a ela   */> 
              {comentario.mensagem}
          </Comentario>  
        ))}

        
         <form method='post' onSubmit={this.adicionarComentario} className="NovoComentario"> 
            <h2 class="addComent">Adicionar comentário</h2>
            <div>
              <input required type="text" name= "nome"  value={this.state.novoComentario.nome} onChange={this.digitando} placeholder='Digite seu nome: '/>
            </div>

            <div>
              <input required type="email" name= "email" value={this.state.novoComentario.email} onChange={this.digitando} placeholder='Digite seu email: '/>
            </div>          

            <div>
                <textarea required name="mensagem" value={this.state.novoComentario.mensagem} onChange={this.digitando} rows="4"></textarea>
            </div>
            <button type="submit">Adicionar comentário</button>
          
          </form>  

      </div>
    )
  }
}

export default App;
