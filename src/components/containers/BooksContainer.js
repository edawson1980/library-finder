import React, { Component } from 'react'
import BooksList from '../Books/BooksList'
import axios from 'axios'
import './RWhat.css'


class BooksContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // bookQuery: "",
      titleQuery: "",
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchBooks = this.searchBooks.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  searchBooks(e) {
    e.preventDefault()
    // console.log(this.state.titleQuery)
    let title = this.state.titleQuery

    var url = "https://www.googleapis.com/books/v1/volumes?q=title:" + title + "&key=AIzaSyAuyXZMeyWg-0IBR8q7K7dTYlWkEq9oYxY"

    axios.get(url).then((response) => {
      console.log(response)
      this.setState({
        searchResults: response.data.items
      })
    })
  }

  render (){
    return (
      <div>
        <form>
          <p>Search by title</p>
          <p>
            <label>Title:</label>
            <input type="text" name="titleQuery" value={this.state.titleQuery} onChange={this.handleChange}/>
          </p>
          <br/>
          {/* <p>
            <label>Author:</label>
            <input type="text" name="authorQuery" value={this.state.authorQuery} onChange={this.handleChange}/>
          </p> */}
          <br/>
          <input type="submit" value="Search" onClick={this.searchBooks}/>
        </form>
        <div>
          <BooksList books={this.state.searchResults} />
        </div>
      </div>
    )
  }
}

export default BooksContainer
