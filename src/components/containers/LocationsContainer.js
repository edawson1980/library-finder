import React, {Component} from 'react'
import axios from 'axios'
// import LocationsList from '../Locations/LocationsList'

class LocationsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      // selected: null,
      locationQuery: "",
      locationResults: ""
    }
     var locationsBase=[
      {name: "Anacostia" , address: "1800 Good Hope Rd SE"},
      {name: "Bellevue" , address: "115 Atlantic St SW"},
      {name: "Benning" , address: "3935 Benning Rd NE"},
      {name: "Capitol View" , address: "5001 Central Ave SE"}
    ]
      // console.log(locationsBase, 'this is working');
    this.handleOnChange = this.handleOnChange.bind(this)
    this.searchLocations = this.searchLocations.bind(this)
  }

  handleOnChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  searchLocations(e){
    e.preventDefault()
    let selectedLocation = this.state.locationQuery
    this.setState({
      locationResults: this.state.selectedLocation
    })
  }





  render (){
    // console.log(locationsBase, 'this is working');

    // let location = this.props.locationsBase.map((name, index) => {
    //   console.log(location)
    //   return(
    //     <option key={index + 1} value={this.state.locationQuery}>{this.state.location.name}</option>
    //   )
    // })
    // location.unshift(
    //   <option key="0">Pick your location</option>
    // )

    return (
      <div>
        {/* name="locationQuery" value={this.state.locationQuery} */}
        <select className="menu" onChange={this.searchLocations}>
          {/* <option value={this.state.locationQuery}>Anacostia</option>
          <option value={this.state.locationQuery}>Benning</option>
          <option value={this.state.locationQuery}>Capitol View</option> */}
        </select>

        {/* <div>
          <LocationsList locations={this.state.locationResults} />
        </div> */}
      </div>

    )
  }
}


export default LocationsContainer
