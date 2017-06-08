import React, { Component } from 'react'
import './SearchWhat.css'


class SearchWhat extends Component {
  constructor(props){
    super(props)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleAuthorInput = this.handleAuthorInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
  }

  handleTitleInput(e){
    this.props.handleTitleInput(e.target.value)
  }

  handleAuthorInput(e){
    this.props.handleAuthorInput(e.target.value)
  }

  onSubmitQuery(e){
    e.preventDefault()
    this.props.onSubmitQuery(this.props.query)
  }

  render (){
    return (
      <div className="searchWhat">
        <form onSubmit={this.onSubmitQuery}>
          <input
            type="text"
            placeholder="Enter a title here"
            value={this.props.query}
            onChange={this.handleTitleInput} />
          <input
            type="text"
            placeholder="Enter an author here"
            value={this.props.searchAuthor}
            onChange={this.handleAuthorInput} />
          <button type="submit">Search!</button>
        </form>

      </div>
    )
  }
}


export default SearchWhat
