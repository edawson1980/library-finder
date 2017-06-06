import React, { Component } from 'react';
import axios from 'axios'


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
        {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
        {name: "Bellevue" , address: "115 Atlantic St SW"},
        {name: "Benning" , address: "3935 Benning Rd NE"},
        {name: "Capitol View" , address: "5001 Central Ave SE"},
        {name: "Chevy Chase" , address: "5625 Connecticut Ave NW"},
        {name: "Cleveland Park" , address: "4340 Connecticut Ave NW"},
        {name: "Deanwood" , address: "1350 49th St NE"},
        {name: "Francis A. Gregory" , address: "3660 Alabama Ave SE"},
        {name: "Georgetown" , address: "3260 R St NW"},
        {name: "Lamond-Riggs" , address: "5401 South Dakota Ave NE"},
        {name: "Library Express" , address: "1990 K St NW"},
        {name: "MLK Memorial" , address: "901 G St NW"},
        {name: "Mt. Pleasant" , address: "3160 16th St NW"},
        {name: "Northeast" , address: "330 7th St NE"},
        {name: "Northwest One" , address: "155 L St NW"},
        {name: "Palisades" , address: "4901 V St NW"},
        {name: "Parklands-Turner" , address: "1547 Alabama Ave SE"},
        {name: "Petworth", address: "4200 Kansas Ave NW"},
        {name: "Rosedale" , address: "1701 Gales St NE"},
        {name: "Shaw" , address: "1630 7th St NW"},
        {name: "Shepherd Park" , address: "7420 Georgia Ave NW"},
        {name: "Southeast" , address: "403 7th St SE"},
        {name: "Southwest" , address: "900 Wesley Place SW"},
        {name: "Takoma Park" , address: "416 Cedar St NW"},
        {name: "Tenley-Friendship" , address: "4450 Wisconsin Ave NW"},
        {name: "West End" , address: "2522 Virginia Ave NW"},
        {name: "Woodridge" , address: "1801 Hamlin St NE"}

      ],
    
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
