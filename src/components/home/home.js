import React, { Component } from 'react';
import logo from '../../assets/img/MLFONDO.jpg'
import './home.css';

var logo2=require('../../assets/img/MLFONDO.jpg')

class Home extends Component {


  render() {
    return (
      <div className="Home-div">
        <div className="Central-div" style ={{ backgroundImage: "url("+logo2+")" } }>
          <div className="Title-div">
          </div>
        </div>
      </div>

      );
  }
}

export default Home;
