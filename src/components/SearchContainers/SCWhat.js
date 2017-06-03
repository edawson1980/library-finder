import React, { Component } from 'react'
import './SCWhat.css'

class SCWhat extends Component {
  render() {
    return(
      <div>
        <form>
          <p>Search by title, author, or ISBN</p>
          <p>
            <label>Title:</label>
            <input type="text"/>
          </p>
          <br/>
          <p>
            <label>Author:</label>
            <input type="text"/>
          </p>
          <br/>
          <p>
            <label>ISBN:</label>
            <input type="number"/>
          </p>
          <br/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )



    }
}

export default SCWhat
