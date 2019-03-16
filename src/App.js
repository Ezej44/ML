import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';


import './App.css';

import Nav from './components/nav/nav';
import Home from './components/home/home';
import Product from './components/product/product';
import ProductList from './components/product-list/product-list';

class App extends Component {
   constructor(props){
    super(props)
     
  }
  render() {
    return (
      <div>
      <Router>
        <div>
            <Nav/>
           <div className="Princ">
             <Switch>
                <Route path="/product-list/" component={ProductList} />
                <Route path="/product/:id" component={Product} />
                <Route  component={Home} />
              </Switch>
            </div>
        </div>
       </Router>
     </div>

      
    );
  }
}

export default App;
