import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './product-list.css';

import  Loader from '../loader/loader'

import HttpService from '../../services/http-service';

const http = new HttpService();

class ProductList extends Component {
  constructor(props){
    super(props);
    this.routeChange = this.routeChange.bind(this); 
    this.pedirInfo =  this.pedirInfo.bind(this)
    
    this.state = {
     searcParam: '',
     products:[],
     cargando:true
     };

    
}
//actualizar al cambiar los parametros de url (nueva busqueda)
componentWillReceiveProps(newProps){
   const query = new URLSearchParams(newProps.location.search);
   const token = query.get('q')
   this.setState({ searcParam: token });;
   this.pedirInfo(token); 
 }


 componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get('q')
    this.setState({ searcParam: token });;
    this.pedirInfo(token); 
    //experimiental para mostrar loader hasta obtener mas info
    this.timerHandle = setTimeout(() => this.setState({ cargando: false }), 3500);
  }


// consulta al servidor a través de servicio
  pedirInfo(params){
    http.getProducts(params).then((data)=> { 
      this.setState({products: data['data'].items})   
    });
  }

//redireccionar al producto seleccionado
  routeChange(id) {
    this.props.history.push("/product/" + id);
  }


render() {
   const text = this.state.products.map((item) =>{
      return (
         <div className="Product-list-box" key={item.id}>
            <div className="Product-list-div-image">
               <img onClick={() => this.routeChange(item.id)} className="Img-product-list" src={item.picture}/>
            </div>
          <div className="Product-list-div-info">
            <small className="FR">{item.seller_address}</small>
            <h4>$ {item.price.amount}</h4> 
            <h4>{item.title}</h4>
          </div>
        </div>
          )
    }); 

  return (
    <div className="Princ-list-div">
       {this.state.cargando === true && (
          <Loader />
        )}
      <div> {text}</div>      
    </div>

    )
  }
}

export default ProductList;
