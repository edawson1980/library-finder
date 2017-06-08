import React, { Component } from 'react'
import SCWhere from '../SCWhere/SCWhere'
import BooksContainer from '../containers/BooksContainer.js'
import axios from 'axios'
import _ from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import './App.css';
// import 'bulma/css/bulma.css'

class App extends Component {
  render (){
    return (
      <Router>
        <div className="content">
          <header>
            <h1>Welcome to BookWorm!</h1>
            <h3>Your new fave app for reading resources in the District and beyond.</h3>

          <nav className="nav">
            <div className="nav-right">
              <Link to="/where" className="nav-item">Where To Read</Link><br/>
              <Link to="/books" className="nav-item">What To Read</Link>
            </div>
          </nav>
          </header>
          <main className="columns">
            <div className="column is-three-quarters">
              {/* <Route path="/where" component={SCWhere} /> */}
              <Route path="/books" component={BooksContainer} />
            </div>
            <div className="sidebar">
              <h3>Resources</h3>
              <a href="#">Get a library card</a><br/>
              <a href="#">Support your local book store</a>

            </div>
          </main>
        </div>
      </Router>

    )
  }
}


export default App
