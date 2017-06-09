import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class BooksList extends Component {
  render() {
    let books = this.props.books.map((item, id) => {
      let title = item.volumeInfo.title
      let preview = item.volumeInfo.previewLink
      return (
        <div key={id}>
          <h2 className="resource-link">{title}</h2>
          <a href={preview} target="_blank" rel="noopener noreferrer">find it online!</a>



        </div>
      )
    })
    return (
      <div>
        <h4 className="resource-link">Results: </h4>
        {books}
      </div>
    )
  }
}

export default BooksList
