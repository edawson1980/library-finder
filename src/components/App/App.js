import React, { Component } from 'react';
import SCWhere from '../SearchContainers/SCWhere.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import './App.css';



class App extends Component {
  constructor (){
    super()
    this.state = {
      sourcelibrary: null,
      libraries: [
        {name: "Mt. Pleasant" , address: "3160 16th St NW"},
        {name: "MLK Memorial" , address: "901 G St NW"},
        {name: "Petworth", address: "4200 Kansas Ave NW"},
        {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
      ],

    }
  }

  render() {
    return (
      <div>
      <h2>welcome to DC library finder</h2>



        <p>Please select a branch</p>
        <select>
          {this.libraries}
        </select>
      </div>
    );
  }
}

export default App;
