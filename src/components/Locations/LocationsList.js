import React, { Component } from 'react'

class LocationsList extends Component {
  render() {
    let locations = this.props.locations.map((item, id) => {

      return (
        <div key={id}>
          <h2>{locations}</h2>
        </div>
      )
    })
    return (
      <div>
        <h2>Books</h2>
        {locations}
      </div>
    )
  }
}

export default LocationsList
