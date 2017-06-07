import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/App/App.js';

var post = {
  title: "Hungry Mouse",
  author: "Erin",
  body: "I'm hungry.  But also lazy.  And broke.",
  comments: [
    "get a job",
    "quit whining",
    "drink some water",
    "probably make some pasta"
  ]
}


ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);
