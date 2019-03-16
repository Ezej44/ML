import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo_ML.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import './nav.css';


library.add(faSearch)
class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchParam: '',
      redirect: false,
      redirect_inicio: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

//Funcion de busqueda por tecla enter
  handleKeyPress = (event) => {
    if(event.key == 'Enter' && this.state.searchParam ){
      this.setState({
        redirect: true,
        redirect_inicio: false
      });
    }
  }

//Actualizar el parametro de busqueda en cada cambio de input
  handleChange({ target }) {
    this.setState({
      searchParam: target.value,
      redirect: false,
      redirect_inicio: false
    });

  }

  redirectInicio(){
    this.setState({
         redirect_inicio: true
    });
  }


  render() {

    return (
      <nav className="Nav">
        <div className="Div-logo Text-center">
          <img className="Img-logo" onClick={() => this.redirectInicio()} src={logo} alt="logo"/>
        </div>
        <div className="Input-box">
          <input placeholder="Buscar articulos"
          type="text" className="Input-search"
          value={ this.state.searchParam }
          onKeyPress={this.handleKeyPress}
          onChange={ this.handleChange } />
          <Link  to={"/product-list/?q=" + this.state.searchParam} > <FontAwesomeIcon icon="search" /></Link>
        </div>

        {this.state.redirect  && (
          <Redirect to={ '/product-list/?q=' + this.state.searchParam} />
          )}

        {this.state.redirect_inicio  && (
          <Redirect to='/inicio/' />
          )}

      </nav>

      );

    }
  }

  export default Nav;
