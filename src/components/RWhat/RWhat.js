import React, { Component } from 'react'
import _ from 'lodash'
import './RWhat.css'


class RWhat extends Component {
  render (){
    let {books} =this.props
    console.log(books)
    let bookResults = books.map((book, index) => {
      return (
        <div key={index} className="bookResults_item">
          <h3>{book.title}</h3>
          <h3>By: {book.author}</h3>
        </div>
      )
    })
    return (
      <div className="bookResults">
        {bookResults}
      </div>
    )
  }
}

export default RWhat
