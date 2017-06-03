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
      branches: [
        {name: "Mt. Pleasant" , address: "3160 16th St NW"},
        {name: "MLK Memorial" , address: "901 G St NW"},
        {name: "Petworth", address: "4200 Kansas Ave NW"},
        {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
      ],

    }
  }

  render() {
    return (
      <Router>
        <div>
        <h2>welcome to DC library finder</h2>
        <nav>
          <Link to="#">Where to Read</Link><br />
          <Link to="#">What to Read</Link>
        </nav>
        <main>
          <Route
            render={() => {
              return(
                <SCWhere
                  branches={this.state.branches}
                />
              )
            }}
          />



        </main>
        </div>
      </Router>

    );
  }
}

export default App;
