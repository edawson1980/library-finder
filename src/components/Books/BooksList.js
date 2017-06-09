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
          <h2>{title}</h2>
          {/* <h2>make this a url.  dammit.{preview}</h2> */}



        </div>
      )
    })
    return (
      <div>
        <h4>Results: </h4>
        {books}
      </div>
    )
  }
}

export default BooksList
