import React, { Component } from 'react'
import './What.css'

var books= [
 {title: "For Whom The Bell Tolls" , author: "Ernest Hemingway"},
 {title: "Filth" , author: "Irvine Welsh"}
]


class What extends Component {

  render (){

    let books =this.props
    console.log(books)
    let results = books.map((book, index) => {
      return (
        <div key={index} value={books}>
          <ul>
            <li>{book.title}</li>
            <li>{book.author}</li>
          </ul>

        </div>
      )
    })
    return (
      <div className="whatResults">
        {results}
      </div>
    )
  }
}

export default What
