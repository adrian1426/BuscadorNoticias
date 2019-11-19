import React,{Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import FormBusqueda from './components/FormBusqueda';

class App extends Component {
  state = {
    noticias:[]
  };

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'business') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=329bd826caaf4fe0a15c4319e251df20`;

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

          <FormBusqueda
           consultarNoticias={this.consultarNoticias}
          />

          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
