import React, { Component } from 'react'
import './SCWhere.css'

class SCWhere extends Component {
  render() {
    let branches = this.props.branches.map((branch, index) => {
      return(
        <option key={index + 1} value={branch.name}>{branch.name}</option>
      )
    })
    branches.unshift(
      <option key="0">Pick your branch</option>
    )
        return(
          <div className="menu">
            <p>Please select a branch</p>
            <select>
              {branches}
            </select>
          </div>
        )



    }
}

export default SCWhere
