import React,{Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias:[]
  };

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=329bd826caaf4fe0a15c4319e251df20`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }
 
  render() {
    return (
      <Fragment>
        <Header 
          titulo='Buscador de Noticias AHH'
        />

        <div className="container white contenedor-noticias">
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
