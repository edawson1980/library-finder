import React, { Component } from 'react'

class LocationsList extends Component {
  render() {
    let locations = this.props.locations.map((item, id) => {
      let name = item.name
      let map = this.item.url

      //error 'not a function'.  presumably because locations in undefined?
      //due to issue with LocationsContainer

      return (
        <div key={id}>
          <h2>{locations}</h2>
        </div>
      )
    })
    return (
      <div>
        <h2>Library</h2>
        {locations}
      </div>
    )
  }
}

export default LocationsList
