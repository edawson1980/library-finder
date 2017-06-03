import React, { Component } from 'react';
import SCWhere from '../SearchContainers/SCWhere.js'
import SCWhat from '../SearchContainers/SCWhat.js'
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
      sourceBranch: null,
      branches: [
        {name: "Mt. Pleasant" , address: "3160 16th St NW"},
        {name: "MLK Memorial" , address: "901 G St NW"},
        {name: "Petworth", address: "4200 Kansas Ave NW"},
        {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
      ],
      searchTitle: null,
      searchAuthor: null,
      searchISBN: null
    }
  }

  render() {
    return (
      <Router>
        <div>
        <h2>welcome to DC library finder</h2>
        <nav>
          <Link to="/where">Where to Read</Link><br />
          <Link to="/what">What to Read</Link>
        </nav>
        <main>
          <Route
            path="/where"
            render={() => {
              return(
                <SCWhere
                  branches={this.state.branches}
                />
              )
            }}
          />
          <Route
            path="/what"
            render={() => {
              return(
                <SCWhat />
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
