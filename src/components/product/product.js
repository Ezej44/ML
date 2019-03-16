import React, { Component } from 'react';
import './product.css';
import  Loader from '../loader/loader'
import HttpService from '../../services/http-service';

const http = new HttpService();
class Product extends Component {

 constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      idProduct: 0,
      product:{},
      cargando:true,
    }
  
 
}
componentDidMount(){
    this.capturarParams();
    //experimiental para mostrar loader hasta obtener mas info
    this.timerHandle = setTimeout(() => this.setState({ cargando: false }), 3500);
  }
 
 //Obtener parametros de ruta y  llamar consuta a servidor
  capturarParams(){
    this.setState({ idProduct: this.props.match.params.id });
    this.pedirInfo(this.props.match.params.id);
}

// consulta al servidor a través de servicio
pedirInfo(id){
    http.getProduct(id).then((data)=> { 
      this.setState({product: data['data']})
    });
  }



  render() {
    return (this.state.product && this.state.product.item ?

      <div className="Princ-div">
       {this.state.cargando === true && (
          <Loader />
          )}
         
        <div className="Product-box">
          <div className="Product-div-image">
            <img className="Img-product" onClick={() => console.log(this.state.product)} src={this.state.product.picture}/>
          </div>
          <div className="Product-div-info">
           <small>{this.state.product.sold_quantity} Vendidos</small>
           <h5 className="Text-left">{this.state.product.item.title}</h5> 
           <h4>$ {this.state.product.item.price.amount} </h4>
           <button className="BComporar" >Comprar</button>
          </div>
          <div className="Product-description">
              <h2>Descripcion del producto</h2>
              <h5>{this.state.product.description}</h5>
          </div>
        </div>
      </div>

      : null

      );
    }
  }

  export default Product;
