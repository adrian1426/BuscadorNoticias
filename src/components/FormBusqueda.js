import React,{Component} from 'react';
import PropTypes from 'prop-types';

class FormBusqueda extends Component{
    state={
        categoria:'business'
    };

    cambiarCategoria = e =>{
        this.setState({
            categoria: e.target.value
        },()=>{
            //pasarlo a la pagina principal App
            this.props.consultarNoticias(this.state.categoria);
        });
    }

    render(){
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoria</h2>

                        <div className="input-field col s12">
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option value='business'>Negocios</option>
                                <option value='entertainment'>Entretenimiento</option>
                                <option value='general'>General</option>
                                <option value='health'>Salud</option>
                                <option value='science'>Ciencia</option>
                                <option value='sports'>Deportes</option>
                                <option value='technology'>Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

FormBusqueda.propTypes ={
 consultarNoticias : PropTypes.func.isRequired
}

export default FormBusqueda;