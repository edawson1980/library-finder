import React, {Component} from 'react'
import SearchWhere from './SearchWhere'
import RWhere from '../RWhere/RWhere'
import {queryLocations} from '../Utils'



class SCWhere extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      query: '',
      hasSearched: false,
      locations: []
    }
  }

  onChange(menuLocation){
    queryLocations(menuLocation).then((locations) => {
      this.setState({
        locations: locations,
        hasSearched: true
      })
    })
  }

  render (){
    return (
      <div className="SCWhere">
        {
          this.state.hasSearched ?

          <RWhere
            locations = {this.state.locations}
          />:

          <SearchWhere
            onChange = {this.onChange}
            query = {this.state.query}
          />
        }

      </div>
    )
  }
}

export default SCWhere
