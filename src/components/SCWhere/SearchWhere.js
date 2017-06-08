import React, { Component } from 'react'
import './SearchWhere.css'
import {queryLocations} from '../Utils.js'

class SearchWhere extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    this.props.onChange(e.target.value)
  }

  render(){
    let locations = this.props.locations.map((location, index) => {
      return(
        <option key={index + 1} value={location.name}>{location.name}</option>
      )
    })
    locations.unshift(
      <option key="0">Pick your location</option>
    )
        return(
          <div className="menu">
            <select value={this.props.query} onChange={this.onChange}>
              {locations}
            </select>
          </div>
        )



    }
}

export default SearchWhere
