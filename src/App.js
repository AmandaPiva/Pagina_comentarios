import Comentario from './Comentarios/Comentarios';
import './App.css';

function App() {
  return (
    /*Apresentando nosso componente novo no componente principal */
    <div className="App">
      <Comentario nome="João" email="joao@gmail.com" data = {new Date()}>
        Olá tudo bem?  
      </Comentario>  

      <Comentario nome="Maria" email="maria@gmail.com" data= {new Date()}>
        Tudo sim, e com você?  
      </Comentario>  
    </div>
  );
}

export default App;
