import React, {Component} from 'react'
import SearchWhat from './SearchWhat'
import RWhat from '../RWhat/RWhat'
import axios from 'axios'
import {queryBooks} from '../Books.js'
//import Books axios calls

class SCWhat extends Component {
  constructor(props){
    super(props)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleAuthorInput = this.handleAuthorInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.state = {
      titleQuery: '',
      authorQuery: '',
      hasSearched: false,
      books: []
    }
  }
//   handleSearchInput(searchText){
//   console.log(searchText)
//   this.setState({query: searchText})
// }

  handleTitleInput(titleInput){
    // console.log(titleInput)
    this.setState({titleQuery: titleInput}, () => {console.log(this.state.titleQuery)})
  }

  handleAuthorInput(authorInput){
    console.log(authorInput)
    this.setState({authorQuery: authorInput})
  }

  onSubmitQuery(searchText){
    queryBooks(searchText).then((books) => {
      this.setState({
        books: books,
        hasSearched: true
      })
    })
  }


  render (){
    return (
      <div className="SCWhat">
        {
          this.state.hasSearched ?

          <RWhat
            books={this.state.books}
          />:

          <SearchWhat
            handleTitleInput = {this.handleTitleInput}
            handleAuthorInput = {this.handleAuthorInput}
            onSubmitQuery = {this.onSubmitQuery}
            titleQuery = {this.state.titleQuery}
            authorQuery = {this.state.authorQuery}
          />
        }
      </div>

    )
  }
}


export default SCWhat
