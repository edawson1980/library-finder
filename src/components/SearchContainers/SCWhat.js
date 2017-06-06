import React, { Component } from 'react'
import axios from 'axios'
import './SCWhat.css'

class SCWhat extends Component {
  constructor(){
    super()
    this.state = {
      searchTitle: null,
      searchAuthor: null,
      searchISBN: null
    }
  }
  handleSearchInput(e) {
  this.setState({
    searchTitle: e.target.value,
    searchAuthor: e.target.value,
    searchISBN: e.target.value
  })
}


  handleSearchSubmit(e){
    e.preventDefault()
    axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:title+inauthor:author&key=AIzaSyAuyXZMeyWg-0IBR8q7K7dTYlWkEq9oYxY', {
       params: {
         title: this.state.searchTitle,
         author: this.state.searchAuthor
       }
     })
     .then((response) => {
       console.log(response)
     })
     .catch((error) => {
       console.log(error)
     })
  }
  render() {
    return(
      <div>
        <form>
          <p>Search by title, author, or ISBN</p>
          <p>
            <label>Title:</label>
            <input type="text"/>
          </p>
          <br/>
          <p>
            <label>Author:</label>
            <input type="text"/>
          </p>
          <br/>
          <p>
            <label>ISBN:</label>
            <input type="number"/>
          </p>
          <br/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )



    }
}

export default SCWhat
