import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import SCWhere from '../SearchContainers/SCWhere.js'
import SCWhat from '../SearchContainers/SCWhat.js'
import Comment from './Comment.js'

import './App.css';

class Post extends Component {
  constructor (props) {
    super ()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What would you like to see here?")
    this.setState ({
      body: newBody
      })
    }
  
  render (){
    let comments = this.props.comments.map((comment, index) => (
      <Comment body={comment} key={index} />
    ))
    // this says go through each comment in the array comments,
    // and then run the map method over it, using the two arguments comment and index.
    // then, plug the Comment component in (but assign it to the variable comments).
    // and the reason you have props.body in Comment.js is because it is referencing the body value here
    return (
      <div>
        <h1>{this.props.title}!</h1>
        <h3>by: {this.props.author}</h3><br/>
        <p></p>
        <p>{this.state.body}</p>
        <button onClick ={(e) => this.handleClick(e)}>Edit body</button>
        <br/>
        <h3>Comments:</h3>
        {comments}
      </div>
    )
  }
}



export default Post
