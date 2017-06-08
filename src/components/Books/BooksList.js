import React, { Component } from 'react'

class BooksList extends Component {
  render() {
    let books = this.props.books.map((item, id) => {
      let title = item.volumeInfo.title
      return (
        <div key={id}>
          <h2>{title}</h2>
        </div>
      )
    })
    return (
      <div>
        <h2>Books</h2>
        {books}
      </div>
    )
  }
}

export default BooksList
