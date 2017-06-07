import React, { Component } from 'react'
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
      <div>
        <h1>Welcome to BookWorm!</h1>
        <h3>Your new fave app for reading resources in the District and beyond.</h3>
      </div>
    )
  }
}


export default App
