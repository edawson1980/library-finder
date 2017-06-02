import React, { Component } from 'react'
import './SCWhere.css'

class SCWhere extends Component {
  render (){
    let libraries = this.props.libraries.map((library, index) => {
        return (
          <option key={index+1} value={library.name}>{library.name}</option>
        )
      })
        return(
          <div className="menu">
            <p>Please select a branch</p>
            <select>
              {libraries}
            </select>
          </div>
        )



    }
}
