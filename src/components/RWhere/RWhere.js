import React, {Component} from 'react'
import './RWhere.css'


class RWhere extends Component {
  render (){
    let {locations} = this.props
    let results = locations.map((location, index) => {
      return (
        <div key={index} className="Results_item">
          <img
            className="Results_item_image"
            src='#'
            alt=('Map goes here.')/>

          <p className="Results_item_name">{location.name}</p>

        </div>
      )
    })
    return (
      <div className="results">
        {results}
      </div>
    )
  }
}


export default RWhere
