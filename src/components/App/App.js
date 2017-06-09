import React, { Component } from 'react'
import BooksContainer from '../containers/BooksContainer.js'
import LocationsContainer from '../containers/LocationsContainer.js'
import axios from 'axios'
import _ from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render (){
    return (
      <Router>
        <div className="content">
          <header className="header">
            <h1 className="title is-1 is-spaced">Welcome to BookWorm!</h1>
            <h3 className="subtitle is-3">Your new fave app for reading resources in the District and beyond.</h3>
            <h3 className="subtitle is-5">- because everyone loves an indoor kid.</h3>

          <nav className="nav">
            <div className="nav-left">
              <Link to="/locations" className="nav-item">Where To Read</Link><br/>
              <Link to="/books" className="nav-item">What To Read</Link>
            </div>
          </nav>
          </header>
          <main className="columns">
            <div className="column is-three-quarters">
              <Route path="/locations" component={LocationsContainer} />
              <Route path="/books" component={BooksContainer} />
              <Route
                path="/*"
                render={() => {
                  return <Redirect to="/search" />
                }}
              />
              <div className="tile is-parent">
                <article className="tile is-child">
                  <figure className="image is-100x150">
                    <img src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/1BNQEOUTR3.jpg"/>
                  </figure>
                </article>
              </div>
            </div>
            <section className="sidebar">
              <div className="tile is-vertical notification is-info">
                <h3 className="subtitle is-3">Resources</h3><br/>
                <a href="#">Get a library card</a><br/>
                <br/>
                <a href="#">Support your local book store</a>
                <br/>

              </div>
            </section>
          </main>
        </div>
      </Router>

    )
  }
}


export default App
