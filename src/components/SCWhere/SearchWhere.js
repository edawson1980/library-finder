import React, { Component } from 'react'
import './SearchWhere.css'

class SearchWhere extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    this.props.onChange(e.target.value)
  }

  render(){
    let {branches} = this.props.branches.map((branch, index) => {
      return(
        <option key={index + 1} value={branch.name}>{branch.name}</option>
      )
    })
    branches.unshift(
      <option key="0">Pick your branch</option>
    )
        return(
          <div className="menu">
            <select value={this.props.query} onChange={this.onChange}>
              {branches}
            </select>
          </div>
        )



    }
}

export default SearchWhere
