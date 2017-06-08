import React, { Component } from 'react'
import SCWhere from '../SCWhere/SCWhere'
import SCWhat from '../SCWhat/SCWhat'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render (){
    return (
      <Router>
        <div>
          <header>
            <h1>Welcome to BookWorm!</h1>
            <h3>Your new fave app for reading resources in the District and beyond.</h3>
          </header>
          <nav>
            <Link to="/where">Where To Read</Link>
            <Link to="/what">What To Read</Link>
          </nav>
          <main>
            <Route
              path=""
              render={() => {
                return(
                  <SCWhere />
                )
              }}
            />
            <Route
              path=""
              render={() => {
                return(
                  <SCWhat />
                )
              }}
            />
          </main>
        </div>
      </Router>

    )
  }
}


export default App
